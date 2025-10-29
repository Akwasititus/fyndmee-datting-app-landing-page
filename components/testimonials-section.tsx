// "use client"
// import { Star } from "lucide-react"

// const TestimonialCard = ({
//   name,
//   role,
//   content,
//   rating,
// }: { name: string; role: string; content: string; rating: number }) => (
//   <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-rose-500/50 transition-all duration-300">
//     <div className="flex gap-1 mb-4">
//       {Array.from({ length: rating }).map((_, i) => (
//         <Star key={i} className="w-5 h-5 fill-rose-400 text-rose-400" />
//       ))}
//     </div>
//     <p className="text-white/90 mb-6 leading-relaxed italic">"{content}"</p>
//     <div>
//       <p className="font-bold text-white">{name}</p>
//       <p className="text-rose-400 text-sm">{role}</p>
//     </div>
//   </div>
// )

// export default function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Sarah & Michael",
//       role: "Married after 8 months",
//       content: "We matched on LoveMatch and knew immediately we had something special. Now we're planning our wedding!",
//       rating: 5,
//     },
//     {
//       name: "Emma",
//       role: "Found her soulmate",
//       content:
//         "After years of dating apps, LoveMatch finally showed me what real compatibility looks like. Best decision ever!",
//       rating: 5,
//     },
//     {
//       name: "James",
//       role: "Happy relationship",
//       content:
//         "The verification system made me feel safe. I met someone genuine and we've been together for 2 years now.",
//       rating: 5,
//     },
//     {
//       name: "Lisa & David",
//       role: "Engaged",
//       content:
//         "LoveMatch's matching algorithm is incredible. We have so much in common and our relationship feels effortless.",
//       rating: 5,
//     },
//   ]

//   return (
//     <section className="relative py-24 px-4 bg-gradient-to-b from-slate-950 via-black to-slate-950 overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 left-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Love Stories from Our{" "}
//             <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Community</span>
//           </h2>
//           <p className="text-xl text-white/70">Real people, real connections, real love</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} {...testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



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
              {/* Replace with your actual image */}
              {/* <div className="aspect-square bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center border border-white/10">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your Image Here</h3>
                  <p className="text-white/70">
                    Replace with your app screenshot
                  </p>
                </div>
              </div> */}
                           <Image
  src="/images/display.png"
  alt="FyndMee App"
  width={400}
  height={500}
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



