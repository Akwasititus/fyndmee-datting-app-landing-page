'use client'

import { useState, useRef, useEffect } from 'react'
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

const SYSTEM_PROMPT = `You are a friendly, helpful customer support assistant for FyndMee, a modern dating app focused on authentic connections and meaningful relationships.

KEY INFORMATION ABOUT FYNDMEE:
- FyndMee uses AI-powered matching that learns user preferences
- All profiles are verified with photo and ID verification
- Features include: Smart Matching, Verified Profiles, Instant Messaging, Compatibility Scores, Privacy-First approach
- Available on iOS (App Store) and Android (Google Play)
- Free to download with optional premium features
- Premium features include: See who liked you, unlimited likes, advanced filters, profile boost
- The app has led to millions of relationships, marriages, and friendships worldwide
- FyndMee emphasizes genuine connections over casual encounters
- All data is encrypted and protected with user control over privacy

RESPONSE STYLE:
- Be warm, friendly, and encouraging
- Use emojis sparingly (1-2 per response)
- Keep responses concise (2-4 sentences unless more detail is specifically requested)
- Focus on the benefits and emotional value of finding meaningful connections
- If asked about technical issues or account-specific problems, suggest contacting support@fyndmee.com
- Emphasize safety, authenticity, and the AI-powered matching technology
- Be enthusiastic about helping people find love and meaningful relationships

Answer user questions naturally and conversationally.`

