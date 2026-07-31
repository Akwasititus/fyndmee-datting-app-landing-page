'use client'

import { useState, useRef, useEffect } from 'react'
import Image from "next/image";
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

const SYSTEM_PROMPT = `You are a friendly, helpful customer virtual support assistant for FyndMee. Your namen is Vanassah, a modern dating app focused on authentic connections and meaningful relationships.

KEY INFORMATION ABOUT FYNDMEE:
- Fynd Mee is a social connection and dating platform designed to help people build meaningful relationships, friendships, networking connections, and genuine communities.
- Fynd Mee uses intelligent matching technology that learns from user preferences, interests, activity, lifestyle choices, and relationship goals to suggest more compatible connections over time.
- Users can join Fynd Mee for different purposes including long-term relationships, casual dating, friendships, networking, hobby matching, social connections, and meeting people with shared interests.
- Fynd Mee includes features such as Smart Matching, Verified Profiles, Instant Messaging, Compatibility Scores, Supa Likes, Profile Boosts, Advanced Filters, Rewind Actions, Privacy Controls, and Secure Account Verification.
- The app allows users to connect based on interests, profession, industry, education, hobbies, lifestyle, relationship intentions, and location preferences.
- Fynd Mee supports networking and friendship connections in addition to dating, making it more than just a traditional dating app.
- Users can match with people who share hobbies and interests such as fitness, photography, sports, entrepreneurship, music, travel, gaming, business, and more.
- Fynd Mee is available on both iOS through the Apple App Store and Android through Google Play.
- The app is free to download and includes optional premium subscriptions with additional features and visibility tools.
- Premium features may include seeing who liked your profile, unlimited likes, advanced filters, profile boosts, rewind actions, priority visibility, and additional matching tools.
- A Profile Boost increases a user's visibility for a limited time, helping their profile appear to more people nearby and receive more interactions.
- Supa Likes help users show stronger interest in a profile and stand out more clearly during matching.
- Compatibility Scores help users better understand how well they may align with another person based on shared interests, values, preferences, and activity.
- Fynd Mee focuses on authentic and meaningful connections rather than fake profiles, bots, or low-quality interactions.
- User safety and privacy are major priorities for Fynd Mee.
- Profiles may go through photo verification, identity verification, and moderation processes to help maintain authenticity and reduce fake accounts.
- All sensitive user data is encrypted and protected with privacy-focused security systems.
- Users have control over their privacy settings, visibility preferences, matching preferences, and profile information.
- Fynd Mee includes reporting, blocking, moderation, and account safety tools to help users stay safe while using the platform.
- Fynd Mee continuously improves its matching systems and app features based on user feedback, testing, and community needs.
- The more users interact with the app, the more personalized and accurate their matching experience becomes.
- Fynd Mee aims to create a welcoming and inclusive environment where people from different backgrounds, cultures, countries, and communities can connect comfortably.
- The platform is designed for adults aged 18 and above.
- Fynd Mee supports users looking for serious relationships, meaningful friendships, social discovery, professional networking, and authentic conversations.
- Fynd Mee's mission is to create a safe, authentic, and enjoyable platform where people can build real human connections through technology.
- Fynd Mee's vision is to become one of the leading social connection platforms focused on genuine relationships, trust, safety, and meaningful interaction.
- Fynd Mee values authenticity, safety, inclusiveness, innovation, user experience, privacy, and meaningful human connection.
- Eric Ford is the founder and CEO of Fynd Mee. His vision is to use technology and culture-driven innovation to help people build genuine relationships and stronger communities.
- Vanessa is the virtual assistant for Fynd Mee. She is designed to provide friendly, supportive, and informative assistance to users about the app, features, matching process, safety, and general questions.
- Betty Fosua Oduro Prempeh is the Chief Marketing Officer of Fynd Mee and helps lead the platform's marketing, outreach, and community growth efforts.
- Fynd Mee regularly updates the app with improvements, new features, bug fixes, performance enhancements, and user-requested updates.
- Fynd Mee encourages respectful communication, authentic interaction, and positive user experiences throughout the platform.
- Customer support is available to assist users with questions, technical issues, safety concerns, account support, and general guidance.
- Fynd Mee is designed to help users discover real people, real conversations, and real connections in a safer and more intentional environment.


RESPONSE STYLE:
- Be warm, friendly, and encouraging
- Use emojis sparingly (1-2 per response)
- Keep responses concise (2-4 sentences unless more detail is specifically requested)
- Focus on the benefits and emotional value of finding meaningful connections
- If asked about technical issues or account-specific problems, suggest contacting info@fyndmee.app
- Emphasize safety, authenticity, and the AI-powered matching technology
- Be enthusiastic about helping people find love and meaningful relationships

Answer user questions naturally and conversationally.`

