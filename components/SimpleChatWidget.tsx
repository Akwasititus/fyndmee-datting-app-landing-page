'use client'

import { useState, useRef, useEffect } from 'react'
import Image from "next/image";
import { GREETING, MAX_MESSAGE_LENGTH, getFaqReply } from '@/lib/vanessa/content.mjs'
import { ChatSession } from '@/lib/vanessa/session.mjs'
import { MessageCircle, X, Send, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const QUICK_QUESTIONS = [
  "How do I download the app?",
  "Is FyndMee free?",
  "How does matching work?",
  "Is my data safe?",
  "What makes FyndMee different?"
]

function SupportText({ text }: { text: string }) {
  return text.split(/(\/(?:contact-us|download|products-pricing-info|privacy-policy|safety)\b|info@fyndmee\.app)/g).map((part, index) =>
    ['/contact-us', '/download', '/products-pricing-info', '/privacy-policy', '/safety', 'info@fyndmee.app'].includes(part)
      ? <a key={index} href={part.startsWith('/') ? part : `mailto:${part}`} className="underline underline-offset-2">{part}</a>
      : part
  )
}

export default function FyndMeeAIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const session = useRef(new ChatSession())
  const nextMessageId = useRef(2)
  const [replySource, setReplySource] = useState<'ai' | 'faq' | null>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: GREETING,
        sender: 'bot',
        timestamp: new Date()
      }])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen && !isTyping) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen, isTyping])

  useEffect(() => {
    const currentSession = session.current
    return () => currentSession.reset()
  }, [])

  const handleSend = async (text = input) => {
    const request = session.current.begin(text)
    if (!request) return

    const content = text.trim()
    setMessages(prev => [...prev, {
      id: nextMessageId.current++, text: content, sender: 'user', timestamp: new Date()
    }])
    setInput('')
    setIsTyping(true)

    let reply: { message: string; source: 'ai' | 'faq' }
    // Slightly longer than the server's provider timeout, including request overhead.
    const timer = setTimeout(() => request.controller.abort(), 20_000)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: request.messages }),
        signal: request.controller.signal,
      })
      if (!response.ok) throw new Error('Chat unavailable')
      const data = await response.json()
      if (typeof data.message !== 'string' || !data.message.trim() || data.message.length > MAX_MESSAGE_LENGTH || !['ai', 'faq'].includes(data.source)) {
        throw new Error('Invalid chat response')
      }
      reply = { message: data.message, source: data.source }
    } catch {
      reply = { message: getFaqReply(content), source: 'faq' }
    } finally {
      clearTimeout(timer)
    }

    // Reset/unmount invalidates this request; client timeouts still get FAQ help.
    if (session.current.pending !== request) return
    if (request.controller.signal.aborted) {
      reply = { message: getFaqReply(content), source: 'faq' }
    }
    if (!session.current.complete(request, reply.message)) return
    setMessages(prev => [...prev, {
      id: nextMessageId.current++, text: reply.message, sender: 'bot', timestamp: new Date()
    }])
    setReplySource(reply.source)
    setIsTyping(false)
  }

  const handleQuickQuestion = (question: string) => {
    void handleSend(question)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault()
      void handleSend()
    }
  }

  const resetChat = () => {
    session.current.reset()
    setInput('')
    setIsTyping(false)
    setReplySource(null)
    setMessages([{
      id: nextMessageId.current++,
      text: GREETING,
      sender: 'bot',
      timestamp: new Date()
    }])
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true)
          setIsExpanded(isMobile)
        }}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Open AI chat assistant"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-rose-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 animate-pulse" />
          <div className="relative flex items-center justify-center w-16 h-16 bg-linear-to-r from-pink-500 to-rose-600 rounded-full shadow-2xl transition-transform group-hover:scale-110">
            <MessageCircle className="w-7 h-7 text-white" />
            <Sparkles className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
          </div>
        </div>
      </button>
    )
  }

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div
        className={`
          fixed z-50 flex flex-col overflow-hidden
          bg-white rounded-3xl shadow-2xl border border-gray-100 max-h-[calc(100dvh-3rem)]
          transition-all duration-500 ease-out
          ${isExpanded
            ? 'inset-4 md:inset-auto md:bottom-6 md:right-6 md:w-[500px] md:h-[750px]'
            : 'bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[650px]'
          }
        `}
      >
        {/* Header */}
        <div className="relative bg-linear-to-r from-pink-500 to-rose-600 p-4">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">


              <div className="relative">
                   <Image
              src="/images/new-logo-white.svg"
              alt="Fynd Mee logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain rounded-md"
              style={{ filter: 'brightness(0) invert(1)' }}
            />

                <div aria-hidden="true" className={`absolute -bottom-1 -right-1 w-4 h-4 ${replySource === 'faq' ? 'bg-amber-300' : 'bg-white'} rounded-full border-2 border-pink-500`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white/90">Meet Vanessa</h3>
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                </div>
                <p className="text-xs text-white/90">Our Virtual Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {isMobile && (
                <button
                  aria-label={isExpanded ? "Collapse chat" : "Expand chat"}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 min-h-11 min-w-11 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {isExpanded ? <ChevronDown className="w-4 h-4 text-white" /> : <ChevronUp className="w-4 h-4 text-white" />}
                </button>
              )}
              <button
                onClick={resetChat}
                className="px-3 py-1 min-h-11 text-xs font-medium text-white/90 hover:bg-white/20 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="p-2 min-h-11 min-w-11 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-white/90" />
              </button>

            </div>
          </div>
        </div>

        {/* Messages */}
        <div role="log" aria-label="Conversation with Vanessa" aria-live="polite" className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 bg-linear-to-b from-pink-50/30 to-white">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-4 py-3 rounded-2xl ${msg.sender === 'user'
                    ? 'bg-linear-to-r from-pink-500 to-rose-600 text-white/90 rounded-br-sm'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                    }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.sender === 'bot' ? <SupportText text={msg.text} /> : msg.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2">
              <span className="sr-only">Vanessa is replying.</span>
              <div aria-hidden="true" className="w-10 h-10 rounded-full bg-linear-to-r from-pink-500 to-rose-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white/90 animate-pulse" />
              </div>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-linear-to-r from-pink-500 to-rose-600 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="px-4 py-3 bg-linear-to-r from-pink-50 to-rose-50 border-t">
            <p className="text-xs font-semibold text-gray-700 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickQuestion(q)}
                  disabled={isTyping}
                  className="px-3 py-1.5 min-h-11 text-xs bg-white hover:bg-pink-50 text-gray-700 rounded-full border border-pink-200 transition-all hover:border-pink-400 disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              aria-label="Your question for Vanessa"
              maxLength={MAX_MESSAGE_LENGTH}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything about FyndMee..."
              disabled={isTyping}
              className="flex-1 min-w-0 px-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-base disabled:opacity-50"
            />
            <button
              aria-label="Send message"
              onClick={() => void handleSend()}
              disabled={isTyping || !input.trim()}
              className="p-3 bg-linear-to-r from-pink-500 to-rose-600 text-white/90  rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p role="status" className="text-xs text-center text-gray-600 mt-2">
            {isTyping ? 'Vanessa is replying...' : replySource === 'faq' ? 'Limited mode: FAQ answers; AI is unavailable' : replySource === 'ai' ? 'AI support: Vanessa can make mistakes' : 'Virtual support: Ask Vanessa a question'}
          </p>
          <p className="text-xs text-center text-gray-600 mt-1">
            Don't share passwords or sensitive details. <a href="/privacy-policy" className="underline">Privacy</a> · <a href="/contact-us" className="underline">Contact support</a>
          </p>
        </div>
      </div>
    </>
  )
}
