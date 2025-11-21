"use client"

import { useState, useEffect } from 'react'

export default function CTASection() {
  const [downloadCount, setDownloadCount] = useState(12478)
  const [isHovered, setIsHovered] = useState(false)

  // Simulate increasing download count
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 10) + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1)
    // Add your actual download logic here
    console.log('Download initiated')
  }

  return (
    <section className="relative py-24 px-4 bg-linear-to-b from-gray-50 to-white dark:from-slate-950 dark:to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-rose-500/10 via-transparent to-pink-500/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Find Your{" "}
          <span className="bg-[#AB1E3E] bg-clip-text text-transparent">
            Perfect Match
          </span>
          ?
        </h2>

        <p className="text-xl text-gray-600 dark:text-white/70 mb-8 max-w-2xl mx-auto">
          Join thousands of people who have found love on Fynd Mee. Your story could be next.
        </p>

        {/* Download Counter */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 dark:bg-white/10 dark:border-white/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-white/80 font-medium">
              <span className="text-2xl font-bold text-[#AB1E3E]">{downloadCount.toLocaleString()}</span> downloads and counting!
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleDownload}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="px-10 py-4 bg-[#AB1E3E] text-white/90 font-semibold rounded-full text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <span className={`transition-all duration-300 ${isHovered ? '-translate-y-full' : 'translate-y-0'}`}>
              Download App Now
            </span>
            <span className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
            </span>
          </button>
          <button className="px-10 py-4 bg-white/80 backdrop-blur-md text-gray-900 font-semibold rounded-full text-lg border-2 border-gray-300 hover:bg-white transition-all duration-300 hover:scale-105 dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20">
            Learn More
          </button>
        </div>

        <p className="text-gray-500 dark:text-white/50 text-sm mt-8">
          Available on iOS and Android • Free to download • Premium features optional
        </p>
      </div>
    </section>
  )
}