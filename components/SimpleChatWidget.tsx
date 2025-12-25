// components/SimpleChatWidget.tsx
"use client"

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Minimize2, Maximize2, Send, HelpCircle, Download, Shield, Heart, Users, CreditCard, ChevronDown, ChevronUp, Smartphone } from 'lucide-react'

const FAQ_DATABASE = [
    {
        keywords: ['download', 'install', 'get app', 'how to get', 'app store', 'play store', 'google play', 'ios', 'android'],
        response: "You can download FyndMee from the App Store for iOS or Google Play for Android. Use the QR codes on our website for quick access! 📱\n\nFor direct links:\n• iOS: https://apps.apple.com (search 'FyndMee')\n• Android: https://play.google.com (search 'FyndMee')",
        icon: <Download className="w-4 h-4" />,
        quickQuestion: "How do I download the app?"
    },
    {
        keywords: ['free', 'cost', 'price', 'payment', 'subscription', 'premium', 'paid'],
        response: "FyndMee is completely FREE to download and use basic features! 💝\n\nWe offer optional Premium features for enhanced experience:\n• See who liked you\n• Unlimited likes\n• Advanced filters\n• Boost your profile\n\nPremium starts at $9.99/month.",
        icon: <CreditCard className="w-4 h-4" />,
        quickQuestion: "Is FyndMee free?"
    },
    {
        keywords: ['match', 'matching', 'algorithm', 'compatible', 'compatibility', 'find people', 'suggestions'],
        response: "Our AI-powered matching considers:\n• Your interests and hobbies\n• Values and personality traits\n• Location preferences\n• Relationship goals\n\nSwipe right 👍 on profiles you like. When both users swipe right, it's a match! ✨",
        icon: <Heart className="w-4 h-4" />,
        quickQuestion: "How does matching work?"
    },
    {
        keywords: ['safe', 'safety', 'privacy', 'secure', 'data', 'protection', 'verify', 'verification'],
        response: "Your safety is our top priority! 🔒\n\nWe have:\n• Photo verification system\n• In-app reporting\n• Encrypted chats\n• Privacy controls\n• Manual profile reviews\n• Block/Report features\n\nNever share personal information outside the app.",
        icon: <Shield className="w-4 h-4" />,
        quickQuestion: "Is my data safe?"
    },
    {
        keywords: ['delete', 'remove', 'close account', 'deactivate', 'uninstall'],
        response: "To delete your account:\n1. Go to Profile → Settings ⚙️\n2. Tap 'Account Settings'\n3. Select 'Delete Account'\n4. Confirm your choice\n\n⚠️ This action is permanent and cannot be undone.\n\nConsider deactivating instead if you need a break!",
        icon: <Users className="w-4 h-4" />,
        quickQuestion: "How to delete account?"
    },
    {
        keywords: ['create profile', 'sign up', 'register', 'make account', 'join'],
        response: "Creating a profile is easy! 🎉\n1. Download the app\n2. Enter your phone number\n3. Add photos (minimum 2)\n4. Fill in your interests\n5. Set your preferences\n6. Start matching!\n\nProfile verification takes 1-2 hours.",
        icon: <HelpCircle className="w-4 h-4" />,
        quickQuestion: "How to create profile?"
    }
]

type Message = {
    id: number
    text: string
    sender: 'user' | 'bot'
    timestamp: Date
}

