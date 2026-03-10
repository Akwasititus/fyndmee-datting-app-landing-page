"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, CheckCircle, Smartphone, Zap } from "lucide-react"

export default function DownloadPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Email submitted:", email)
      setEmail("")
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-linear-to-br dark:from-slate-950 dark:via-[#0f0b1a] dark:to-black">
      
      {/* Simple Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-20 py-6 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-8 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 max-w-xl">
    

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Meet New People
              <span className="block text-[#AB1E3E]">Today</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join thousands of users discovering meaningful connections. Download FyndMee now and start your journey.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Free to join', 'Instant matches', 'Secure & private'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#AB1E3E]" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white/10 hover:bg-gray-800 dark:hover:bg-white/20 rounded-2xl transition-colors border border-transparent dark:border-white/10"
              >
                <svg className="w-8 h-8 text-white mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left text-white">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white/10 hover:bg-gray-800 dark:hover:bg-white/20 rounded-2xl transition-colors border border-transparent dark:border-white/10"
              >
                <svg className="w-8 h-8 text-white mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 10.937-2.302-2.302 10.937-10.937zm3.199-3.198l2.807 2.806a2 2 0 0 1 0 2.829l-2.807 2.807-2.808-2.807 2.808-2.807zM5.864 2.21L8.167 4.51 5.33 7.346 3.027 5.043 5.864 2.21z" />
                </svg>
                <div className="text-left text-white">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Email Section */}
            <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#AB1E3E]/10 rounded-xl">
                  <Download className="w-5 h-5 text-[#AB1E3E]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Get Direct Download Link
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Enter your email and we'll send you a direct download link instantly
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-[#AB1E3E] dark:focus:border-[#AB1E3E] transition-colors pr-36"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-2 top-2 px-6 py-2 bg-[#AB1E3E] text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending</span>
                      </div>
                    ) : (
                      'Send Link'
                    )}
                  </button>
                </div>
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Download link sent successfully!</span>
                </div>
              )}

              <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

   
          </div>

          {/* Left Side - Clean Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-3xl lg:max-w-4xl">
              {/* Simple Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-rose-500/10 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/fynddd.jpg"
                  alt="FyndMee App Preview - Connect with people nearby"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}