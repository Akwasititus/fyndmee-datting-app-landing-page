"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Crown,
  Eye,
  Filter,
  Globe2,
  Heart,
  MapPin,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Feature = {
  text: string
  icon: typeof Heart
}

type Plan = {
  name: string
  shortName: string
  iconUrl: string
  description: string
  eyebrow: string
  popular?: boolean
  accent: "plus" | "gold" | "royal"
  features: Feature[]
}

const plans: Plan[] = [
  {
    name: "Fynd Mee Plus",
    shortName: "Plus",
    iconUrl: "/images/fyndmee-plus.png",
    eyebrow: "More freedom",
    accent: "plus",
    description: "Remove the limits and explore more people, places, and possibilities.",
    features: [
      { text: "Unlimited Likes", icon: Heart },
      { text: "Unlimited Passport Mode", icon: MapPin },
      { text: "1 Supa Like every month", icon: Zap },
      { text: "One 15-minute Boost", icon: Star },
      { text: "Ad-free experience", icon: ShieldCheck },
      { text: "Priority support", icon: Sparkles },
    ],
  },
  {
    name: "Fynd Mee Gold",
    shortName: "Gold",
    iconUrl: "/images/fyndmee-gold.png",
    eyebrow: "See more, match smarter",
    accent: "gold",
    popular: true,
    description: "Know who is interested and focus your time on the connections that matter.",
    features: [
      { text: "Everything in Plus", icon: Check },
      { text: "See Who Liked You", icon: Eye },
      { text: "Two 15-minute Boosts monthly", icon: Star },
      { text: "3 Supa Likes every month", icon: Zap },
      { text: "Advanced match filters", icon: Filter },
      { text: "Priority customer support", icon: Sparkles },
    ],
  },
  {
    name: "Fynd Mee Royal",
    shortName: "Royal",
    iconUrl: "/images/fyndmee-royal.png",
    eyebrow: "The complete experience",
    accent: "royal",
    description: "Our highest level of visibility, access, and premium support.",
    features: [
      { text: "Everything in Gold", icon: Check },
      { text: "VIP badge on your profile", icon: Crown },
      { text: "One 30-minute Boost monthly", icon: Star },
      { text: "5 Supa Likes every month", icon: Zap },
      { text: "Global access", icon: Globe2 },
      { text: "Premium customer support", icon: Sparkles },
    ],
  },
]

const addOns = [
  {
    name: "Supa Likes",
    description: "Show stronger interest and stand out from an ordinary Like.",
    icon: Zap,
    tone: "rose",
    details: ["Stand out in their feed", "Signal real interest", "Increase your visibility"],
  },
  {
    name: "Profile Boost",
    description: "Move your profile closer to the front when you want more eyes on you.",
    icon: Star,
    tone: "violet",
    details: ["Appear earlier in discovery", "Choose 15 or 30 minutes", "Use it when activity is high"],
  },
  {
    name: "Rewind",
    description: "Take back your last swipe and give a promising profile another look.",
    icon: RefreshCcw,
    tone: "amber",
    details: ["Undo your last swipe", "Recover a missed profile", "Give a connection another chance"],
  },
]

const addOnStyles: Record<string, { panel: string; icon: string }> = {
  rose: {
    panel: "from-[#fff0f2] via-[#fff8f8] to-[#ffe2e9] dark:from-[#351621] dark:via-[#2b1720] dark:to-[#42172a]",
    icon: "bg-white text-[#ad1f48] ring-[#efc9d3] dark:bg-[#5b2036] dark:text-[#ffd6e0] dark:ring-[#82445a]",
  },
  violet: {
    panel: "from-[#f5f0ff] via-[#fbf9ff] to-[#e9ddff] dark:from-[#271b38] dark:via-[#241a30] dark:to-[#392044]",
    icon: "bg-white text-[#7046a0] ring-[#ded0f2] dark:bg-[#4b2a60] dark:text-[#e8d5ff] dark:ring-[#715183]",
  },
  amber: {
    panel: "from-[#fff7e8] via-[#fffcf7] to-[#ffebbf] dark:from-[#352516] dark:via-[#2e2118] dark:to-[#493016]",
    icon: "bg-white text-[#9a6500] ring-[#f3dfb4] dark:bg-[#5d411e] dark:text-[#ffe4aa] dark:ring-[#806139]",
  },
}

