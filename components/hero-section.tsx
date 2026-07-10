// "use client"
// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
// import { QRCodeSVG } from 'qrcode.react';
// import Image from "next/image"

// const EnhancedHeroSection = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0)
//   const [currentText, setCurrentText] = useState("")
//   const [isTyping, setIsTyping] = useState(true)
//   const [charIndex, setCharIndex] = useState(0)
//   const [currentImage, setCurrentImage] = useState(0)
//   const [floatingHearts, setFloatingHearts] = useState<any[]>([])
//   const [downloadCount, setDownloadCount] = useState(12478)

//   const typewriterWords = ["Perfect Match", "Soulmate", "True Love", "Dream Partner", "Forever Person", "Best Friend"]
//   const images = ["/images/fyndmee-bg-1.webp", "/images/fyndmee6.webp", "/images/fyndmee4.webp", "/images/fyndmee3.webp", "/images/fyndmee2.webp", "/images/4.webp", "/images/5.webp", "/images/7.webp"]

//   // Simulate increasing download count
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDownloadCount(prev => prev + Math.floor(Math.random() * 10) + 1)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   // Only load current image + preload next
//   const [loadedImages, setLoadedImages] = useState(new Set([0, 1]))

//   useEffect(() => {
//     const nextIndex = (currentImage + 1) % images.length
//     setLoadedImages(prev => new Set([...prev, nextIndex]))
//   }, [currentImage])

//   // Background image carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length)
//     }, 30000)
//     return () => clearInterval(interval)
//   }, [images.length])

//   // Floating hearts
//   useEffect(() => {
//     const hearts = Array.from({ length: 8 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 5,
//       duration: 15 + Math.random() * 10,
//       size: 20 + Math.random() * 30,
//     }))
//     setFloatingHearts(hearts)
//   }, [])

//   // Typewriter
//   useEffect(() => {
//     const currentWord = typewriterWords[currentWordIndex]
//     const timer = setTimeout(() => {
//       if (isTyping) {
//         if (charIndex < currentWord.length) {
//           setCurrentText(currentWord.slice(0, charIndex + 1))
//           setCharIndex(charIndex + 1)
//         } else setTimeout(() => setIsTyping(false), 10000)
//       } else {
//         if (charIndex > 0) {
//           setCurrentText(currentWord.slice(0, charIndex - 1))
//           setCharIndex(charIndex - 1)
//         } else {
//           setCurrentWordIndex((currentWordIndex + 1) % typewriterWords.length)
//           setIsTyping(true)
//         }
//       }
//     }, isTyping ? 150 : 100)
//     return () => clearTimeout(timer)
//   }, [charIndex, isTyping, currentWordIndex])

//   // Arrow navigation handlers
//   const goToPrev = () => {
//     setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
//   }

//   const goToNext = () => {
//     setCurrentImage((prev) => (prev + 1) % images.length)
//   }

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background images */}
//       <div className="absolute inset-0 z-0">
//         {/* {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             className={`absolute inset-0 w-full h-full object-cover transition-all duration-2000 ease-in-out ${index === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
//               }`}
//             alt="Background"
//           />
//         ))} */}
// {images.map((image, index) => (
//   loadedImages.has(index) && (
//     <Image
//       key={index}
//       src={image}
//       fill
//       priority={index === 0}
//       sizes="100vw"
//       className={`object-cover transition-all duration-1000 ease-in-out ${
//         index === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
//       }`}
//       alt="Background"
//     />
//   )
// ))}
//       </div>

//       {/* Base dark overlay */}
//       <div className="absolute inset-0 bg-linear-to-br from-black/60 via-[#AB1E3E]/20 to-black/60 z-1"></div>

//       {/* Cherry blossom tint overlay — soft radial wash from center */}
//       <div
//         className="absolute inset-0 z-1 pointer-events-none"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(171,30,62,0.18) 0%, rgba(171,30,62,0.08) 50%, transparent 100%)",
//         }}
//       />