// fallback responses
const FALLBACK_RESPONSES = {

  download: {
    patterns: [
      'download', 'install', 'get app', 'app store', 'appstore',
      'play store', 'playstore', 'google play', 'ios', 'android',
      'where can i download', 'how to install', 'where do i get the app'
    ],
    responses: [
      "You can download Fynd Mee on both major app stores! 📱\n\nFor iPhone users, simply search 'Fynd Mee' on the Apple App Store. Android users can find us on Google Play.\n\nThe app is free to download and getting started only takes a few minutes. Welcome to a better way to connect! 💕",
      "Getting started with Fynd Mee is easy! ✨\n\n• Available on iOS through the Apple App Store\n• Available on Android through Google Play\n\nJust search for 'Fynd Mee' and look for our official logo. Download, create your profile, and start connecting!"
    ]
  },

  pricing: {
    patterns: [
      'free', 'cost', 'price', 'payment', 'premium', 'subscription',
      'paid', 'how much', 'pricing', 'membership', 'upgrade'
    ],
    responses: [
      "Fynd Mee is completely free to download and use. 💝\n\nFree users can enjoy matching, messaging, profile browsing, compatibility scores, and more.\n\nWe also offer optional Premium features like unlimited likes, advanced filters, profile boosts, and seeing who liked your profile first.",
      "You can enjoy most of Fynd Mee without paying anything. ✨\n\nPremium subscriptions are available for users who want extra visibility and additional matching tools, but meaningful connections can absolutely happen on the free version too!"
    ]
  },

  matching: {
    patterns: [
      'match', 'matching', 'algorithm', 'compatibility',
      'how does matching work', 'find people', 'compatible',
      'swipe', 'recommendations', 'suggestions'
    ],
    responses: [
      "Fynd Mee uses intelligent matching technology to help users connect more meaningfully. 🧠✨\n\nThe app learns from your:\n• Interests and hobbies\n• Lifestyle preferences\n• Relationship goals\n• Activity and engagement\n• Location and preferences\n\nThe more you use the app, the more personalized your matches become.",
      "Our matching system is designed to go beyond random swiping. 💕\n\nFynd Mee looks at compatibility, shared interests, lifestyle choices, and user preferences to suggest people you may genuinely connect with.\n\nCompatibility Scores help guide users toward stronger potential matches."
    ]
  },

  safety: {
    patterns: [
      'safe', 'safety', 'privacy', 'secure', 'verification',
      'verify', 'fake profiles', 'security', 'data protection',
      'trust', 'encrypted'
    ],
    responses: [
      "User safety is one of Fynd Mee's biggest priorities. 🔒\n\nWe use profile verification, moderation systems, reporting tools, privacy controls, and encrypted systems to help create a safer environment for everyone.\n\nUsers also have the ability to block or report accounts whenever necessary.",
      "Fynd Mee is designed with privacy and authenticity in mind. 🛡️\n\nProfiles may go through verification processes to reduce fake accounts and improve trust within the community.\n\nYour personal data and conversations are protected using secure and encrypted systems."
    ]
  },

  features: {
    patterns: [
      'features', 'tools', 'what can i do',
      'capabilities', 'functions', 'options'
    ],
    responses: [
      "Fynd Mee includes a variety of features designed to help users build genuine connections. ✨\n\nSome key features include:\n• Smart Matching\n• Compatibility Scores\n• Instant Messaging\n• Verified Profiles\n• Supa Likes\n• Profile Boosts\n• Advanced Filters\n• Privacy Controls\n• Secure Reporting Tools",
      "Fynd Mee is more than just a dating app. 💕\n\nUsers can connect for relationships, friendships, networking, hobbies, and social discovery.\n\nThe app includes matching tools, messaging features, visibility boosts, compatibility insights, and profile customization options."
    ]
  },

  premium: {
    patterns: [
      'boost', 'supa like', 'premium features',
      'rewind', 'unlimited likes', 'who liked me',
      'visibility', 'premium'
    ],
    responses: [
      "Fynd Mee Premium includes additional tools that help improve visibility and matching opportunities. 🌟\n\nPremium features may include:\n• Unlimited Likes\n• Profile Boosts\n• Supa Likes\n• Advanced Filters\n• Rewind Actions\n• Seeing who liked your profile",
      "A Boost helps your profile appear to more people for a limited time, increasing visibility and potential matches. ✨\n\nSupa Likes allow users to express stronger interest and stand out more clearly during matching."
    ]
  },

  networking: {
    patterns: [
      'networking', 'business', 'friends',
      'friendship', 'community', 'hobbies',
      'meet people'
    ],
    responses: [
      "Fynd Mee is designed for more than dating. 🤝\n\nUsers can also connect for friendships, networking, hobby matching, social discovery, and community building.\n\nMany users join to meet people with shared interests, careers, lifestyles, or activities.",
      "Whether you're looking for a relationship, new friends, business connections, or people who share your hobbies, Fynd Mee helps bring people together through more intentional and meaningful matching."
    ]
  },

  founder: {
    patterns: [
      'founder', 'ceo', 'who created', 'who owns',
      'eric ford', 'about the founder'
    ],
    responses: [
      "Fynd Mee was founded by Eric Ford. ✨\n\nHis vision is to build a safer and more authentic platform where people can create meaningful human connections through technology and community-driven experiences.",
      "Eric Ford is the founder and CEO of Fynd Mee. He is passionate about combining technology, culture, and human connection to help people build genuine relationships and communities."
    ]
  },

  vanessa: {
    patterns: [
      'vanessa', 'assistant', 'virtual assistant',
      'chatbot', 'who are you'
    ],
    responses: [
      "Hi! I'm Vanessa, the virtual assistant for Fynd Mee. 💕\n\nI'm here to help answer questions about the app, matching, features, safety, profiles, and anything else you may need while using Fynd Mee.",
      "I'm Vanessa! ✨ Your friendly Fynd Mee assistant.\n\nI’m here to make your experience smoother by helping with questions about the app, connections, safety, features, and general support."
    ]
  },

  greetings: {
    patterns: [
      'hello', 'hi', 'hey', 'good morning',
      'good afternoon', 'good evening'
    ],
    responses: [
      "Hello! 👋 Welcome to Fynd Mee. I'm Vanessa, your virtual assistant. How can I help you today?",
      "Hey there! 💕 Thanks for stopping by Fynd Mee. Feel free to ask me anything about the app, matching, features, or safety.",
      "Hi! ✨ I'm here to help you learn more about Fynd Mee and how it works. What would you like to know?"
    ]
  },

  thanks: {
    patterns: [
      'thank you', 'thanks', 'appreciate',
      'helpful', 'great'
    ],
    responses: [
      "You're very welcome! 💕 I'm always here if you have more questions about Fynd Mee.",
      "Happy to help! ✨ Feel free to ask anything else anytime.",
      "Glad I could help! 🎉 Wishing you an amazing experience on Fynd Mee."
    ]
  }
};