// Smart fallback responses
const FALLBACK_RESPONSES = {
  download: {
    patterns: ['download', 'install', 'get app', 'app store', 'play store', 'google play', 'ios', 'android', 'where can i', 'how to get'],
    responses: [
      "You can download FyndMee from both major app stores! 📱\n\nFor iOS users, search 'FyndMee' in the App Store. Android users can find us on Google Play. We also have QR codes on our website for quick access!\n\nOver 12,000+ people have already downloaded the app. Ready to join them?",
      "Getting started is easy! FyndMee is available on:\n\n• iOS - App Store\n• Android - Google Play\n\nJust search for 'FyndMee' and look for our pink heart logo. Download is free and takes less than a minute! 💝"
    ]
  },
  pricing: {
    patterns: ['free', 'cost', 'price', 'payment', 'pay', 'subscription', 'premium', 'paid', 'how much', 'charge'],
    responses: [
      "Great question! FyndMee is FREE to download and use. 💝\n\nYou get full access to:\n• Smart AI matching\n• Verified profiles\n• Instant messaging\n• Compatibility scores\n\nWe also offer Premium features starting at $9.99/month for things like seeing who liked you, unlimited likes, and profile boosts. But you can absolutely find meaningful connections with the free version!",
      "FyndMee won't cost you anything to start! The app is completely free to download and use basic features.\n\nIf you want extra perks like seeing who's already interested in you or unlimited likes, Premium is available for $9.99/month. But honestly, many of our success stories came from free users! 💕"
    ]
  },
  matching: {
    patterns: ['match', 'algorithm', 'how does it work', 'find people', 'compatible', 'suggestions', 'swipe'],
    responses: [
      "Our AI-powered matching is pretty smart! 🧠✨\n\nIt learns from:\n• Your interests and hobbies\n• Values and lifestyle preferences  \n• What you're looking for in a partner\n• Your activity patterns\n\nYou'll see profiles matched to you with compatibility scores. Swipe right if you're interested, and when both people swipe right - it's a match! The more you use the app, the better it gets at finding your perfect match.",
      "FyndMee uses advanced AI to find your perfect match! We analyze compatibility across multiple dimensions - interests, values, lifestyle, and relationship goals.\n\nEach profile shows you a compatibility score so you can see potential at a glance. The algorithm learns your preferences over time, getting smarter with every swipe. It's like having a personal matchmaker in your pocket! 💕"
    ]
  },
  safety: {
    patterns: ['safe', 'safety', 'privacy', 'secure', 'data', 'protection', 'verify', 'verification', 'trust'],
    responses: [
      "Your safety is our absolute top priority! 🔒\n\nEvery FyndMee profile goes through:\n• Photo verification (real people only!)\n• ID verification for authenticity\n• Manual review by our team\n\nPlus you get:\n• Encrypted messaging\n• Block and report features\n• Privacy controls (you decide what to share)\n• 24/7 safety monitoring\n\nWe're committed to creating a space where you can focus on finding love, not worrying about safety.",
      "Security and privacy are built into everything we do! 🛡️\n\nAll profiles are verified with photo + ID verification. Your messages are encrypted, your data is protected, and you have complete control over your privacy settings.\n\nYou can block or report anyone who makes you uncomfortable, and our team reviews reports quickly. We've created one of the safest dating apps out there!"
    ]
  },
  different: {
    patterns: ['different', 'special', 'unique', 'why fyndmee', 'why choose', 'better', 'stand out', 'compared'],
    responses: [
      "What makes FyndMee special? I'm glad you asked! 💕\n\n✨ AI-Powered Matching - Not just random profiles, but smart compatibility\n✅ Verified Profiles - Everyone is photo + ID verified (no catfishing!)\n💝 Real Connections - We attract people seeking meaningful relationships\n🔒 Privacy First - Your data is protected and encrypted\n📊 Compatibility Scores - See your potential with each match\n\nWe've helped create millions of relationships, marriages, and friendships. FyndMee isn't just another dating app - it's where authentic connections begin!",
      "FyndMee stands out in three big ways:\n\n1️⃣ Smart AI that actually learns what you're looking for\n2️⃣ Every single profile is verified (photo + ID) - real people only!\n3️⃣ We focus on meaningful connections, not just swiping games\n\nOur members tell us they appreciate the quality of matches and feeling safe. With over 12,000 downloads and countless success stories, we're building something special here! ✨"
    ]
  },
  features: {
    patterns: ['features', 'what can i do', 'capabilities', 'functions', 'tools'],
    responses: [
      "FyndMee is packed with features to help you find your perfect match! ✨\n\n🎯 Smart Matching - AI learns your preferences\n✅ Verified Profiles - Photo + ID verification\n💬 Instant Messaging - Chat with matches instantly\n📊 Compatibility Scores - See your match potential\n🔒 Privacy Controls - You decide what to share\n🌟 Profile Boosts - Get more visibility (Premium)\n\nEverything is designed to help you make authentic, meaningful connections!",
      "Here's what you can do with FyndMee:\n\n• Browse verified profiles matched to you\n• See detailed compatibility scores\n• Chat instantly when you match\n• Share photos in secure conversations\n• Control your privacy settings\n• Report/block as needed\n\nPremium members also get unlimited likes, see who liked them first, and get profile boosts. Want to know more about any specific feature?"
    ]
  },
  account: {
    patterns: ['create account', 'sign up', 'register', 'join', 'get started', 'profile', 'delete account'],
    responses: [
      "Getting started with FyndMee is super easy! 🎉\n\n1. Download the app (iOS or Android)\n2. Sign up with your phone number\n3. Add at least 2 photos\n4. Fill in your interests and preferences\n5. Verify your profile (photo + ID)\n6. Start matching!\n\nThe whole process takes about 5-10 minutes, and verification usually completes within 1-2 hours. Then you're ready to find your person! 💕",
      "Creating your profile is quick:\n\n• Download FyndMee from your app store\n• Enter your phone number for verification\n• Upload photos (minimum 2, but more is better!)\n• Share your interests and what you're looking for\n• Complete photo and ID verification\n\nTo delete your account later, just go to Profile → Settings → Account Settings → Delete Account. But we hope you'll find your match first! ✨"
    ]
  },
  success: {
    patterns: ['success', 'work', 'stories', 'testimonial', 'does it work', 'real', 'results'],
    responses: [
      "FyndMee has led to millions of relationships, marriages, and friendships worldwide! 💕\n\nOur members love:\n• The quality of matches (AI really works!)\n• Feeling safe with verified profiles\n• Finding people who want real relationships\n• The compatibility scores that guide them\n\nWe get messages every week from couples who met on FyndMee. Some are engaged, some are married, and many have found their best friend. Your story could be next! ✨",
      "Yes, it really works! 🎉\n\nWith 12,478+ downloads and counting, FyndMee has created countless success stories. Our AI matching and verification process means you're meeting real people who are genuinely looking for meaningful connections.\n\nThe compatibility scores help you focus on the best matches, and our members report higher quality conversations compared to other apps. Ready to write your own success story?"
    ]
  },
  greetings: {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'sup', 'yo'],
    responses: [
      "Hello! 👋 Welcome to FyndMee! I'm here to help you learn about our app and how we can help you find meaningful connections. What would you like to know?",
      "Hey there! 💕 Great to meet you! I'd love to tell you about FyndMee and how our AI-powered matching can help you find your perfect match. What questions do you have?",
      "Hi! ✨ Thanks for stopping by! I'm here to answer any questions about FyndMee - whether it's about safety, features, pricing, or how to get started. What's on your mind?"
    ]
  },
  thanks: {
    patterns: ['thank', 'thanks', 'appreciate', 'helpful', 'great'],
    responses: [
      "You're so welcome! I'm happy I could help. Feel free to ask anything else about FyndMee, or if you're ready, go ahead and download the app to start your journey to finding meaningful connections!",
      "My pleasure! ✨ That's what I'm here for. If you have any other questions as you explore FyndMee, just ask. And remember - your perfect match might be just a download away! 💝",
      "Glad I could help! 🎉 Don't hesitate to reach out if you think of more questions. We're excited to help you find authentic connections. Happy matching! 💕"
    ]
  }
}

const DEFAULT_FALLBACK = "I'm here to help with FyndMee! I can answer questions about:\n\n💕 Downloading the app\n🔒 Safety and privacy\n💰 Pricing and features\n🎯 How matching works\n✨ What makes us different\n\nWhat would you like to know? Or if you have a specific account issue, please contact support@fyndmee.com"