export default function SimpleChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi there! 👋 I'm FyndMee Assistant. Ask me about downloading, features, safety, or anything else about our dating app!",
            sender: 'bot',
            timestamp: new Date()
        }
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current && !isTyping) {
            setTimeout(() => {
                inputRef.current?.focus()
            }, 300)
        }
    }, [isOpen, isTyping])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const findResponse = (userMessage: string): string => {
        const lowerMsg = userMessage.toLowerCase()

        // Check each FAQ category
        for (const faq of FAQ_DATABASE) {
            if (faq.keywords.some(keyword => lowerMsg.includes(keyword))) {
                return faq.response
            }
        }

        // Default responses
        const defaultResponses = [
            "I'm here to help with FyndMee questions! Try asking about downloading, safety features, or how matching works. 💕",
            "I specialize in FyndMee questions. Try asking: 'How do I download?' or 'Is the app free?' 📱",
            "For account-specific issues, please contact support@fyndmee.com. For general questions, I'm here to help! ✨",
            "FyndMee helps you find meaningful connections. What would you like to know about our dating app? ❤️"
        ]

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    }

    const handleSend = () => {
        if (!input.trim()) return

        // Add user message
        const userMessage: Message = {
            id: messages.length + 1,
            text: input,
            sender: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsTyping(true)

        // Simulate typing delay
        setTimeout(() => {
            const botResponse: Message = {
                id: messages.length + 2,
                text: findResponse(input),
                sender: 'bot',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, botResponse])
            setIsTyping(false)
            // Focus input again after response
            setTimeout(() => inputRef.current?.focus(), 100)
        }, 800 + Math.random() * 400)
    }

    const handleQuickQuestion = (question: string) => {
        setInput(question)
        setTimeout(() => {
            handleSend()
        }, 50)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const resetChat = () => {
        setMessages([
            {
                id: 1,
                text: "Hi there! 👋 I'm FyndMee Assistant. Ask me about downloading, features, safety, or anything else about our dating app!",
                sender: 'bot',
                timestamp: new Date()
            }
        ])
    }

    // Mobile detection
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (!isOpen) {
        return (
            <button
                onClick={() => {
                    setIsOpen(true)
                    setIsExpanded(isMobile) // Auto-expand on mobile
                }}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce-slow"
                style={{
                    background: 'linear-gradient(135deg, #AB1E3E 0%, #D42952 100%)',
                    boxShadow: '0 8px 32px rgba(171, 30, 62, 0.4)',
                }}
                aria-label="Open chat assistant"
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
        <>
            {/* Backdrop for expanded mode */}
            {isExpanded && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsExpanded(false)}
                />
            )}

            <div
                className={`
          fixed z-50 transition-all duration-500 ease-out animate-grow-in
          ${isExpanded
                        ? 'inset-4 md:inset-auto md:bottom-6 md:right-6 md:w-[800px] md:h-[900px]'
                        : 'bottom-6 right-6 w-80 h-[700px] md:w-96'
                    }
          shadow-2xl rounded-2xl overflow-hidden border border-gray-200
        `}
            >
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
                        <div className="flex-1">
                            <h3 className="font-semibold text-white">FyndMee Assistant</h3>
                            <p className="text-xs text-white/80 truncate">Ask me anything about the app!</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Expand/Collapse button - only show on mobile or when not expanded */}
                        {isMobile && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white"
                                aria-label={isExpanded ? "Shrink chat" : "Expand chat"}
                            >
                                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                            </button>
                        )}

                        {/* Reset chat button */}
                        <button
                            onClick={resetChat}
                            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white text-xs"
                            aria-label="Start new chat"
                            title="Start new chat"
                        >
                            New
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

                {/* Chat Content */}
                <div className="bg-white h-[calc(100%-56px)] flex flex-col">
                    {/* Welcome Banner - Only show at the beginning */}


                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                            >
                                <div
                                    className={`inline-block max-w-[85%] p-3 rounded-2xl ${message.sender === 'user'
                                        ? 'bg-gradient-to-r from-[#AB1E3E] to-[#D42952] text-white rounded-br-none'
                                        : 'bg-gray-50 text-gray-800 rounded-bl-none border border-gray-100'
                                        }`}
                                >
                                    <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                                </div>
                                <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                    {message.sender === 'bot' ? 'FyndMee Assistant' : 'You'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex items-center gap-2 text-gray-500">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                    <MessageCircle className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#AB1E3E] to-[#D42952] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#AB1E3E] to-[#D42952] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#AB1E3E] to-[#D42952] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Questions - Always visible at bottom */}
                    <div className="p-3 border-t bg-gray-50">
                        <p className="text-xs font-medium text-gray-700 mb-2 flex items-center gap-1">
                            <HelpCircle className="w-3 h-3" />
                            Quick questions:
                        </p>
                        <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
                            {FAQ_DATABASE.map((faq, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickQuestion(faq.quickQuestion)}
                                    disabled={isTyping}
                                    className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 shadow-sm"
                                >
                                    <span className="text-[#AB1E3E]">
                                        {faq.icon}
                                    </span>
                                    <span className="text-xs font-medium whitespace-nowrap">
                                        {faq.quickQuestion}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input Form */}
                    <div className="p-4 border-t bg-white">
                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your question about FyndMee..."
                                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#AB1E3E]/50 focus:border-transparent text-sm shadow-sm"
                                disabled={isTyping}
                                aria-label="Type your message"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isTyping || !input.trim()}
                                className="p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
                                style={{
                                    background: 'linear-gradient(135deg, #AB1E3E 0%, #D42952 100%)',
                                }}
                                aria-label="Send message"
                            >
                                <Send className="w-5 h-5 text-white" />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 text-center mt-2 flex items-center justify-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            FyndMee Assistant • Always available
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </>
    )
}
