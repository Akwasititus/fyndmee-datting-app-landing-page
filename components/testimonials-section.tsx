"use client"
import Image from "next/image"
import { Flame, Shield, Users, Zap, Heart, Lock, Mail } from "lucide-react"

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
    <div className="relative z-10">
      <Icon className="w-10 h-10 text-rose-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
)

export default function FeaturesSection() {
  const features = [
    {
      icon: Flame,
      title: "Smart Matching",
      description: "AI-powered algorithm that learns your preferences and finds compatible matches.",
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All members are verified with photo and ID verification for safety.",
    },
    {
      icon: Users,
      title: "Real Connections",
      description: "Connect with genuine people looking for meaningful relationships.",
    },
    {
      icon: Zap,
      title: "Instant Messaging",
      description: "Chat instantly with matches and get to know each other.",
    },
    {
      icon: Heart,
      title: "Compatibility Score",
      description: "See detailed compatibility scores with each match at a glance.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data is encrypted and protected. Control your privacy.",
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Be the first to know
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                FyndMee has led to millions of relationships, marriages, and friendships around the world. 
                Want to see what we're building next?
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
              <p className="text-lg text-white/70 leading-relaxed">
                Whether it's tips from our dating experts, how we're using AI to power better matchmaking, 
                or feature updates like ID Verification, you'll be the first to discover how we're putting 
                love at the heart of dating.
              </p>
            </div>

            {/* Sign Up Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-rose-500/50 focus:outline-none transition-colors"
              />
              <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
                Sign up
                <Mail className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">

                           <Image
  src="/images/all-in-fyndmee.png"
  alt="FyndMee App"
  width={900}
  height={800}
  className="rounded-3xl shadow-2xl"
  priority
/> 
            </div>
          </div>
        </div>



      </div>
    </section>
  )
}



