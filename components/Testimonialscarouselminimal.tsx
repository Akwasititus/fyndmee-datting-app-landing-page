"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  quote: string
  names: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Thank you Fynd Mee! We're getting married in a few months!",
    names: "Kathryn B. and Nik N.",
  },
  {
    quote: "I never thought I'd find someone who truly gets me. Fynd Mee made it happen!",
    names: "Sarah M. and James K.",
  },
  {
    quote: "Best decision ever! We've been together for 2 years now and couldn't be happier.",
    names: "Michael R. and Emily T.",
  },
  {
    quote: "The verification feature made me feel safe. Met my soulmate here!",
    names: "Priya S. and David L.",
  },
  {
    quote: "From first message to first date to forever. Thank you Fynd Mee!",
    names: "Jessica P. and Marcus W.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const quoteVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const SLIDE_DURATION = 9000 // 6 seconds per slide
  const PROGRESS_INTERVAL = 80 // Update progress every 50ms

  useEffect(() => {
    if (isPaused) return

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const increment = (PROGRESS_INTERVAL / SLIDE_DURATION) * 100
        const newProgress = prev + increment

        if (newProgress >= 100) {
          setCurrentIndex((current) => (current + 1) % testimonials.length)
          return 0
        }

        return newProgress
      })
    }, PROGRESS_INTERVAL)

    return () => clearInterval(progressTimer)
  }, [isPaused, currentIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-slate-950 dark:to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          // variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: fadeUp.show.transition.duration,
            ease: (fadeUp.show.transition.ease === "easeIn"
              ? [0.42, 0, 1, 1]
              : fadeUp.show.transition.ease) as any,
          }}
        >
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#AB1E3E] to-pink-500 bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>

          {/* Testimonial Container */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Quote Card */}
            <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl dark:shadow-[#AB1E3E]/10 min-h-[400px] sm:min-h-[350px] md:min-h-[300px] flex flex-col justify-center">
              {/* Decorative Quote Marks */}
              <div className="absolute top-8 left-8 text-[#AB1E3E]/20 dark:text-[#AB1E3E]/30 text-6xl sm:text-7xl md:text-8xl font-serif leading-none select-none">
                "
              </div>
              <div className="absolute bottom-8 right-8 text-[#AB1E3E]/20 dark:text-[#AB1E3E]/30 text-6xl sm:text-7xl md:text-8xl font-serif leading-none select-none rotate-180">
                "
              </div>

              {/* Testimonial Content with AnimatePresence */}
              <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 md:px-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    // variants={quoteVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex flex-col items-center"
                  >
                    {/* Quote Text */}
                    <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-gray-800 dark:text-white mb-8 max-w-4xl">
                      {testimonials[currentIndex].quote}
                    </blockquote>

                    {/* Names with heart icon */}
                    <div className="flex items-center gap-3">
                     
              <img
              src="/images/logos.png"
              alt="Fynd Mee logo"
              className="h-8 w-8 object-contain rounded-md"
            />
                 
                      <p className="text-base sm:text-lg font-medium text-gray-600 dark:text-white/70 tracking-wide">
                        {testimonials[currentIndex].names}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Dots with Progress Bars */}
            <div className="flex items-center justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E]/50 rounded-full relative"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {/* Background bar */}
                  <div className="h-1 w-12 sm:w-16 bg-gray-300 dark:bg-white/20 rounded-full overflow-hidden">
                    {/* Progress bar */}
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#AB1E3E] to-pink-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{
                        width:
                          index === currentIndex
                            ? `${progress}%`
                            : index < currentIndex
                            ? "100%"
                            : "0%",
                      }}
                      transition={{
                        duration: 0.1,
                        ease: "linear",
                      }}
                    />
                  </div>

                  {/* Hover effect */}
                  {index !== currentIndex && (
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 dark:group-hover:bg-white/5 rounded-full transition-colors" />
                  )}
                </button>
              ))}
            </div>

            {/* Manual Navigation Arrows */}
            <button
              onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white/70 hover:text-[#AB1E3E] dark:hover:text-[#AB1E3E] hover:border-[#AB1E3E]/50 transition-all shadow-lg hover:shadow-xl hidden md:flex"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white/70 hover:text-[#AB1E3E] dark:hover:text-[#AB1E3E] hover:border-[#AB1E3E]/50 transition-all shadow-lg hover:shadow-xl hidden md:flex"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