//       {/* Floating hearts */}
//       {floatingHearts.map((heart) => (
//         <Heart
//           key={heart.id}
//           className="absolute animate-float z-2"
//           style={{
//             left: `${heart.left}%`,
//             bottom: "-50px",
//             width: `${heart.size}px`,
//             height: `${heart.size}px`,
//             animationDelay: `${heart.delay}s`,
//             animationDuration: `${heart.duration}s`,
//             fill: "rgba(171, 30, 62, 0.2)",
//             color: "rgba(171, 30, 62, 0.2)",
//           }}
//         />
//       ))}

//       {/* LEFT arrow */}
//       <button
//         onClick={goToPrev}
//         aria-label="Previous image"
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#AB1E3E]/60 hover:border-[#AB1E3E]/60 hover:scale-110 active:scale-95"
//       >
//         <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors duration-200" />
//       </button>

//       {/* RIGHT arrow */}
//       <button
//         onClick={goToNext}
//         aria-label="Next image"
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#AB1E3E]/60 hover:border-[#AB1E3E]/60 hover:scale-110 active:scale-95"
//       >
//         <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors duration-200" />
//       </button>

//       {/* Dot indicators */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             className="relative flex items-center justify-center transition-all duration-300 focus:outline-none"
//           >
//             <span
//               className={`block rounded-full transition-all duration-500 ease-out ${
//                 index === currentImage
//                   ? "w-6 h-2 bg-[#AB1E3E] shadow-[0_0_8px_rgba(171,30,62,0.7)]"
//                   : "w-2 h-2 bg-white/40 hover:bg-white/70"
//               }`}
//             />
//           </button>
//         ))}
//       </div>

//       {/* Scroll-based animation starts here */}
//       <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-6xl md:text-8xl font-extrabold text-white/90 mb-4 tracking-tight"
//         >
//           Find Your
//         </motion.h1>

//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           viewport={{ once: true }}
//           className="text-5xl md:text-7xl font-bold mb-8 relative inline-block"
//         >
//           <span
//             style={{
//               background: "linear-gradient(to right, #AB1E3E, #D42952, #AB1E3E)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             {currentText}
//           </span>
//           <span
//             className="inline-block w-1 h-[0.9em] ml-1 bg-[#AB1E3E] animate-blink"
//             style={{
//               verticalAlign: 'text-bottom',
//               marginBottom: '0.1em'
//             }}
//           ></span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-white/90 text-xl md:text-2xl mt-8 mb-12 font-light max-w-2xl mx-auto"
//         >
//           Where authentic connections begin and love stories unfold
//         </motion.p>

//         {/* QR CODE TO DOWNLOAD THE APP STARTS HERE... */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           {/* Google Play with QR Code */}
//           <div className="flex flex-col items-center gap-2">
//             <div className="hidden md:block bg-white p-2 rounded-lg">
//               <QRCodeSVG
//                 value="https://www.fyndmee.app"
//                 size={80}
//                 bgColor="#ffffff"
//                 fgColor="#000000"
//                 level="H"
//               />
//             </div>
//             <button
//               className="flex items-center gap-2 px-6 py-3 rounded-full text-white/90 text-sm font-semibold transition-transform duration-300 hover:scale-105"
//               style={{ background: 'linear-gradient(to right, #AB1E3E, #D42952)' }}
//             >
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#00D7FF" />
//                 <path d="M16.81 10.09L5.16 2.15C4.75 1.92 4.25 1.92 3.84 2.15L13.69 12L16.81 10.09Z" fill="#FFCE00" />
//                 <path d="M13.69 12L16.81 13.91L5.16 21.85C4.75 22.08 4.25 22.08 3.84 21.85L13.69 12Z" fill="#FF5C00" />
//                 <path d="M20.16 11.85L16.81 10.09L13.69 12L16.81 13.91L20.16 12.15C20.81 11.78 21 11.24 21 12C21 11.76 20.81 12.22 20.16 11.85Z" fill="#00B050" />
//               </svg>
//               <span>Google Play</span>
//             </button>
//           </div>

