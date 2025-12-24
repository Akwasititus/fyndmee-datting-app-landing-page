// components/ChatWidget.tsx
"use client"

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { MessageCircle, X, Minimize2, Maximize2, Send, AlertCircle } from 'lucide-react'

const FAQ_QUESTIONS = [
  "How do I download the app?",
  "Is FyndMee free to use?",
  "How does matching work?",
  "Is my data safe?",
  "How to delete my account?",
  "What are premium features?"
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const { messages, sendMessage, status, error: apiError } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    messages: [
      {
        id: '1',
        role: 'assistant',
        parts: [{ type: 'text', text: 'Hi! I\'m FyndMee AI Assistant 🥰 How can I help you today? Ask me about downloading the app, features, or anything else!' }]
      }
    ],
    onError: (error) => {
      setError(error.message || 'Failed to send message')
      setTimeout(() => setError(null), 5000)
    },
    onFinish: () => {
      setError(null)
    }
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      sendMessage({ text: input })
      setInput('')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (apiError) {
      setError(apiError.message)
    }
  }, [apiError])

  const handleQuickQuestion = (question: string) => {
    if (question.trim()) {
      sendMessage({ text: question })
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #AB1E3E 0%, #D42952 100%)',
          boxShadow: '0 4px 20px rgba(171, 30, 62, 0.4)',
        }}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
        </span>
      </button>
    )
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-80 h-14' : 'w-80 h-[500px] md:w-96'} shadow-2xl rounded-2xl overflow-hidden`}>
      {/* Chat Header */}
      <div 
        className="flex items-center justify-between p-4 h-14"
        style={{
          background: 'linear-gradient(135deg, #AB1E3E 0%, #D42952 100%)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">FyndMee Assistant</h3>
            <p className="text-xs text-white/80">Powered by AI • Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white"
            aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && !isMinimized && (
        <div className="bg-red-50 border-l-4 border-red-500 p-3 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-xs text-red-700">{error}</p>
        </div>
      )}

      {/* Chat Content */}
      {!isMinimized && (
        <>
          <div className="bg-white h-[calc(100%-120px)] flex flex-col">
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-[80%] p-3 rounded-2xl ${message.role === 'user'
                        ? 'bg-gradient-to-r from-[#AB1E3E] to-[#D42952] text-white rounded-br-none'
                        : 'bg-gray-50 text-gray-800 rounded-bl-none border border-gray-100'
                      }`}
                  >
                    <div className="whitespace-pre-wrap">
                      {message.parts
                        .filter((part) => part.type === 'text')
                        .map((part, idx) => (
                          <span key={idx}>{(part as { text: string }).text}</span>
                        ))}
                    </div>
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.role === 'assistant' ? 'FyndMee AI' : 'You'}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-center gap-1 text-gray-500">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#AB1E3E] to-[#D42952] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#AB1E3E] to-[#D42952] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#AB1E3E] to-[#D42952] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-3 border-t">
              <p className="text-xs text-gray-500 mb-2 font-medium">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {FAQ_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    disabled={isLoading}
                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-[#AB1E3E]/10 to-[#D42952]/10 hover:from-[#AB1E3E]/20 hover:to-[#D42952]/20 text-gray-700 rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your question..."
                  className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#AB1E3E]/30 focus:border-transparent text-sm"
                  disabled={isLoading}
                  aria-label="Type your message"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #AB1E3E 0%, #D42952 100%)',
                  }}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                Powered by OpenAI • Responses may vary
              </p>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
