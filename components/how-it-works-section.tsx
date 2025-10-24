"use client"
import { ArrowRight } from "lucide-react"

const StepCard = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="relative">
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white font-bold text-xl">
          {number}
        </div>
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description:
        "Sign up with your email or phone number. Add photos, write your bio, and tell us what you're looking for.",
    },
    {
      number: 2,
      title: "Get Matched",
      description: "Our AI algorithm analyzes your preferences and shows you compatible matches tailored just for you.",
    },
    {
      number: 3,
      title: "Connect & Chat",
      description:
        "Start conversations with people you're interested in. Share messages, photos, and get to know each other.",
    },
    {
      number: 4,
      title: "Meet & Fall in Love",
      description: "When you're ready, meet in person and see if the spark is real. Your perfect match is waiting.",
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-white/70">
            Finding love has never been easier. Follow these simple steps to get started.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index}>
              <StepCard {...step} />
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <ArrowRight className="w-6 h-6 text-rose-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
