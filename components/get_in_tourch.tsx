"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1, 
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function GetStartedSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-slate-950 dark:to-black">
      {/* Primary background image */}
      <div className="absolute inset-0 z-0 translate-x-100">
        <Image
          src="/images/getintourch.png"
          alt="Hand holding phone with app interface"
          fill
          sizes="100vw"
           className="object-cover object-[60%_50%] opacity-10"
          priority
          quality={85}
        />
      </div>
      
      {/* Background blur effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Simple text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.div
              // variants={fadeUp}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Get started
                <br />
                in 5 minutes
              </h1>
            </motion.div>

            {/* Description */}
            {/* <motion.p 
              className="text-lg text-gray-600 dark:text-white/70 max-w-xl">
              Set up your online store in minutes, accept payments instantly, and manage everything right from your phone!📱It's as easy as snapping a photo!
            </motion.p> */}

            {/* Simple CTA Buttons */}
            <motion.div 
            
              className="flex flex-col sm:flex-row gap-4"
            >
            </motion.div>
          </motion.div>

          {/* Right Content - Foreground Focused Image */}
          <motion.div
           
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full h-[600px] lg:h-[700px]"
          >

          </motion.div>
        </div>
      </div>
    </section>
  )
}