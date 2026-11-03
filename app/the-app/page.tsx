"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  X,
  Heart,
  MessageCircle,
  ShieldCheck,
  Video,
} from "lucide-react"

const screens = [
  {
    title: "A more thoughtful hello",
    description: "Start your next connection with a warm welcome.",
    src: "/theApp/App%20Preview%20-%20Android%201.png",
    alt: "Fynd Mee welcome screen",
    icon: "Heart",
  },
  {
    title: "Real people, real profiles",
    description: "Get to know a community with verified profiles.",
    src: "/theApp/App%20Preview%20-%20Android%202.png",
    alt: "Fynd Mee verified profile screen",
    icon: ShieldCheck,
  },
  {
    title: "Discover someone new",
    description: "Explore profiles and find someone who catches your eye.",
    src: "/theApp/App%20Preview%20-%20Android%203.png",
    alt: "Fynd Mee profile discovery screen",
    icon: Heart,
  },
  {
    title: "Let the conversation flow",
    description: "Get past the first hello and into a real conversation.",
    src: "/theApp/App%20Preview%20-%20Android%204.png",
    alt: "Fynd Mee chat screen",
    icon: MessageCircle,
  },
  {
    title: "See where it goes",
    description: "Make it face to face with an in-app video call.",
    src: "/theApp/App%20Preview%20-%20Android%205.png",
    alt: "Fynd Mee video call screen",
    icon: Video,
  },
]

