"use client"
import { useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"

const EnhancedHeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  type FloatingHeart = {
    id: number
    left: number
    delay: number
    duration: number
    size: number
  }
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([])

  const typewriterWords = ["Perfect Match", "Soulmate", "True Love", "Dream Partner", "Forever Person", "Best Friend"]

  const images = [
    "/images/bg111.jpg",
    // "/images/fyndmee111.jpg",
    // "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/7.jpg",
  ]

  // Image carousel - 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 30000)
    return () => clearInterval(interval)
  }, [images.length])

  // Generate floating hearts
  useEffect(() => {
    const hearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 20 + Math.random() * 30,
    }))
    setFloatingHearts(hearts)
  }, [])

  // Typewriter effect - adjusted for 30 second cycle
  useEffect(() => {
    const currentWord = typewriterWords[currentWordIndex]

    const typewriterTimer = setTimeout(
      () => {
        if (isTyping) {
          if (charIndex < currentWord.length) {
            setCurrentText(currentWord.slice(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => {
              setIsTyping(false)
            }, 10000) // Display complete word for 10 seconds
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(currentWord.slice(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setCurrentWordIndex((currentWordIndex + 1) % typewriterWords.length)
            setIsTyping(true)
          }
        }
      },
      isTyping ? 150 : 100,
    )

    return () => clearTimeout(typewriterTimer)
  }, [charIndex, isTyping, currentWordIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image carousel with smooth transition */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt="Romantic background"
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Gradient overlay with cherry tint */}
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-black/60 via-[#AB1E3E]/20 to-black/60"></div>

      {/* Floating hearts animation */}
      {floatingHearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute animate-float z-2"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fill: "rgba(171, 30, 62, 0.2)",
            color: "rgba(171, 30, 62, 0.2)",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto text-center">
        {/* Sparkle decoration */}
        <div className="flex justify-center mb-6 animate-bounce-slow">
          <Sparkles className="w-12 h-12" style={{ color: '#AB1E3E' }} />
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-up">
          Find Your
        </h1>

        {/* Typewriter text */}
        <div className="relative inline-block mb-8">
          <h2 className="text-5xl md:text-7xl font-bold animate-fade-in-up min-h-[1.2em] inline-block" style={{ 
            background: 'linear-gradient(to right, #AB1E3E, #D42952, #AB1E3E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {currentText}
            <span className="animate-pulse" style={{ color: '#AB1E3E' }}>|</span>
          </h2>
          <div className="absolute inset-0 blur-3xl -z-10" style={{ 
            background: 'linear-gradient(to right, rgba(171, 30, 62, 0.3), rgba(212, 41, 82, 0.3))'
          }}></div>
        </div>

        {/* Subtitle */}
        <p className="text-white/90 text-xl md:text-2xl mt-8 mb-12 font-light animate-fade-in-up max-w-2xl mx-auto">
          Where authentic connections begin and love stories unfold
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          {/* Google Play Button */}
          <button className="group relative px-10 py-4 text-white font-semibold rounded-full text-lg shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden" style={{
            background: 'linear-gradient(to right, #AB1E3E, #D42952)',
            boxShadow: '0 25px 50px -12px rgba(171, 30, 62, 0.5)'
          }}>
            <span className="relative z-10 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z"
                  fill="white"
                />
                <path
                  d="M16.81 10.09L13.69 12L16.81 13.91L20.06 12.15C20.71 11.78 21 11.24 21 12C21 11.76 20.71 12.22 20.06 11.85L16.81 10.09Z"
                  fill="white"
                />
                <path d="M13.69 12L3.84 2.15C4.25 1.92 4.75 1.92 5.16 2.15L16.81 10.09L13.69 12Z" fill="white" />
                <path d="M13.69 12L16.81 13.91L5.16 21.85C4.75 22.08 4.25 22.08 3.84 21.85L13.69 12Z" fill="white" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </span>
          </button>

          {/* App Store Button */}
          <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-lg border-2 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl" style={{
            borderColor: 'rgba(171, 30, 62, 0.5)'
          }}>
            <span className="relative z-10 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.35 7.75 12.1 7.75C12.84 7.75 14.27 6.68 15.84 6.84C16.57 6.87 18.39 7.16 19.56 8.83C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                  fill="white"
                />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-5"></div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up:nth-child(2) {
          animation-delay: 0.2s;
        }

        .animate-fade-in-up:nth-child(3) {
          animation-delay: 0.4s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default EnhancedHeroSection
