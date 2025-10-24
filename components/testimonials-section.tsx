"use client"
import { Star } from "lucide-react"

const TestimonialCard = ({
  name,
  role,
  content,
  rating,
}: { name: string; role: string; content: string; rating: number }) => (
  <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-rose-500/50 transition-all duration-300">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-rose-400 text-rose-400" />
      ))}
    </div>
    <p className="text-white/90 mb-6 leading-relaxed italic">"{content}"</p>
    <div>
      <p className="font-bold text-white">{name}</p>
      <p className="text-rose-400 text-sm">{role}</p>
    </div>
  </div>
)

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah & Michael",
      role: "Married after 8 months",
      content: "We matched on LoveMatch and knew immediately we had something special. Now we're planning our wedding!",
      rating: 5,
    },
    {
      name: "Emma",
      role: "Found her soulmate",
      content:
        "After years of dating apps, LoveMatch finally showed me what real compatibility looks like. Best decision ever!",
      rating: 5,
    },
    {
      name: "James",
      role: "Happy relationship",
      content:
        "The verification system made me feel safe. I met someone genuine and we've been together for 2 years now.",
      rating: 5,
    },
    {
      name: "Lisa & David",
      role: "Engaged",
      content:
        "LoveMatch's matching algorithm is incredible. We have so much in common and our relationship feels effortless.",
      rating: 5,
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-950 via-black to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Love Stories from Our{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-white/70">Real people, real connections, real love</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