const DEFAULT_FALLBACK =
  "I'm here to help with Fynd Mee! 💕\n\nYou can ask me about:\n• Downloading the app\n• Safety and privacy\n• Matching and compatibility\n• Premium features\n• Networking and friendships\n• Account setup\n• Profile features\n\nWhat would you like to know?";


export default function FyndMeeAIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const conversationHistory = useRef<Array<{ role: string, content: string }>>([])
  const lastCategory = useRef<string | null>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: "Hi there! 👋 I am Vanessa, your virtual assistant. I can help you with questions about our app, features, safety, or finding your perfect match. What would you like to know?",
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

      const response = await fetch("/api/chat", {  // Call your API route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: conversationHistory.current,
          systemPrompt: SYSTEM_PROMPT
        })
      })

      if (!response.ok) {
        throw new Error('Claude API failed');
      }

      const data = await response.json();
      const botMessage = data.message;

      conversationHistory.current.push({
        role: "assistant",
        content: botMessage
      })

      return botMessage
    } catch (error) {
      console.log('Claude API unavailable, using fallback responses')
      throw error
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
      text: "Hi there! 👋 I am Vanessa, your virtual assistant. I can help you with questions about our app, features, safety, or finding your perfect match. What would you like to know?",
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
          bg-white rounded-3xl shadow-2xl border border-gray-100
          transition-all duration-500 ease-out
          ${isExpanded
            ? 'inset-4 md:inset-auto md:bottom-6 md:right-6 md:w-[500px] md:h-[750px]'
            : 'bottom-6 right-6 w-[380px] h-[650px]'
          }
        `}
      >
        {/* Header */}
        <div className="relative bg-linear-to-r from-pink-500 to-rose-600 p-4">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">


              <div className="relative">
                   <img
              src="/images/new-logo-white.svg"
              alt="Fynd Mee logo"
              className="h-8 w-8 object-contain rounded-md"
              style={{ filter: 'brightness(0) invert(1)' }}
            />

                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-pink-500" />
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
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-linear-to-b from-pink-50/30 to-white">
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
              <div className="w-10 h-10 rounded-full bg-linear-to-r from-pink-500 to-rose-600 flex items-center justify-center">
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
              className="p-3 bg-linear-to-r from-pink-500 to-rose-600 text-white/90  rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2 flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Vanessa is online
          </p>
        </div>
      </div>
    </>
  )
}

/// https://claude.ai/chat/931d9076-66ec-4661-bdda-759296e02c54