"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import Image from "next/image"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

// Custom component to handle Lordicon
const LordIcon = ({
  src,
  colors = "primary:#D42952,secondary:#F2879F",
  trigger = "loop-on-hover",
  size = 28,
}: {
  src: string
  colors?: string
  trigger?: string
  size?: number
}) => {
  return (
    <div
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: `
          <lord-icon
            src="${src}"
            trigger="${trigger}"
            colors="${colors}"
            style="width:${size}px;height:${size}px"
          >
          </lord-icon>
        `,
      }}
    />
  )
}

type Feature = {
  iconUrl: string
  title: string
  description: string
}

const FeatureCard = ({
  iconUrl,
  title,
  description,
  side,
}: Feature & { side: "left" | "right" }) => (
  <motion.li
    variants={fadeUp}
    className={`group relative rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#AB1E3E]/40 hover:shadow-lg hover:shadow-[#AB1E3E]/10 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-[#D42952]/40 dark:hover:bg-white/[0.06] ${
      side === "left"
        ? "lg:text-right lg:hover:-translate-x-1"
        : "lg:hover:translate-x-1"
    } motion-reduce:hover:translate-x-0`}
  >
    {/* Spoke pointing at the centrepiece */}
    <span
      aria-hidden="true"
      className={`absolute top-1/2 hidden h-px w-10 transition-opacity duration-300 lg:block ${
        side === "left"
          ? "-right-10 bg-linear-to-r from-[#AB1E3E]/30 to-transparent dark:from-[#D42952]/40"
          : "-left-10 bg-linear-to-l from-[#AB1E3E]/30 to-transparent dark:from-[#D42952]/40"
      } opacity-60 group-hover:opacity-100`}
    />

    <span
      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#AB1E3E]/8 ring-1 ring-[#AB1E3E]/10 transition-colors duration-300 group-hover:bg-[#AB1E3E]/12 dark:bg-white/5 dark:ring-white/10 ${
        side === "left" ? "lg:ml-auto" : ""
      }`}
    >
      <LordIcon src={iconUrl} />
    </span>
    <h3 className="mb-1.5 text-base font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-600 dark:text-white/60">{description}</p>
  </motion.li>
)

export default function WhyChooseFyndMee() {
  const reduceMotion = useReducedMotion()

  const features: Feature[] = [
    {
      iconUrl: "https://cdn.lordicon.com/wzrwaorf.json",
      title: "Smart Matching",
      description:
        "AI-powered algorithm that learns your preferences and finds compatible matches based on interests, values, and lifestyle.",
    },
    {
      iconUrl: "https://cdn.lordicon.com/egiwmiit.json",
      title: "Verified Profiles",
      description:
        "All members are verified with photo and ID verification to ensure authenticity and safety in every connection.",
    },
    {
      iconUrl: "https://cdn.lordicon.com/fhtaantg.json",
      title: "Real Connections",
      description:
        "Connect with genuine people looking for meaningful relationships, not just casual encounters.",
    },
    {
      iconUrl: "https://cdn.lordicon.com/fdxqrdfe.json",
      title: "Instant Messaging",
      description:
        "Chat instantly with matches, share photos, and get to know each other before meeting in person.",
    },
    {
      iconUrl: "https://cdn.lordicon.com/gqdnbnwt.json",
      title: "Compatibility Score",
      description:
        "See detailed compatibility scores with each match to understand your potential connection at a glance.",
    },
    {
      iconUrl: "https://cdn.lordicon.com/svbmmyue.json",
      title: "Privacy First",
      description:
        "Your data is encrypted and protected. Control who sees your profile and what information you share.",
    },
  ]

  const leftFeatures = features.slice(0, 3)
  const rightFeatures = features.slice(3)

  const columnProps = {
    variants: stagger,
    initial: reduceMotion ? (false as const) : ("hidden" as const),
    whileInView: "show" as const,
    viewport: { once: true, amount: 0.15 },
    className: "grid gap-4 md:grid-cols-3 lg:auto-rows-fr lg:grid-cols-1",
  }

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative overflow-hidden bg-linear-to-b from-white via-gray-50 to-white px-4 py-24 dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#AB1E3E]/8 blur-3xl dark:bg-[#AB1E3E]/15" />
        <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-[#D42952]/8 blur-3xl dark:bg-[#D42952]/12" />
        {/* Glow behind the centrepiece */}
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#AB1E3E]/10 blur-[110px] dark:bg-[#AB1E3E]/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-[#AB1E3E] uppercase dark:text-[#F2879F]">
            Why Fynd Mee
          </p>
          <h2
            id="why-choose-heading"
            className="mb-4 text-4xl font-bold tracking-tight text-balance text-gray-900 md:text-5xl dark:text-white"
          >
            Why Choose <span className="text-[#AB1E3E] dark:text-[#D42952]">Fynd Mee</span>?
          </h2>
          <p className="text-lg text-pretty text-gray-600 dark:text-white/70">
            Experience dating reimagined with cutting-edge technology and genuine human connection
          </p>
        </motion.div>

        {/* Cards flanking the centrepiece */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)_minmax(0,1fr)] lg:gap-10">
          <motion.ul {...columnProps} className={`order-2 lg:order-1 ${columnProps.className}`}>
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} side="left" />
            ))}
          </motion.ul>

          {/* Centrepiece */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
          >
            <div className="relative aspect-4/5 h-full overflow-hidden rounded-[2rem] ring-1 ring-gray-900/5 lg:aspect-auto lg:min-h-[34rem] dark:ring-white/10">
              <Image
                src="/images/dddddd.jpg"
                alt="A smiling woman in red, posing against a red backdrop"
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.ul {...columnProps} className={`order-3 ${columnProps.className}`}>
            {rightFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} side="right" />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
