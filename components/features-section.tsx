"use client"

import { motion, Variants } from "framer-motion"
import { Flame, Shield, Users, Zap, Heart, Lock } from "lucide-react"
import Image from "next/image"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ must be a string, not an array
    },
  },
}


const FeatureCard = ({ iconUrl, title, description, index }: any) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/10 border border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20"
  >
    <div className="absolute inset-0 bg-linear-to-br from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
    <div className="relative z-10 flex flex-col items-start">
      <span
        style={{ width: "60px", height: "60px", marginBottom: "12px", display: "inline-block" }}
        dangerouslySetInnerHTML={{
          __html: `<lord-icon src="${iconUrl}" trigger="hover" colors="primary:#fb7185,secondary:#f9a8d4" style="width:60px;height:60px;"></lord-icon>`
        }}
      />
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70 leading-relaxed text-sm">{description}</p>
    </div>
  </motion.div>
)


export default function FeaturesSection() {
  const features = [
  {
    iconUrl: "https://cdn.lordicon.com/puvaffet.json",
    title: "Smart Matching",
    description:
      "AI-powered algorithm that learns your preferences and finds compatible matches based on interests, values, and lifestyle.",
  },
  {
    iconUrl: "https://cdn.lordicon.com/cllunfud.json",
    title: "Verified Profiles",
    description:
      "All members are verified with photo and ID verification to ensure authenticity and safety in every connection.",
  },
  {
    iconUrl: "https://cdn.lordicon.com/hpivxauj.json",
    title: "Real Connections",
    description:
      "Connect with genuine people looking for meaningful relationships, not just casual encounters.",
  },
  {
    iconUrl: "https://cdn.lordicon.com/gmzxduhd.json",
    title: "Instant Messaging",
    description:
      "Chat instantly with matches, share photos, and get to know each other before meeting in person.",
  },
  {
    iconUrl: "https://cdn.lordicon.com/jvucoldz.json",
    title: "Compatibility Score",
    description:
      "See detailed compatibility scores with each match to understand your potential connection at a glance.",
  },
  {
    iconUrl: "https://cdn.lordicon.com/oqhlhtfq.json",
    title: "Privacy First",
    description:
      "Your data is encrypted and protected. Control who sees your profile and what information you share.",
  },
]


  return (
    <section className="relative py-24 px-4 bg-linear-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/fyndmee_image.jpg"
                alt="Why Choose FyndMee"
                width={600}
                height={600}
                className="rounded-3xl object-cover"
                priority
              />
              <div className="absolute top-4 -left-4 w-24 h-24 bg-rose-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 -right-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose{" "}
                <span className="bg-linear-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  FyndMee
                </span>
                ?
              </h2>
              <p className="text-lg text-white/70">
                Experience dating reimagined with cutting-edge technology and genuine human connection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
