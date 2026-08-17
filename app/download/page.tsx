"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"

function AppleIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3.61 1.81 13.79 12 3.61 22.19A1 1 0 0 1 3 21.27V2.73a1 1 0 0 1 .61-.92Zm11.6 10.9 2.49 2.49L6.29 21.8l8.92-9.09Zm3.2-3.2 2.1 1.21a1.47 1.47 0 0 1 0 2.56l-2.1 1.21L15.91 12l2.5-2.49ZM6.29 2.2 17.7 8.8l-2.49 2.49L6.29 2.2Z" />
    </svg>
  )
}

export default function DownloadPage() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
  })

  return (
    <main className="min-h-screen bg-white text-[#211b1d] transition-colors duration-300 dark:bg-[#0b090a] dark:text-white">
      <header>
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[#5f5558] transition-colors hover:text-[#ab1e3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-offset-[#0d0b0c]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back home
          </Link>

          <Link href="/" aria-label="Fynd Mee home" className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0d0b0c]">
            <Image src="/images/logo-cherry.svg" alt="" width={34} height={34} className="h-8 w-8" />
            <span className="text-base font-bold">Fynd Mee</span>
          </Link>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-10 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:gap-24 lg:py-12">
        <div className="max-w-[590px]">
          <motion.p {...reveal()} className="mb-5 text-sm font-semibold text-[#ab1e3e] dark:text-[#ef829b]">
            Available on iOS and Android
          </motion.p>

          <motion.h1 {...reveal(0.05)} className="text-balance text-5xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-[4.5rem]">
            Meet new people today.
          </motion.h1>

          <motion.p {...reveal(0.1)} className="mt-6 max-w-lg text-lg leading-8 text-[#675d60] dark:text-white/65">
            Find people nearby, start a conversation, and see where it goes. Fynd Mee makes meeting someone new feel simple.
          </motion.p>

          <motion.div {...reveal(0.15)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Fynd Mee on the App Store (opens in a new tab)"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-xl bg-[#ab1e3e] px-6 text-white transition-colors duration-200 hover:bg-[#8e1834] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:bg-white dark:text-[#171315] dark:hover:bg-[#f4dce2] dark:focus-visible:ring-offset-[#0d0b0c]"
            >
              <AppleIcon />
              <span className="text-left leading-none">
                <span className="block text-[10px] font-medium uppercase tracking-[0.12em] opacity-70">Download on the</span>
                <span className="mt-1 block text-lg font-semibold">App Store</span>
              </span>
            </a>
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Fynd Mee on Google Play (opens in a new tab)"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-black/15 bg-transparent px-6 text-[#211b1d] transition-colors hover:border-[#ab1e3e] hover:text-[#ab1e3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:border-white/20 dark:text-white dark:hover:border-white dark:hover:text-white dark:focus-visible:ring-offset-[#0d0b0c]"
            >
              <PlayIcon />
              <span className="text-left leading-none">
                <span className="block text-[10px] font-medium uppercase tracking-[0.12em] opacity-70">Get it on</span>
                <span className="mt-1 block text-lg font-semibold">Google Play</span>
              </span>
            </a>
          </motion.div>

          <motion.ul {...reveal(0.2)} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#675d60] dark:text-white/60">
            {["Free to join", "Private and secure", "Local connections"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check aria-hidden="true" className="h-4 w-4 text-[#ab1e3e] dark:text-[#ef829b]" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div {...reveal(0.08)} className="relative mx-auto flex w-full max-w-[420px] justify-center lg:ml-auto">
          <div aria-hidden="true" className="absolute bottom-3 h-12 w-3/4 rounded-full bg-black/15 blur-2xl dark:bg-black/60" />
          <div className="relative aspect-[490/1008] w-full max-w-[340px]">
            <Image
              src="/images/download-page.png"
              alt="Fynd Mee app discovery screen showing a nearby profile"
              fill
              priority
              sizes="(max-width: 1024px) 78vw, 340px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </section>
    </main>
  )
}
