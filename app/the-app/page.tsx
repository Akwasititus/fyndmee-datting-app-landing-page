"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowLeft, Heart, Shield, Star, Smartphone, CheckCircle, Users, MessageCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const FeaturePill = ({ text, icon: Icon }: any) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white">
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{text}</span>
  </div>
)

export default function TheAppPage() {
  const keyFeatures = [
    { icon: Shield, text: "100% Verified Profiles" },
    { icon: Heart, text: "Smart Matching" },
    { icon: Users, text: "Video Calls" },
    { icon: MessageCircle, text: "Icebreaker Prompts" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black">
      {/* Background effects - only visible in dark mode */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none dark:block hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section - Simple & Clean */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#AB1E3E] to-rose-500 rounded-2xl flex items-center justify-center mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The App
            </h1>
            <p className="text-xl text-gray-600 dark:text-white/60">
              Simple. Safe. Meaningful.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <FeaturePill {...feature} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content - Single Column Flow */}
        <div className="space-y-12">
          {/* How It Works */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              How It Works
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#AB1E3E] to-rose-500 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Download & Verify</h3>
                  <p className="text-gray-600 dark:text-white/70 text-sm">
                    Get the app and complete quick facial verification
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#AB1E3E] to-rose-500 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Create Your Profile</h3>
                  <p className="text-gray-600 dark:text-white/70 text-sm">
                    Show your true self with photos and personality prompts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#AB1E3E] to-rose-500 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Find Your Match</h3>
                  <p className="text-gray-600 dark:text-white/70 text-sm">
                    Connect with verified people who share your values
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why It's Special */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Why It's Special
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-[#AB1E3E]/5 to-rose-500/5 border border-[#AB1E3E]/20 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-[#AB1E3E] to-rose-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Verified Community</h3>
                <p className="text-gray-600 dark:text-white/70 text-sm">
                  Every profile is verified with facial recognition for safety and authenticity
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#AB1E3E]/5 to-rose-500/5 border border-[#AB1E3E]/20 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-[#AB1E3E] to-rose-500 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Quality Matches</h3>
                <p className="text-gray-600 dark:text-white/70 text-sm">
                  Our smart algorithm focuses on compatibility, not endless swiping
                </p>
              </div>
            </div>
          </motion.div>

          {/* Simple & Clean CTA */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-[#AB1E3E] to-rose-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
              <p className="text-white/90 mb-6 max-w-md mx-auto">
                Join thousands finding meaningful relationships on Fynd Mee
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-[#AB1E3E] font-semibold rounded-full hover:bg-gray-100 transition-colors">
                  Get on iOS
                </button>
                <button className="px-6 py-3 bg-black/20 text-white font-semibold rounded-full hover:bg-black/30 transition-colors border border-white/20">
                  Get on Android
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}