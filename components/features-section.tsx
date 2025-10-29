// "use client"
// import { Flame, Shield, Users, Zap, Heart, Lock } from "lucide-react"

// const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
//   <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20">
//     <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
//     <div className="relative z-10">
//       <Icon className="w-12 h-12 text-rose-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-white/70 leading-relaxed">{description}</p>
//     </div>
//   </div>
// )

// export default function FeaturesSection() {
//   const features = [
//     {
//       icon: Flame,
//       title: "Smart Matching",
//       description:
//         "AI-powered algorithm that learns your preferences and finds compatible matches based on interests, values, and lifestyle.",
//     },
//     {
//       icon: Shield,
//       title: "Verified Profiles",
//       description:
//         "All members are verified with photo and ID verification to ensure authenticity and safety in every connection.",
//     },
//     {
//       icon: Users,
//       title: "Real Connections",
//       description: "Connect with genuine people looking for meaningful relationships, not just casual encounters.",
//     },
//     {
//       icon: Zap,
//       title: "Instant Messaging",
//       description: "Chat instantly with matches, share photos, and get to know each other before meeting in person.",
//     },
//     {
//       icon: Heart,
//       title: "Compatibility Score",
//       description:
//         "See detailed compatibility scores with each match to understand your potential connection at a glance.",
//     },
//     {
//       icon: Lock,
//       title: "Privacy First",
//       description:
//         "Your data is encrypted and protected. Control who sees your profile and what information you share.",
//     },
//   ]

//   return (
//     <section className="relative py-24 px-4 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Why Choose{" "}
//             <span className="bg-gradient-to-r from-rose-900 to-pink-900 bg-clip-text text-transparent">FyndMee</span>?
//           </h2>
//           <p className="text-xl text-white/70 max-w-2xl mx-auto">
//             Experience dating reimagined with cutting-edge technology and genuine human connection
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"
import { Flame, Shield, Users, Zap, Heart, Lock } from "lucide-react"
import Image from "next/image"

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
      description:
        "AI-powered algorithm that learns your preferences and finds compatible matches based on interests, values, and lifestyle.",
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description:
        "All members are verified with photo and ID verification to ensure authenticity and safety in every connection.",
    },
    {
      icon: Users,
      title: "Real Connections",
      description: "Connect with genuine people looking for meaningful relationships, not just casual encounters.",
    },
    {
      icon: Zap,
      title: "Instant Messaging",
      description: "Chat instantly with matches, share photos, and get to know each other before meeting in person.",
    },
    {
      icon: Heart,
      title: "Compatibility Score",
      description:
        "See detailed compatibility scores with each match to understand your potential connection at a glance.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description:
        "Your data is encrypted and protected. Control who sees your profile and what information you share.",
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
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
 
              <Image
                src="/images/fyndmee_image.jpg"
                alt="Why Choose FyndMee"
                width={600}
                height={600}
                className="rounded-3xl object-cover"
                priority
              />

              {/* Optional: Add some decorative elements */}
              <div className="absolute top-4 -left-4 w-24 h-24 bg-rose-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 -right-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
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
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