//           {/* App Store with QR Code */}
//           <div className="flex flex-col items-center gap-2">
//             <div className="hidden md:block bg-white p-2 rounded-lg">
//               <QRCodeSVG
//                 value="https://www.fyndmee.app"
//                 size={80}
//                 bgColor="#ffffff"
//                 fgColor="#000000"
//                 level="H"
//               />
//             </div>
//             <button
//               className="flex items-center gap-2 px-6 py-3 rounded-full text-white/90 text-sm font-semibold transition-transform duration-300 hover:scale-105 border border-white/30 bg-white/10"
//             >
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
//                 <path d="M17.564 12.043c-.03-3.019 2.473-4.465 2.584-4.534-1.411-2.062-3.6-2.345-4.373-2.377-1.864-.189-3.637 1.111-4.583 1.111-.946 0-2.404-1.087-3.955-1.057-2.03.03-3.935 1.181-4.986 3.003-2.125 3.681-.541 9.106 1.524 12.087 1.006 1.44 2.2 3.05 3.756 2.992 1.526-.057 2.094-.963 3.932-.963 1.837 0 2.35.963 3.953.933 1.633-.027 2.668-1.456 3.664-2.899 1.152-1.679 1.63-3.302 1.656-3.383-.036-.018-3.176-1.216-3.172-4.914zM15.236 4.372c.825-1.002 1.38-2.387 1.227-3.772-1.188.047-2.62.791-3.475 1.791-.765.887-1.437 2.304-1.258 3.659 1.331.104 2.681-.676 3.506-1.678z" />
//               </svg>
//               <span>App Store</span>
//             </button>
//           </div>
//         </motion.div>

//         <div className="h-8"></div>

//         {/* Download Counter */}
//         <div className="mb-12">
//           <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 dark:bg-white/10 dark:border-white/20">
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-gray-700 dark:text-white/80 font-medium">
//               <span className="text-2xl font-bold text-[#AB1E3E]">{downloadCount.toLocaleString()}</span> downloads and counting!
//             </span>
//           </div>
//         </div>

//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/40 to-transparent z-5"></div>

//       <style jsx>{`
//         @keyframes float {
//           0% { transform: translateY(0) rotate(0deg); opacity: 0; }
//           10% { opacity: 0.6; }
//           90% { opacity: 0.6; }
//           100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
//         }
//         .animate-float { animation: float linear infinite; }
//       `}</style>
//     </section>
//   )
// }

// export default EnhancedHeroSection




"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { QRCodeSVG } from 'qrcode.react'
import Image from "next/image"

/* ─────────────────────────────────────────
   FyndMee Hero — animation engine ported from
   the newer Bliss Eye Care hero (Ken Burns
   crossfade, breathing wash, floating particles,
   entry animations, styled arrows/dots), recoloured
   to FyndMee brand colours (#AB1E3E / #D42952) with
   all original FyndMee copy, images, Play/App Store
   CTAs + QR codes, and the download counter kept
   fully intact.
───────────────────────────────────────── */

