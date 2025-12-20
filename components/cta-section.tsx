"use client"

import { useState } from 'react'

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = () => {
    console.log('Download initiated')
  }

  return (
    <>
      <section className="relative py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-pink-500/10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-400/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Ready to Find Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#AB1E3E] to-rose-600 bg-clip-text text-transparent">
                Perfect Match
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5C50 1 150 1 199 5" stroke="#AB1E3E" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </span>
            ?
          </h2>

          <p className="text-xl text-gray-600 dark:text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of people who have found love on Fynd Mee. Your story could be next.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={handleDownload}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-10 py-4 bg-[#AB1E3E] text-white/90 font-semibold rounded-full text-lg shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                <span className={`transition-all duration-300 ${isHovered ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  Download App Now
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`absolute w-6 h-6 text-white/90 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white/80 backdrop-blur-md text-gray-900 font-semibold rounded-full text-lg border-2 border-gray-300 hover:bg-white hover:border-[#AB1E3E] transition-all duration-300 hover:scale-105 dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20 dark:hover:border-white/50 shadow-md"
            >
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 dark:text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#AB1E3E]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Available on iOS and Android</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#AB1E3E]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#AB1E3E]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Premium features optional</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose <span className="text-[#AB1E3E]">Fynd Mee</span>?
              </h3>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#AB1E3E]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#AB1E3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Safe & Secure</h4>
                    <p className="text-gray-600 dark:text-white/70">Your privacy is our priority. All profiles are verified, and your data is encrypted end-to-end.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#AB1E3E]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#AB1E3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Matching</h4>
                    <p className="text-gray-600 dark:text-white/70">Our advanced algorithm learns your preferences to suggest the most compatible matches.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#AB1E3E]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#AB1E3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Active Community</h4>
                    <p className="text-gray-600 dark:text-white/70">Join thousands of singles actively looking for meaningful connections in your area.</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#AB1E3E]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#AB1E3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Free to Start</h4>
                    <p className="text-gray-600 dark:text-white/70">Create your profile, browse matches, and start conversations completely free. Upgrade for premium features anytime.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                <button 
                  onClick={handleDownload}
                  className="w-full px-8 py-4 bg-[#AB1E3E] text-white/90 font-semibold rounded-full text-lg shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 hover:scale-105"
                >
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