export default function FyndMeeAIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const conversationHistory = useRef<Array<{role: string, content: string}>>([])
  const lastCategory = useRef<string | null>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: "Hi there! 👋 I'm your FyndMee AI assistant, powered by Claude. I can help you with questions about our app, features, safety, or finding your perfect match. What would you like to know?",
        sender: 'bot',
        timestamp: new Date()
      }])
    }
  }, [isOpen])

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
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen, isTyping])

  // Fallback: Find response from hardcoded strings
  const findFallbackResponse = (userMessage: string): string | null => {
    const lowerMsg = userMessage.toLowerCase().trim()
    
    for (const [category, data] of Object.entries(FALLBACK_RESPONSES)) {
      const matched = data.patterns.some(pattern => 
        lowerMsg.includes(pattern.toLowerCase())
      )
      
      if (matched) {
        const responses = data.responses
        if (lastCategory.current === category && responses.length > 1) {
          const otherResponses = responses.filter((_, i) => i !== 0)
          lastCategory.current = category
          return otherResponses[Math.floor(Math.random() * otherResponses.length)]
        }
        
        lastCategory.current = category
        return responses[Math.floor(Math.random() * responses.length)]
      }
    }
    
    return null
  }

  // Try Claude API first
  const callClaudeAPI = async (userMessage: string): Promise<string> => {
    try {
      conversationHistory.current.push({
        role: "user",
        content: userMessage
      })

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: conversationHistory.current
        })
      })

      if (!response.ok) {
        throw new Error('Claude API failed')
      }

      const data = await response.json()
      const botMessage = data.content
        .filter((item: any) => item.type === "text")
        .map((item: any) => item.text)
        .join("\n")

      conversationHistory.current.push({
        role: "assistant",
        content: botMessage
      })

      return botMessage
    } catch (error) {
      console.log('Claude API unavailable, using fallback responses')
      throw error // Throw to trigger fallback
    }
  }

  const getResponse = async (userMessage: string): Promise<string> => {
    try {
      // STEP 1: Try Claude API first
      const claudeResponse = await callClaudeAPI(userMessage)
      return claudeResponse
    } catch (error) {
      // STEP 2: Claude failed, try hardcoded pattern matching
      console.log('Falling back to pattern matching...')
      const fallbackResponse = findFallbackResponse(userMessage)
      
      if (fallbackResponse) {
        return fallbackResponse
      }
      
      // STEP 3: No pattern matched, use default fallback
      console.log('Using default fallback message')
      lastCategory.current = null
      return DEFAULT_FALLBACK
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isTyping) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = input
    setInput('')
    setIsTyping(true)

    // Get response with fallback chain
    const response = await getResponse(currentInput)

    const botMessage: Message = {
      id: messages.length + 2,
      text: response,
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
    setTimeout(() => handleSend(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const resetChat = () => {
    conversationHistory.current = []
    lastCategory.current = null
    setMessages([{
      id: 1,
      text: "Hi there! 👋 I'm your FyndMee AI assistant, powered by Claude. I can help you with questions about our app, features, safety, or finding your perfect match. What would you like to know?",
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
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 animate-pulse" />
          <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full shadow-2xl transition-transform group-hover:scale-110">
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
          bg-white rounded-3xl shadow-2xl border border-gray-100
          transition-all duration-500 ease-out
          ${isExpanded
            ? 'inset-4 md:inset-auto md:bottom-6 md:right-6 md:w-[500px] md:h-[750px]'
            : 'bottom-6 right-6 w-[380px] h-[650px]'
          }
        `}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-pink-500 to-rose-600 p-4">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white/90" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-pink-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white/90">FyndMee AI</h3>
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                </div>
                <p className="text-xs text-white/90">Powered by Claude AI</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {isMobile && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {isExpanded ? <ChevronDown className="w-4 h-4 text-white" /> : <ChevronUp className="w-4 h-4 text-white" />}
                </button>
              )}
              <button
                onClick={resetChat}
                className="px-3 py-1 text-xs font-medium text-white/90 hover:bg-white/20 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-white/90" />
              </button>
              
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-pink-50/30 to-white">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white/90 rounded-br-sm'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white/90 animate-pulse" />
              </div>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full animate-bounce"
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
          <div className="px-4 py-3 bg-gradient-to-r from-pink-50 to-rose-50 border-t">
            <p className="text-xs font-semibold text-gray-700 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickQuestion(q)}
                  disabled={isTyping}
                  className="px-3 py-1.5 text-xs bg-white hover:bg-pink-50 text-gray-700 rounded-full border border-pink-200 transition-all hover:border-pink-400 disabled:opacity-50"
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about FyndMee..."
              disabled={isTyping}
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white/90  rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2 flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            AI-powered • Always learning
          </p>
        </div>
      </div>
    </>
  )
}



/// https://claude.ai/chat/931d9076-66ec-4661-bdda-759296e02c54