const comparison = [
  ["Unlimited Likes", true, true, true],
  ["Passport Mode", true, true, true],
  ["See Who Liked You", false, true, true],
  ["Advanced Filters", false, true, true],
  ["VIP Profile Badge", false, false, true],
  ["Global Access", false, false, true],
] as const

const accentStyles = {
  plus: {
    bar: "bg-gradient-to-r from-sky-400 to-cyan-300",
    shell: "border-sky-200/80 dark:border-sky-400/20",
    wash: "from-sky-500/14 via-cyan-400/5 to-transparent",
    label: "text-sky-700 dark:text-sky-300",
    icon: "bg-sky-50 ring-sky-200 dark:bg-sky-400/10 dark:ring-sky-400/20",
  },
  gold: {
    bar: "bg-gradient-to-r from-amber-400 to-yellow-200",
    shell: "border-[#d7a837] shadow-[0_24px_70px_-30px_rgba(199,145,29,0.48)] dark:border-[#d7a837]/70",
    wash: "from-amber-400/22 via-orange-300/8 to-transparent",
    label: "text-amber-700 dark:text-amber-300",
    icon: "bg-amber-50 ring-amber-200 dark:bg-amber-400/10 dark:ring-amber-400/20",
  },
  royal: {
    bar: "bg-gradient-to-r from-violet-500 to-fuchsia-400",
    shell: "border-violet-200/80 dark:border-violet-400/20",
    wash: "from-violet-500/16 via-fuchsia-400/6 to-transparent",
    label: "text-violet-700 dark:text-violet-300",
    icon: "bg-violet-50 ring-violet-200 dark:bg-violet-400/10 dark:ring-violet-400/20",
  },
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function PricingPage() {
  const reduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff7f3_0%,#fffdfb_44%,#fff9f6_100%)] text-[#2d1720] dark:bg-[linear-gradient(180deg,#0f090b_0%,#160e12_50%,#0f090b_100%)] dark:text-[#fff8f5]">
      <div className="relative overflow-hidden rounded-b-[2.5rem] border-b border-[#7b1d38]/10 bg-[#2a0d16] px-4 pb-24 pt-6 sm:rounded-b-[4rem] sm:px-6 lg:px-8 lg:pb-32">
        <Image src="/images/pricing-hero-joy.png" alt="" fill priority sizes="100vw" className="object-cover object-[73%_top] sm:object-[center_38%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,13,22,0.3)_0%,rgba(42,13,22,0.48)_34%,rgba(42,13,22,0.92)_70%,#2a0d16_100%)] sm:hidden" />
        <div aria-hidden="true" className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(42,13,22,0.97)_0%,rgba(42,13,22,0.86)_35%,rgba(42,13,22,0.44)_68%,rgba(42,13,22,0.12)_100%)] sm:block" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-[background-color,border-color,transform] duration-200 hover:-translate-x-0.5 hover:border-white/25 hover:bg-white/10 hover:text-[#fff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7899] motion-reduce:hover:translate-x-0"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 motion-reduce:group-hover:translate-x-0" />
            Back to home
          </Link>

          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="mt-64 max-w-[650px] text-left sm:mt-24 lg:mt-28"
          >
            <h1
              className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#fff8f5] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Choose your <span className="italic text-[#ffb7c8]">experience.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-[#ffe0e6] sm:text-lg sm:leading-8">
              Start with the features that fit how you connect today. You can
              always discover more as your Fynd Mee journey grows.
            </p>
          </motion.div>
        </div>
      </div>

      <section aria-labelledby="membership-heading" className="relative z-10 -mt-12 px-4 sm:px-6 lg:-mt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 id="membership-heading" className="sr-only">Membership plans</h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan, index) => {
              const styles = accentStyles[plan.accent]

              return (
                <motion.article
                  key={plan.name}
                  variants={reveal}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.055 }}
                  className={`group relative isolate flex overflow-hidden rounded-[2rem] border bg-white shadow-[0_20px_55px_-38px_rgba(75,21,39,0.42)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-34px_rgba(75,21,39,0.5)] motion-reduce:hover:translate-y-0 dark:bg-[#191013] ${styles.shell}`}
                >
                  <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-48 bg-linear-to-b ${styles.wash}`} />
                  <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${styles.bar}`} />

                  {plan.popular && (
                    <div className="absolute right-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#9a6b00] px-3 py-1.5 text-xs font-bold text-[#fff] shadow-lg">
                      <Star aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
                      Most popular
                    </div>
                  )}

                  <div className="relative flex w-full flex-col p-6 sm:p-8">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-[1.35rem] shadow-[0_10px_30px_rgba(42,13,22,0.08)] ring-1 ${styles.icon}`}>
                      <Image
                        src={plan.iconUrl}
                        alt=""
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                      />
                    </div>

                    <p className={`mt-6 text-xs font-bold uppercase tracking-[0.16em] ${styles.label}`}>
                      {plan.eyebrow}
                    </p>
                    <h3 className="mt-2 text-[1.7rem] font-bold tracking-[-0.035em] text-gray-950 dark:text-[#fff8f5]">
                      {plan.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-white/60 lg:min-h-14">
                      {plan.description}
                    </p>

                    <div className="my-6 h-px bg-gray-200 dark:bg-white/10" />

                    <ul className="flex-1 space-y-4">
                      {plan.features.map(({ text, icon: Icon }) => (
                        <li key={text} className="flex items-start gap-3 text-[15px] leading-6 text-gray-700 dark:text-white/75">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#AB1E3E]/10 text-[#AB1E3E] dark:bg-[#D42952]/15 dark:text-[#ff7899]">
                            <Icon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.4} />
                          </span>
                          {text}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/download"
                      className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold transition-[transform,background-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#191013] ${
                        plan.popular
                          ? "bg-[#AB1E3E] text-[#fff] shadow-[0_10px_26px_rgba(171,30,62,0.28)] hover:-translate-y-0.5 hover:bg-[#8f1733]"
                          : "border border-gray-300 bg-white text-gray-900 hover:-translate-y-0.5 hover:border-[#AB1E3E]/40 hover:bg-rose-50 dark:border-white/15 dark:bg-white/5 dark:text-[#fff8f5] dark:hover:bg-white/10"
                      } motion-reduce:hover:translate-y-0`}
                    >
                      Choose {plan.shortName}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="compare-heading" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          variants={reveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-5xl"
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#AB1E3E] dark:text-[#ff7899]">
              Compare memberships
            </p>
            <h2
              id="compare-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-gray-950 sm:text-4xl dark:text-[#fff8f5]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              See what each plan unlocks
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-[0_22px_55px_-36px_rgba(75,21,39,0.32)] dark:border-white/10 dark:bg-[#191013]">
            <div className="overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#AB1E3E]" role="region" aria-label="Plan comparison" tabIndex={0}>
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <caption className="sr-only">Comparison of Fynd Mee Plus, Gold, and Royal features</caption>
                <thead>
                  <tr className="border-b border-gray-200 bg-[#fff7f3] dark:border-white/10 dark:bg-white/[0.03]">
                    <th scope="col" className="sticky left-0 z-10 min-w-[200px] bg-[#fff7f3] px-6 py-5 text-left font-semibold text-gray-900 dark:bg-[#21171a] dark:text-[#fff8f5]">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan.shortName} scope="col" className={`min-w-[150px] px-5 py-5 text-center font-bold text-gray-900 dark:text-[#fff8f5] ${plan.popular ? "bg-amber-100/70 dark:bg-amber-400/10" : ""}`}>
                        {plan.shortName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([feature, ...values]) => (
                    <tr key={feature} className="border-b border-gray-100 transition-colors last:border-0 hover:bg-rose-50/50 dark:border-white/[0.07] dark:hover:bg-white/[0.03]">
                      <th scope="row" className="sticky left-0 z-10 min-w-[200px] bg-white px-6 py-4 text-left font-medium text-gray-700 dark:bg-[#191013] dark:text-white/70">
                        {feature}
                      </th>
                      {values.map((included, index) => (
                        <td key={`${feature}-${plans[index].shortName}`} className={`px-5 py-4 text-center ${plans[index].popular ? "bg-amber-50/70 dark:bg-amber-400/[0.04]" : ""}`}>
                          {included ? (
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                              <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.6} />
                              <span className="sr-only">Included</span>
                            </span>
                          ) : (
                            <span className="text-gray-300 dark:text-white/20" aria-label="Not included">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      <section aria-labelledby="addons-heading" className="border-y border-[#7b1d38]/10 bg-[#f7eee9] px-4 py-20 dark:border-white/[0.07] dark:bg-[#160e11] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#AB1E3E] dark:text-[#ff7899]">
              Extra momentum
            </p>
            <h2
              id="addons-heading"
              className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] text-gray-950 sm:text-5xl dark:text-[#fff8f5]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              A little boost when you want it
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-white/60">
              Add focused tools to your experience without changing the way you connect.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {addOns.map((addOn, index) => {
              const Icon = addOn.icon
              return (
                <motion.article
                  key={addOn.name}
                  variants={reveal}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_18px_45px_-36px_rgba(75,21,39,0.4)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-32px_rgba(75,21,39,0.5)] motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-[#211418]"
                >
                  <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${addOnStyles[addOn.tone].panel}`}>
                    <div aria-hidden="true" className="absolute h-32 w-32 rounded-full border border-current/10 opacity-20" />
                    <div aria-hidden="true" className="absolute h-52 w-52 rounded-full border border-current/10 opacity-15" />
                    <span className={`relative flex h-16 w-16 items-center justify-center rounded-[1.35rem] shadow-[0_15px_35px_rgba(42,13,22,0.12)] ring-1 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100 ${addOnStyles[addOn.tone].icon}`}>
                      <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.8} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-950 dark:text-[#fff8f5]">{addOn.name}</h3>
                    <p className="mt-4 min-h-18 text-sm leading-6 text-gray-600 dark:text-white/60">{addOn.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {addOn.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-white/70">
                          <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-[#AB1E3E] dark:text-[#ff7899]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/download"
                      className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-[#AB1E3E] transition-colors hover:text-[#7f122e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E] focus-visible:ring-offset-2 dark:text-[#ff7899] dark:hover:text-[#ffb0c2] dark:focus-visible:ring-offset-[#211418]"
                    >
                      Get it in the app
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          variants={reveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#2a0d16] px-6 py-12 text-center shadow-[0_26px_70px_-34px_rgba(75,21,39,0.6)] sm:px-10 sm:py-16"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(224,66,105,0.3),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(235,151,77,0.16),transparent_30%)]" />
          <div className="relative">
            <h2
              className="text-balance text-3xl font-semibold tracking-[-0.03em] text-[#fff8f5] sm:text-5xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Your next connection is waiting.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/65">
              Download Fynd Mee and choose the experience that feels right for you.
            </p>
            <Link
              href="/download"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fff8f5] px-7 text-sm font-bold text-[#2a0d16] shadow-lg transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7899] focus-visible:ring-offset-4 focus-visible:ring-offset-[#2a0d16] motion-reduce:hover:translate-y-0"
            >
              Download Fynd Mee
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
