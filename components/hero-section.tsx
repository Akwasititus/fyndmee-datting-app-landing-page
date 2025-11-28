"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"
import { QRCodeSVG } from 'qrcode.react';

const EnhancedHeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [floatingHearts, setFloatingHearts] = useState<any[]>([])

  const typewriterWords = ["Perfect Match", "Soulmate", "True Love", "Dream Partner", "Forever Person", "Best Friend"]
  const images = ["/images/bg111.jpg", "/images/fyndmee-bg-1.png", "/images/fyndmee-bg-3.jpg", "/images/4.jpg", "/images/5.jpg", "/images/7.jpg"]

  // Background image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 30000)
    return () => clearInterval(interval)
  }, [images.length])

  // Floating hearts
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

  // Typewriter
  useEffect(() => {
    const currentWord = typewriterWords[currentWordIndex]
    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < currentWord.length) {
          setCurrentText(currentWord.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else setTimeout(() => setIsTyping(false), 10000)
      } else {
        if (charIndex > 0) {
          setCurrentText(currentWord.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setCurrentWordIndex((currentWordIndex + 1) % typewriterWords.length)
          setIsTyping(true)
        }
      }
    }, isTyping ? 150 : 100)
    return () => clearTimeout(timer)
  }, [charIndex, isTyping, currentWordIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-2000 ease-in-out ${index === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            alt="Background"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/60 via-[#AB1E3E]/20 to-black/60 z-1"></div>

      {/* Floating hearts */}
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

      {/* Scroll-based animation starts here */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <Sparkles className="w-12 h-12 text-[#AB1E3E]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-extrabold text-white/90 mb-4 tracking-tight"
        >
          Find Your
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-8"
          style={{
            background: "linear-gradient(to right, #AB1E3E, #D42952, #AB1E3E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {currentText}
          <span className="animate-pulse text-[#AB1E3E]">|</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white/90 text-xl md:text-2xl mt-8 mb-12 font-light max-w-2xl mx-auto"
        >
          Where authentic connections begin and love stories unfold
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Google Play with QR Code */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white p-2 rounded-lg">

              <QRCodeSVG
                value="https://www.google.com"
                size={80}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
              />
            </div>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white/90 text-sm font-semibold transition-transform duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(to right, #AB1E3E, #D42952)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#00D7FF" />
                <path d="M16.81 10.09L5.16 2.15C4.75 1.92 4.25 1.92 3.84 2.15L13.69 12L16.81 10.09Z" fill="#FFCE00" />
                <path d="M13.69 12L16.81 13.91L5.16 21.85C4.75 22.08 4.25 22.08 3.84 21.85L13.69 12Z" fill="#FF5C00" />
                <path d="M20.16 11.85L16.81 10.09L13.69 12L16.81 13.91L20.16 12.15C20.81 11.78 21 11.24 21 12C21 11.76 20.81 12.22 20.16 11.85Z" fill="#00B050" />
              </svg>
              <span>Google Play</span>
            </button>
          </div>

          {/* App Store with QR Code */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white p-2 rounded-lg">

              <QRCodeSVG
                value="https://www.fanmilk.com"
                size={80}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
              />
            </div>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white/90 text-sm font-semibold transition-transform duration-300 hover:scale-105 border border-white/30 bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.564 12.043c-.03-3.019 2.473-4.465 2.584-4.534-1.411-2.062-3.6-2.345-4.373-2.377-1.864-.189-3.637 1.111-4.583 1.111-.946 0-2.404-1.087-3.955-1.057-2.03.03-3.935 1.181-4.986 3.003-2.125 3.681-.541 9.106 1.524 12.087 1.006 1.44 2.2 3.05 3.756 2.992 1.526-.057 2.094-.963 3.932-.963 1.837 0 2.35.963 3.953.933 1.633-.027 2.668-1.456 3.664-2.899 1.152-1.679 1.63-3.302 1.656-3.383-.036-.018-3.176-1.216-3.172-4.914zM15.236 4.372c.825-1.002 1.38-2.387 1.227-3.772-1.188.047-2.62.791-3.475 1.791-.765.887-1.437 2.304-1.258 3.659 1.331.104 2.681-.676 3.506-1.678z" />
              </svg>
              <span>App Store</span>
            </button>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/40 to-transparent z-5"></div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>
    </section>
  )
}

export default EnhancedHeroSection

