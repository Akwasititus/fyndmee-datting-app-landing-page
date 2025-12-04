"use client"

import Link from 'next/link'
import { Check, Star, Crown, Rocket, Flame, Zap, Heart, Map, Eye, Filter, Globe, Shield, ArrowRight } from 'lucide-react'
import { motion, Variants } from "framer-motion"

const fadeUp: Variants = {
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

// Custom component to handle Lordicon
const LordIcon = ({ src, colors = "primary:#ffffff,secondary:#ffffff", trigger = "hover", size = 60 }: any) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <lord-icon
            src="${src}"
            trigger="${trigger}"
            colors="${colors}"
            style="width:${size}px;height:${size}px"
          >
          </lord-icon>
        `
      }}
    />
  )
}

export default function PricingPage() {
  const plans = [
    {
      name: "Fynd Mee Plus",
      iconUrl: "/images/fyndmee-plus.png",
      color: "from-blue-500 to-cyan-500",
      description: "Essential premium features to enhance your experience",
      features: [
        { text: "Unlimited Likes", icon: Heart },
        { text: "Unlimited Passport Mode", icon: Map },
        { text: "1 Free Supa Like / Month", icon: Zap },
        { text: "One 15-minute boost", icon: Star },
        { text: "No Ads", icon: Shield },
        { text: "Priority Support", icon: Heart }
      ]
    },
    {
      name: "Fynd Mee Gold",
      iconUrl: "/images/fyndmee-gold.png",
      color: "from-amber-500 to-orange-500",
      description: "Advanced features for serious connections",
      popular: true,
      features: [
        { text: "Everything in Plus", icon: Check },
        { text: "See Who Liked You", icon: Eye },
        { text: "Two 15-minute boosts / Month", icon: Star },
        { text: "3 Free Supa Likes / Month", icon: Zap },
        { text: "Advanced Filters", icon: Filter },
        { text: "Priority Customer Support", icon: Heart }
      ]
    },
    {
      name: "Fynd Mee Royal",
      iconUrl: "/images/fyndmee-royal.png",
      color: "from-purple-500 to-pink-500",
      description: "The ultimate VIP experience",
      features: [
        { text: "Everything in Gold", icon: Check },
        { text: "VIP badge on profile", icon: Crown },
        { text: "One 30-minute boost / Month", icon: Star },
        { text: "5 Free Supa Likes / Month", icon: Zap },
        { text: "Global access", icon: Globe },
        { text: "Premium Customer Support", icon: Heart }
      ]
    },

    {
      name: "Supa Likes",
      icon: Flame,
      color: "from-rose-500 to-pink-500",
      description: "Get noticed 4.5x more",
      features: [
        { text: "3 Supa Likes - $3.99 ($1.33/each)", icon: Zap },
        { text: "6 Supa Likes - $6.99 ($1.17/each)", icon: Zap },
        { text: "15 Supa Likes - $14.99 ($0.99/each)", icon: Zap },
        { text: "30 Supa Likes - $19.99 ($0.67/each)", icon: Zap }
      ],
      tagline: "You are 4.5x more likely to find a partner/match",
      cta: "Proceed to Pay $3.99"
    },

    {
      name: "Boost Your Profile",
      icon: Rocket,
      color: "from-violet-500 to-indigo-500",
      description: "Be the top profile in your area",
      features: [
        { text: "15 min: 2 Boosts - $3.99", icon: Star },
        { text: "15 min: 5 Boosts - $6.99", icon: Star },
        { text: "15 min: 10 Boosts - $9.99", icon: Star },
        { text: "30 min: 2 Boosts - $5.99", icon: Star },
        { text: "30 min: 5 Boosts - $9.99", icon: Star },
        { text: "30 min: 10 Boosts - $14.99", icon: Star }
      ],
      tagline: "Get more likes and matches with profile boosts",
      cta: "Proceed to Pay $6.99"
    },

    {
      name: "Rewind",
      icon: Rocket,
      color: "from-violet-500 to-indigo-500",
      description: "Get another look at the person you missed",
      features: [
        { text: "Weekly - $3.99", icon: Star },
        { text: "Monthly $6.99 ($117/each, save 12%)", icon: Star },
        { text: "Quarterly (3 Months) $14.99 ($0.99/each, save 26%)", icon: Star },
        { text: "Half-Year $19.99 ($0.67/each, save 50%)", icon: Star },
      ],
      tagline: "Get more likes and matches with profile boosts",
      cta: "Proceed to Pay $6.99"
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      {/* Header */}



      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#AB1E3E] dark:hover:text-[#AB1E3E] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </div>




      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 text-center mb-16"
      >

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Choose Your Experience
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the perfect plan to enhance your journey in finding meaningful connections
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white dark:bg-slate-800 rounded-3xl shadow-lg border transition-all duration-300 hover:shadow-xl ${plan.popular
                ? 'border-2 border-amber-400 dark:border-amber-500'
                : 'border-gray-200 dark:border-slate-700'
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className={`p-8 rounded-t-3xl bg-gradient-to-r ${plan.color}`}>
                <div className="text-center text-white">
                  <div className="flex justify-center mb-4" style={{ width: "60px", height: "60px", margin: "0 auto" }}>
                    

                    <div className="bg-white/30 backdrop-blur-lg rounded-full p-4 shadow-lg">
                      <img
                        src={plan.iconUrl}
                        alt="Fynd Mee logo"
                        className="h-8 w-8 object-contain hover:scale-110 transition-transform"
                      />
                    </div>
                    
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90">{plan.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => {
                    const FeatureIcon = feature.icon
                    return (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <FeatureIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                      </li>
                    )
                  })}
                </ul>

                {/* CTA Button */}
                <button className="w-full mt-8 py-3 px-6 bg-[#AB1E3E] text-white/90 font-semibold rounded-xl hover:bg-rose-700 transition-colors">
                  Get the App
                </button>

                {/* Royal Badge */}
                {plan.name === "Fynd Mee Royal" && (
                  <div className="flex items-center justify-center mt-4 gap-2 text-purple-600 dark:text-purple-400">
                    <Crown className="w-5 h-5" />
                    <span className="font-semibold text-sm">VIP Experience</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 mt-20 max-w-4xl"
      >
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-700 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Plan Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-4 font-semibold text-gray-900 dark:text-white">Features</th>
                  <th className="text-center py-4 font-semibold text-blue-600 dark:text-blue-400">Plus</th>
                  <th className="text-center py-4 font-semibold text-amber-600 dark:text-amber-400">Gold</th>
                  <th className="text-center py-4 font-semibold text-purple-600 dark:text-purple-400">Royal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Unlimited Likes",
                  "Unlimited Passport Mode",
                  "Supa Likes",
                  "Boosts",
                  "See Who Liked You",
                  "Advanced Filters",
                  "VIP Badge",
                  "Global Access",
                  "Ad-Free Experience",
                  "Customer Support"
                ].map((feature, index) => (
                  <tr key={index} className="border-b text-white border-gray-100 dark:border-slate-700">
                    <td className="py-4 text-gray-600 dark:text-gray-400">{feature}</td>
                    <td className="text-center py-4">
                      {feature === "Supa Likes" ? "1/month" :
                        feature === "Boosts" ? "15min" :
                          feature === "Customer Support" ? "Priority" :
                            ["Unlimited Likes", "Unlimited Passport Mode", "Ad-Free Experience"].includes(feature) ? "✓" : "–"}
                    </td>
                    <td className="text-center py-4">
                      {feature === "Supa Likes" ? "3/month" :
                        feature === "Boosts" ? "2x 15min" :
                          feature === "Customer Support" ? "Priority" :
                            ["Unlimited Likes", "Unlimited Passport Mode", "See Who Liked You", "Advanced Filters", "Ad-Free Experience"].includes(feature) ? "✓" : "–"}
                    </td>
                    <td className="text-center py-4">
                      {feature === "Supa Likes" ? "5/month" :
                        feature === "Boosts" ? "30min" :
                          feature === "Customer Support" ? "Premium" :
                            ["Unlimited Likes", "Unlimited Passport Mode", "See Who Liked You", "Advanced Filters", "VIP Badge", "Global Access", "Ad-Free Experience"].includes(feature) ? "✓" : "–"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

