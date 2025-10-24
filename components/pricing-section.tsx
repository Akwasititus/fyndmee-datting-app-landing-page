"use client"
import { Check } from "lucide-react"

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted,
}: { name: string; price: string; description: string; features: string[]; highlighted?: boolean }) => (
  <div
    className={`relative rounded-2xl p-8 transition-all duration-300 ${
      highlighted
        ? "bg-gradient-to-br from-rose-500/20 to-pink-500/20 border-2 border-rose-500 shadow-2xl shadow-rose-500/20 scale-105"
        : "bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-rose-500/50"
    }`}
  >
    {highlighted && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </span>
      </div>
    )}

    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
    <p className="text-white/70 mb-6">{description}</p>

    <div className="mb-8">
      <span className="text-5xl font-bold text-white">${price}</span>
      <span className="text-white/70 ml-2">/month</span>
    </div>

    <button
      className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
        highlighted
          ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-lg hover:shadow-rose-500/50"
          : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
      }`}
    >
      Get Started
    </button>

    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
          <span className="text-white/80">{feature}</span>
        </div>
      ))}
    </div>
  </div>
)

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "9.99",
      description: "Perfect for exploring",
      features: ["Browse profiles", "5 likes per day", "Basic messaging", "Profile verification", "Standard matching"],
    },
    {
      name: "Premium",
      price: "19.99",
      description: "Most popular choice",
      features: [
        "Unlimited likes",
        "Unlimited messaging",
        "See who liked you",
        "Advanced matching",
        "Profile boost",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "VIP",
      price: "49.99",
      description: "For serious seekers",
      features: [
        "Everything in Premium",
        "VIP badge",
        "Concierge matching",
        "Video verification",
        "Monthly profile refresh",
        "24/7 priority support",
      ],
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-white/70">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
