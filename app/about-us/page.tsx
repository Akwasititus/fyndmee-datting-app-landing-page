"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowLeft, Heart, Shield, Globe, Users, MessageSquare, Settings, Zap, CheckCircle, Lock, Eye, Database } from 'lucide-react'

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

const Section = ({ title, children, delay = 0 }: any) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ delay }}
    className="mb-8"
  >
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <div className="text-gray-700 dark:text-white/70 leading-relaxed space-y-3">
      {children}
    </div>
  </motion.div>
)

const SubSection = ({ title, children }: any) => (
  <div className="ml-4 mb-4">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <div className="text-gray-700 dark:text-white/70 leading-relaxed space-y-2">
      {children}
    </div>
  </div>
)

export default function AboutPage() {
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
            className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#AB1E3E] to-rose-500 bg-clip-text text-transparent">
              Fynd Mee
            </span>
          </h1>
          <p className="text-gray-600 dark:text-white/60 text-lg">
            The Global First Fully Verified Dating App
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8 md:p-12">
          <Section delay={0.1}>
            <p className="text-gray-700 dark:text-white/70 italic mb-4">
              Fynd Mee is the global first fully verified dating app, thoughtfully designed and developed for people everywhere. Our platform combines cutting-edge technology with deep cultural understanding to create meaningful relationships that last.
            </p>
            <p>
              Hop into a world where everyone in any part of the world can find love that honours their heritage and builds their future.
            </p>
          </Section>

          <Section title="Start Your Journey with Confidence" delay={0.15}>
            <p>
              Join Fyndmee in minutes with our seamless onboarding experience. Create your account using email, phone, or social login, then get verified instantly with our cutting-edge facial recognition technology.
            </p>
            <SubSection title="Age Requirement">
              <p>
                At 18+, you're ready to discover meaningful connections with our unique profile prompts that help showcase your authentic self.
              </p>
            </SubSection>
          </Section>

          <Section title="Show Your True Self" delay={0.2}>
            <p>
              Create a profile that truly represents you with up to 6 photos and detailed preferences that matter.
            </p>
            
            <SubSection title="Profile Details">
              <p className="mb-2">Share comprehensive information including:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Your background and cultural heritage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Current location and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Relationship goals and intentions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>What you're looking for in a partner</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="Compatibility Factors">
              <p>
                From career preferences to shared hobbies, we help you connect with people who align with your values and lifestyle. Our detailed matching system considers:
              </p>
              <ul className="list-none space-y-2 ml-4 mt-2">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Career and educational background</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Shared interests and hobbies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Cultural and religious values</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Lifestyle preferences and goals</span>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Smart Connections" delay={0.25}>
            <p>
              Experience the perfect blend of simplicity and depth. Swipe through verified profiles, engage with thoughtful prompts and photos, and use advanced filters to find exactly who you're looking for.
            </p>

            <SubSection title="FyndmeePassport">
              <p>
                Whether you want someone right here in this Country or anywhere in the world, with FyndmeePassport, our intelligent matching system prioritises quality connections over quantity.
              </p>
            </SubSection>

            <SubSection title="Matching Features">
              <p className="mb-2">Our advanced system includes:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Verified profiles only - no fake accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Advanced preference filtering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Intelligent compatibility scoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Global and local search capabilities</span>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Conversations That Matter" delay={0.3}>
            <p>
              Once matched, dive into meaningful conversations with our feature-rich messaging platform. Send texts, emojis, GIFs, or express yourself with 30-second video messages.
            </p>

            <SubSection title="Safety-First Approach">
              <p>
                Our safety-first approach ensures your experience remains positive and secure throughout your journey.
              </p>
              <ul className="list-none space-y-2 ml-4 mt-2">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Built-in reporting tools for inappropriate behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Screenshot detection to protect privacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Easy blocking features with one tap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>24/7 moderation and support</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="Communication Features">
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Real-time text messaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Emoji and GIF support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>30-second video messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Voice message capability</span>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Your Privacy, Your Control" delay={0.35}>
            <p>
              Customise your Fynd Mee experience exactly how you want it. Control notifications for matches and messages, manage your privacy settings, hide sensitive information, and maintain complete control over your online presence.
            </p>

            <SubSection title="Data Management">
              <p>
                Export your data anytime and manage your account with full transparency and GDPR compliance. We respect your right to control your personal information.
              </p>
            </SubSection>

            <SubSection title="Privacy Controls">
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Custom notification settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Profile visibility controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Location sharing preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Data export and deletion options</span>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Data-Driven Excellence" delay={0.4}>
            <p>
              We continuously improve your experience through comprehensive analytics tracking user engagement, match success rates, subscription performance, and feature effectiveness.
            </p>

            <SubSection title="Algorithm Improvement">
              <p>
                Our commitment to measuring the relevance of hobby and career matches ensures our algorithm gets smarter, helping you find more compatible connections over time.
              </p>
            </SubSection>

            <SubSection title="What We Measure">
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>User engagement metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Match success and compatibility rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Feature usage and effectiveness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AB1E3E] mr-2">•</span>
                  <span>Hobby and career match relevance</span>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Get Started Today" delay={0.45}>
            <p>
              Ready to find meaningful connections that honor your heritage and build your future? Join thousands of verified users who trust Fynd Mee for authentic relationships.
            </p>
            <p className="mt-4">
              Download Fynd Mee today and start your journey toward finding love that lasts.
            </p>
          </Section>

          <Section title="Contact Us" delay={0.5}>
            <p>
              Have questions about Fynd Mee? We're here to help. Reach out to us at:{" "}
              <a 
                href="mailto:admin@fyndmee.app" 
                className="text-[#AB1E3E] hover:text-rose-500 transition-colors underline"
              >
                admin@fyndmee.app
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
