"use client"
import Image from "next/image"
import { Flame, Shield, Users, Zap, Heart, Lock, Mail } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"


export default function BeFirstToKnow() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage("Please enter your email address")
      setIsSuccess(false)
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address")
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      // Simulate API call to Supabase
      console.log("Sending to Supabase:", { email, subscribed_at: new Date().toISOString() })

      // Mock Supabase insert - replace with actual Supabase call
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email: email,
            subscribed_at: new Date().toISOString(),
            source: 'Newsletter Section'
          }
        ])
        .select()

      if (error) {
        throw error
      }

      // Success
      setMessage("🎉 Success! You've been added to our newsletter!")
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setMessage("")
      }, 5000)

    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      setMessage("❌ Something went wrong. Please try again.")
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative py-24 px-4 bg-linear-to-b from-gray-50 to-white dark:from-black dark:via-slate-950 dark:to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Be the first to know
              </h2>
              <p className="text-xl text-gray-600 dark:text-white/70 leading-relaxed">
                Fynd Mee has led to millions of relationships, marriages, and friendships around the world.
                Want to see what we're building next?
              </p>
              <div className="w-24 h-1 bg-[#AB1E3E] rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-white/70 leading-relaxed">
                Whether it's tips from our dating experts, how we're using AI to power better matchmaking,
                or feature updates like ID Verification, you'll be the first to discover how we're putting
                love at the heart of dating.
              </p>
            </div>

            {/* Subscribe */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-rose-500/50 focus:outline-none transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder-white/50"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center px-6 py-3 bg-[#AB1E3E] text-white/90 font-semibold rounded-lg hover:bg-[#8B1830] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 text-white/90 border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>

              {/* Message display */}
              {message && (
                <div className={`p-3 rounded-lg text-sm ${isSuccess
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                  }`}>
                  {message}
                </div>
              )}
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/all-in-fyndmee.png"
                alt="Fynd Mee App"
                width={900}
                height={800}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
