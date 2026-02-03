'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function ProfileRedirect() {
  const params = useParams()
  const token = params.token as string
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    if (!token) return

    const userAgent = navigator.userAgent
    const isIOS = /iPad|iPhone|iPod/.test(userAgent)
    const isAndroid = /Android/.test(userAgent)
    
    console.log('Platform detected:', { isIOS, isAndroid })
    console.log('Token:', token)

    // Try to open the app immediately
    const appLink = `fyndmee://profile/${token}`
    const universalLink = `https://fyndmee.app/profile/${token}`
    
    // Attempt to open app
    window.location.href = isIOS ? universalLink : appLink
    
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Fallback after 3 seconds - redirect to store
    const timeout = setTimeout(() => {
      console.log('App did not open, redirecting to store')
      
      if (isIOS) {
        window.location.href = 'https://apps.apple.com/app/id123456789' // Replace with your App Store URL
      } else if (isAndroid) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.fyndmee.app' // Replace with your package
      } else {
        window.location.href = 'https://fyndmee.app/download'
      }
    }, 3000)

    return () => {
      clearTimeout(timeout)
      clearInterval(countdownInterval)
    }
  }, [token])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Main text */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Opening FyndMee...
        </h1>
        
        {/* Countdown */}
        <p className="text-white/80 text-lg mb-2">
          Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}
        </p>
        
        {/* Info text */}
        <p className="text-white/60 text-sm max-w-md mx-auto">
          If the app doesn't open automatically, you'll be redirected to download it.
        </p>

        {/* Manual button (shows after countdown) */}
        {countdown === 0 && (
          <button
            onClick={() => {
              const userAgent = navigator.userAgent
              const isIOS = /iPad|iPhone|iPod/.test(userAgent)
              const isAndroid = /Android/.test(userAgent)
              
              if (isIOS) {
                window.location.href = 'https://apps.apple.com/app/id123456789'
              } else if (isAndroid) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.fyndmee.app'
              } else {
                window.location.href = 'https://fyndmee.app/download'
              }
            }}
            className="mt-6 px-8 py-3 bg-white text-purple-700 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            Download FyndMee
          </button>
        )}
      </div>
    </div>
  )
}