const EnhancedHeroSection = () => {
  /* ── Image carousel ── */
  const [currentImage, setCurrentImage] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1]))
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  /* ── Typewriter ── */
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  /* ── Floating particles ── */
  // const [floatingHearts, setFloatingHearts] = useState<any[]>([])

  /* ── Entry animation trigger ── */
  const [mounted, setMounted] = useState(false)

  /* ── Live download counter (original FyndMee logic, untouched) ── */
  const [downloadCount, setDownloadCount] = useState(12478)

  /* ────────────────────────── DATA (original FyndMee copy) ────────────────────────── */

  const typewriterWords = ["Perfect Match", "Soulmate", "True Love", "Dream Partner", "Forever Person", "Best Friend"]

  const images = ["/images/fyndmee-bg-1.webp", "/images/fyndmee6.webp", "/images/fyndmee4.webp", "/images/fyndmee3.webp", "/images/fyndmee2.webp", "/images/4.webp", "/images/5.webp", "/images/7.webp"]

  /* ────────────────────── EFFECTS ─────────────────────────── */

  /* Mount trigger for entry animations */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  /* Download counter — original logic: random +1-10 every 3s */
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 10) + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  /* Preload next image */
  useEffect(() => {
    const nextIndex = (currentImage + 1) % images.length
    setLoadedImages(prev => new Set([...prev, nextIndex]))
  }, [currentImage])

  /* Auto-advance carousel (resets on manual nav via resetInterval) */
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 6000)
  }

  useEffect(() => {
    resetInterval()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* Floating heart particles */
  // useEffect(() => {
  //   setFloatingHearts(
  //     Array.from({ length: 9 }, (_, i) => ({
  //       id: i,
  //       left: Math.random() * 100,
  //       delay: Math.random() * 7,
  //       duration: 16 + Math.random() * 12,
  //       size: 14 + Math.random() * 22,
  //       opacity: 0.07 + Math.random() * 0.11,
  //     }))
  //   )
  // }, [])

  /* Typewriter */
  useEffect(() => {
    const currentWord = typewriterWords[currentWordIndex]
    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < currentWord.length) {
          setCurrentText(currentWord.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsTyping(false), 2400)
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentWord.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setCurrentWordIndex(i => (i + 1) % typewriterWords.length)
          setIsTyping(true)
        }
      }
    }, isTyping ? 110 : 65)
    return () => clearTimeout(timer)
  }, [charIndex, isTyping, currentWordIndex])

  /* Arrow handlers */
  const goToPrev = () => {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length)
    resetInterval()
  }
  const goToNext = () => {
    setCurrentImage(prev => (prev + 1) % images.length)
    resetInterval()
  }

  /* ──────────────────────── RENDER ──────────────────────────── */

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ══ GLOBAL STYLES ══ */}
      <style>{`
        /* Crossfade + Ken Burns */
        .fm-slide {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          opacity: 0;
          transform: scale(1.09);
          transition: opacity 1.5s cubic-bezier(0.4,0,0.2,1),
                      transform 7s   cubic-bezier(0.4,0,0.2,1);
          will-change: opacity, transform;
        }
        .fm-slide.active { opacity: 1; transform: scale(1); }

        /* Breathing radial colour wash */
        @keyframes fm-breathe {
          0%, 100% { opacity: 0.50; }
          50%       { opacity: 0.78; }
        }
        .fm-wash { animation: fm-breathe 7s ease-in-out infinite; }

        /* Floating heart particles */
        @keyframes fm-float {
          0%   { transform: translateY(0)      rotate(0deg);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
        .fm-particle {
          position: absolute; bottom: -40px;
          animation: fm-float linear infinite;
        }

        /* Blinking cursor */
        @keyframes fm-blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .fm-cursor { animation: fm-blink 0.85s step-end infinite; }

        /* Entry animations */
        .fm-entry {
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .fm-entry.fm-hidden { opacity: 0; transform: translateY(28px); }

        /* Arrow buttons */
        .fm-arrow {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 20;
          display: flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.28);
          background: rgba(0,0,0,0.22);
          backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.75);
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .fm-arrow:hover {
          background: rgba(171,30,62,0.65);
          border-color: rgba(171,30,62,0.75);
          color: #fff;
          transform: translateY(-50%) scale(1.1);
        }
        .fm-arrow:active { transform: translateY(-50%) scale(0.96); }

        /* Pill-expand dot indicators */
        .fm-dot {
          border-radius: 9999px; cursor: pointer; border: none; padding: 0;
          transition: all 0.45s cubic-bezier(0.4,0,0.2,1);
          background: rgba(255,255,255,0.35);
          width: 8px; height: 8px;
        }
        .fm-dot.active {
          width: 24px; height: 8px;
          background: #AB1E3E;
          box-shadow: 0 0 10px rgba(171,30,62,0.85);
        }

        /* Ring animations (light cherry) */
        @keyframes fm-rotateSlow    { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
        @keyframes fm-rotateReverse { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
        @keyframes fm-pulseFade     { 0%,100% { opacity: 0.18; } 50% { opacity: 0.32; } }

        .fm-ring-spin-fwd { animation: fm-rotateSlow    28s linear infinite; }
        .fm-ring-spin-rev { animation: fm-rotateReverse 40s linear infinite; }
        .fm-ring-pulse    { animation: fm-pulseFade      5s ease-in-out infinite; }
      `}</style>

      {/* ══ BACKGROUND IMAGES ══ */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) =>
          loadedImages.has(index) && (
            <Image
              key={image}
              src={image}
              fill
              priority={index === 0}
              sizes="100vw"
              alt="Background"
              className={`fm-slide ${index === currentImage ? "active" : ""}`}
            />
          )
        )}
      </div>

      {/* ══ DARK BASE OVERLAY ══ */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(255,105,135,0.22) 50%, rgba(0,0,0,0.58) 100%)",
        }}
      />

      {/* ══ BREATHING COLOUR WASH ══ */}
      <div
        className="fm-wash absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 78% 62% at 50% 40%, rgba(255,105,135,0.32) 0%, rgba(255,182,198,0.12) 55%, transparent 100%)",
        }}
      />

      {/* ══ AMBIENT GLOW BLOBS (light cherry) ══ */}
      <div
        className="absolute pointer-events-none z-[2]"
        style={{
          top: "-60px", left: "20%",
          width: "340px", height: "340px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,41,82,0.20) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none z-[2]"
        style={{
          bottom: "60px", right: "12%",
          width: "280px", height: "280px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,133,163,0.14) 0%, transparent 70%)",
        }}
      />

      {/* ══ RING 1 — top-right, multi-layer, rotating forward (light cherry) ══ */}
      <div
        className="absolute pointer-events-none z-2"
        style={{ top: "-90px", right: "-90px", width: "480px", height: "480px", opacity: 0.24 }}
      >
        <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="fm-ring-spin-fwd w-full h-full">
          {/* Outer dashed ring */}
          <circle cx="240" cy="240" r="228" stroke="white" strokeWidth="1.2" strokeDasharray="14 8" />
          {/* Second dashed ring */}
          <circle cx="240" cy="240" r="188" stroke="white" strokeWidth="0.6" strokeDasharray="4 10" />
          {/* Accent cherry solid ring */}
          <circle cx="240" cy="240" r="148" stroke="rgba(255,133,163,0.8)" strokeWidth="0.9" />
          {/* Inner dashed ring */}
          <circle cx="240" cy="240" r="108" stroke="rgba(255,133,163,0.45)" strokeWidth="0.4" strokeDasharray="6 6" />
          {/* Cardinal tick marks on outer ring */}
          <line x1="240" y1="12"  x2="240" y2="30"  stroke="white" strokeWidth="1.5" opacity="0.7" />
          <line x1="240" y1="450" x2="240" y2="468" stroke="white" strokeWidth="1.5" opacity="0.7" />
          <line x1="12"  y1="240" x2="30"  y2="240" stroke="white" strokeWidth="1.5" opacity="0.7" />
          <line x1="450" y1="240" x2="468" y2="240" stroke="white" strokeWidth="1.5" opacity="0.7" />
          {/* Accent dots at 45° positions on outer ring */}
          <circle cx="401" cy="79"  r="3" fill="rgba(255,133,163,0.95)" />
          <circle cx="79"  cy="401" r="3" fill="rgba(255,133,163,0.95)" />
          <circle cx="79"  cy="79"  r="2" fill="rgba(255,255,255,0.5)" />
          <circle cx="401" cy="401" r="2" fill="rgba(255,255,255,0.5)" />
        </svg>
      </div>

      {/* ══ RING 2 — bottom-left, slower reverse rotation (light cherry) ══ */}
      <div
        className="absolute pointer-events-none z-2"
        style={{ bottom: "-120px", left: "-100px", width: "400px", height: "400px", opacity: 0.15 }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="fm-ring-spin-rev w-full h-full">
          <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="1" strokeDasharray="8 12" />
          <circle cx="200" cy="200" r="152" stroke="rgba(255,133,163,0.55)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="114" stroke="white" strokeWidth="0.3" strokeDasharray="3 8" />
          {/* Tick marks */}
          <line x1="200" y1="10"  x2="200" y2="24"  stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="200" y1="376" x2="200" y2="390" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="10"  y1="200" x2="24"  y2="200" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="376" y1="200" x2="390" y2="200" stroke="white" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* ══ RING 3 — mid-left, pulsing (light cherry) ══ */}
      <div
        className="absolute pointer-events-none z-[2]"
        style={{ top: "50%", left: "-65px", transform: "translateY(-50%)", width: "240px", height: "240px", opacity: 0.10 }}
      >
        <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="fm-ring-pulse w-full h-full">
          <circle cx="120" cy="120" r="110" stroke="rgba(255,133,163,0.75)" strokeWidth="0.8" strokeDasharray="5 7" />
          <circle cx="120" cy="120" r="76"  stroke="white" strokeWidth="0.4" />
        </svg>
      </div>

      {/* ══ FLOATING HEART PARTICLES ══ */}
      {/* {floatingHearts.map(p => (
        <Heart
          key={p.id}
          className="fm-particle"
          aria-hidden
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            fill: "rgba(171,30,62,0.8)",
            color: "rgba(171,30,62,0.8)",
            zIndex: 3,
          }}
        />
      ))} */}

      {/* ══ ARROWS ══ */}
      <button className="fm-arrow" style={{ left: 16 }} onClick={goToPrev} aria-label="Previous image">
        <ChevronLeft size={21} />
      </button>
      <button className="fm-arrow" style={{ right: 16 }} onClick={goToNext} aria-label="Next image">
        <ChevronRight size={21} />
      </button>

      {/* ══ MAIN CONTENT ══ */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl mx-auto w-full pt-24 pb-10">

          {/* Headline line 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 60 }}
            transition={{ duration: 0.95, delay: 0.22 }}
            className="font-extrabold text-white/90 tracking-tight mb-4"
            style={{
              fontSize: "clamp(46px, 8.5vw, 88px)",
              lineHeight: 1.07,
            }}
          >
            Find Your
          </motion.h1>

          {/* Headline line 2 — typewriter */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 60 }}
            transition={{ duration: 1.05, delay: 0.38 }}
            className="font-bold mb-8 relative inline-block"
            style={{
              fontSize: "clamp(40px, 7.5vw, 80px)",
              lineHeight: 1.1,
            }}
          >
            <span
              style={{
                background: "linear-gradient(90deg, #AB1E3E, #D42952, #AB1E3E)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {currentText}
            </span>
            {/* blinking cursor */}
            <span
              className="fm-cursor"
              style={{
                display: "inline-block", width: 4, borderRadius: 2,
                height: "0.78em", background: "#AB1E3E",
                verticalAlign: "text-bottom", marginLeft: 4,
              }}
            />
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 50 }}
            transition={{ duration: 0.95, delay: 0.55 }}
            className="text-white/90 font-light max-w-2xl mx-auto mt-2 mb-12"
            style={{ fontSize: "clamp(15px, 2vw, 19px)", lineHeight: 1.8, letterSpacing: "0.01em" }}
          >
            Where authentic connections begin and love stories unfold
          </motion.p>

          {/* ══ CTA: Google Play + App Store with QR codes (original FyndMee, unchanged) ══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.92 }}
            transition={{ duration: 0.9, delay: 0.70, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Google Play with QR Code */}
            <div className="flex flex-col items-center gap-2">
              <div className="hidden md:block bg-white p-2 rounded-lg">
                <QRCodeSVG
                  value="https://www.fyndmee.app"
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
              <div className="hidden md:block bg-white p-2 rounded-lg">
                <QRCodeSVG
                  value="https://www.fyndmee.app"
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

          <div className="h-10" />

          {/* ══ Live Download Counter — original wording kept, styling upgraded to match new hero's polish ══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.85, delay: 0.88 }}
          >
            <div
              className="inline-flex items-center gap-3 backdrop-blur-md px-6 py-3 rounded-full border"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.18)",
              }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-medium" style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>
                <span
                  className="font-bold"
                  style={{ fontSize: 22, color: "#e0708c" }}
                >
                  {downloadCount.toLocaleString()}
                </span>
                {" "}downloads and counting!
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ══ DOT INDICATORS ══ */}
      <div
        className="relative z-10"
        style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          padding: "10px 2rem 30px",
          maxWidth: 1200, margin: "0 auto",
          width: "calc(100% - 4rem)",
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center", paddingBottom: 8 }}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`fm-dot ${index === currentImage ? "active" : ""}`}
              onClick={() => { setCurrentImage(index); resetInterval() }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ══ BOTTOM FADE (original FyndMee treatment — no wave shape) ══ */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/40 to-transparent z-[5] pointer-events-none" />

    </section>
  )
}

export default EnhancedHeroSection