function ScreenPreview({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`relative isolate aspect-[0.58] overflow-hidden rounded-[1.6rem] bg-[#f1e4e2] shadow-[0_24px_55px_-28px_rgba(75,25,38,0.36)] ring-1 ring-black/[0.06] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1080}
        height={1920}
        unoptimized
        sizes="(max-width: 640px) 75vw, (max-width: 1024px) 36vw, 300px"
        className="absolute left-[-30%] top-[-48%] h-auto w-[160%] max-w-none"
      />
    </div>
  )
}

export default function TheAppPage() {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)

  useEffect(() => {
    if (previewIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewIndex(null)
      } else if (event.key === "ArrowRight") {
        setPreviewIndex((current) =>
          current === null ? null : (current + 1) % screens.length,
        )
      } else if (event.key === "ArrowLeft") {
        setPreviewIndex((current) =>
          current === null
            ? null
            : (current - 1 + screens.length) % screens.length,
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [previewIndex])

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf5] text-[#24171b] dark:bg-[#100b0e] dark:text-[#fff8f5]">
      <header className="relative z-10 border-b border-[#eadbd7] bg-[#fffaf5]/90 dark:border-white/10 dark:bg-[#100b0e]/90">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[#6a4e56] transition-colors hover:text-[#ab1e3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:text-white/75 dark:hover:text-white dark:focus-visible:ring-offset-[#100b0e]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back home
          </Link>
          <Link
            href="/"
            aria-label="Fynd Mee home"
            className="flex min-h-11 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#100b0e]"
          >
            <Image
              src="/images/logo-cherry.svg"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8"
            />
            <span className="text-base font-bold tracking-tight">Fynd Mee</span>
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#3b1022] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-44 -top-48 h-[38rem] w-[38rem] rounded-full bg-[#ab1e3e]/35 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[650px] lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-12 lg:py-10">
          <div className="relative z-10 max-w-2xl">
            <h1 className="mt-5 text-balance text-[clamp(3.25rem,7vw,6.25rem)] text-[#ffffff] font-bold leading-[0.98] tracking-[-0.065em]">
              More than a
              <span className="block font-medium italic text-[#ffb6c6]">
                first impression.
              </span>
            </h1>
            
            
          </div>

          <div className="relative mx-auto flex min-h-[420px] w-full max-w-[580px] items-center justify-center sm:min-h-[530px] lg:min-h-[610px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3c4c0]/55 blur-2xl dark:bg-[#ab1e3e]/15 sm:h-[420px] sm:w-[420px]"
            />
            <div className="absolute left-[6%] top-[14%] z-10 w-[39%] max-w-[220px] rotate-[-9deg] sm:left-[10%] sm:top-[10%] sm:w-[37%]">
              <button
                type="button"
                onClick={() => setPreviewIndex(1)}
                aria-label={`Preview screenshot: ${screens[1].title}`}
                className="block w-full rounded-[1.3rem] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                <ScreenPreview
                  src={screens[1].src}
                  alt={screens[1].alt}
                  className="rounded-[1.3rem] shadow-[0_25px_55px_-25px_rgba(75,25,38,0.38)]"
                />
              </button>
            </div>
            <div className="absolute right-[5%] top-[5%] z-20 w-[49%] max-w-[285px] rotate-[5deg] sm:right-[10%] sm:top-[4%] sm:w-[47%]">
              <button
                type="button"
                onClick={() => setPreviewIndex(2)}
                aria-label={`Preview screenshot: ${screens[2].title}`}
                className="block w-full rounded-[1.5rem] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                <ScreenPreview
                  src={screens[2].src}
                  alt={screens[2].alt}
                  className="rounded-[1.5rem]"
                />
              </button>
            </div>
            <div className="absolute bottom-[2%] left-[15%] z-30 w-[46%] max-w-[255px] rotate-[-3deg] sm:bottom-[-2%] sm:left-[21%] sm:w-[43%]">
              <button
                type="button"
                onClick={() => setPreviewIndex(3)}
                aria-label={`Preview screenshot: ${screens[3].title}`}
                className="block w-full rounded-[1.5rem] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                <ScreenPreview
                  src={screens[3].src}
                  alt={screens[3].alt}
                  className="rounded-[1.5rem]"
                />
              </button>
            </div>
            <div className="absolute bottom-[8%] right-[2%] z-40 hidden max-w-[190px] rounded-2xl border border-[#eadbd7] bg-white px-4 py-3 text-[#58192b] shadow-[0_15px_40px_rgba(67,20,35,0.13)] sm:block">
               <Image
              src="/images/logo-cherry.svg"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8"
            />
              <p className="text-sm font-bold leading-snug">
                Make room for a real connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="screens"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        aria-labelledby="screens-title"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            
            <h2
              id="screens-title"
              className="mt-4 text-balance text-4xl font-bold tracking-[-0.045em] sm:text-5xl"
            >
              Made for the moments
              <span className="font-serif font-medium italic text-[#ab1e3e] dark:text-[#ff9bb4]">
                {" "}
                that matter.
              </span>
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-[#66545a] dark:text-white/65 sm:pb-1">
            Swipe through a few of the screens that make getting to know
            someone feel more natural.
          </p>
        </div>

        <div
          aria-label="Fynd Mee app screen previews"
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-8 pt-2 [scrollbar-color:#d9b8bd_transparent] [scrollbar-width:thin] sm:mt-14 sm:gap-6"
        >
          {screens.map(({ title, description, src, alt, icon: Icon }, index) => (
            <article
              key={src}
              className="w-[76vw] max-w-[300px] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <button
                type="button"
                onClick={() => setPreviewIndex(index)}
                aria-label={`Preview screenshot: ${title}`}
                className="group block w-full rounded-[1.7rem] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ab1e3e]/40"
              >
                <ScreenPreview
                  src={src}
                  alt={alt}
                  className="aspect-[0.68] rounded-[1.7rem] bg-[#f1e4e2] transition-transform duration-300 group-hover:-translate-y-1"
                />
                <span className="sr-only">Open full-screen preview</span>
              </button>
              <div className="flex items-start gap-3 px-1 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fce6e9] text-[#a41d40] dark:bg-[#6b1c35] dark:text-[#ffd3df]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold tracking-tight">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#66545a] dark:text-white/65">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-1 text-xs text-[#806b71] dark:text-white/50 sm:hidden">
          Swipe to see more screens
        </p>
      </section>

      <section className="bg-[#f8e9e7] px-5 py-16 dark:bg-[#26131b] sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a41d40] dark:text-[#ff9bb4]">
              Ready when you are
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Your next hello could mean something.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-[#66545a] dark:text-white/70">
              Learn more about Fynd Mee and find out how to get started.
            </p>
          </div>
          <Link
            href="/download"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#ab1e3e] px-7 text-base font-bold text-[#ffffff] shadow-[0_12px_35px_rgba(171,30,62,0.18)] transition hover:-translate-y-0.5 hover:bg-[#851831] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2"
          >
            Explore Fynd Mee
            <ArrowRight aria-hidden="true"  className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#eadbd7] px-5 py-8 dark:border-white/10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-[#806b71] dark:text-white/55 sm:flex-row">
          <span>Fynd Mee — make room for a real connection.</span>
          <Link
            href="/"
            className="font-semibold text-[#ab1e3e] transition-colors hover:text-[#80152e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] dark:text-[#ff9bb4] dark:hover:text-white"
          >
            Discover Fynd Mee
          </Link>
        </div>
      </footer>

      <AnimatePresence>
        {previewIndex !== null && (
          <motion.div
            key="screenshot-preview"
            role="dialog"
            aria-modal="true"
            aria-label="App screenshot preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setPreviewIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#16090e]/95 p-4 backdrop-blur-md sm:p-8"
          >
            <button
              type="button"
              onClick={() => setPreviewIndex(null)}
              aria-label="Close screenshot preview"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                setPreviewIndex(
                  (previewIndex - 1 + screens.length) % screens.length,
                )
              }}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-8 sm:h-12 sm:w-12"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div
              className="flex max-h-full w-full max-w-5xl flex-col items-center justify-center gap-4 sm:gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={screens[previewIndex].src}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="flex min-h-0 flex-1 flex-col items-center"
                >
                  <Image
                    src={screens[previewIndex].src}
                    alt={screens[previewIndex].alt}
                    width={1080}
                    height={1920}
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 90vw, 520px"
                    className="max-h-[72dvh] w-auto max-w-[82vw] rounded-2xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.6)] sm:max-h-[74dvh]"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-white/55">
                      {String(previewIndex + 1).padStart(2, "0")} /{" "}
                      {String(screens.length).padStart(2, "0")}
                    </p>
                    <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">
                      {screens[previewIndex].title}
                    </h2>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div
                aria-label="Select screenshot"
                className="flex max-w-full items-center justify-center gap-2 overflow-x-auto px-2 py-1"
              >
                {screens.map((screen, index) => (
                  <button
                    key={screen.src}
                    type="button"
                    onClick={() => setPreviewIndex(index)}
                    aria-label={`Show screenshot ${index + 1}: ${screen.title}`}
                    aria-pressed={previewIndex === index}
                    className={`h-14 w-10 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-11 ${
                      previewIndex === index
                        ? "border-white opacity-100"
                        : "border-white/20 opacity-55 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={screen.src}
                      alt=""
                      width={1080}
                      height={1920}
                      unoptimized
                      className="h-full w-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                setPreviewIndex((previewIndex + 1) % screens.length)
              }}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8 sm:h-12 sm:w-12"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
