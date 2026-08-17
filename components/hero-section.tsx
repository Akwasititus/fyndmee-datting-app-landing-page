"use client"

import { useRef } from "react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from "framer-motion"

/* ──────────────────────────────────────────────────────────────
   FyndMee — hero

   Direction: editorial, warm, photographic. The imagery is a
   layered set of real photo "prints" rather than a full-bleed
   slideshow; the headline is set in a display serif with a
   hand-drawn underline; the palette is a deep wine canvas so the
   white site header still reads over it.

   Brand: #AB1E3E (cherry) / #D42952 (accent), matching the rest
   of the site's hardcoded arbitrary values.
────────────────────────────────────────────────────────────── */

const SERIF = "var(--font-fraunces), 'Iowan Old Style', Georgia, serif"

/* Real product features, in the app's own wording. */
const FEATURES = [
  "Smart Matching",
  "Verified Profiles",
  "Compatibility Scores",
  "Supa Likes",
  "Profile Boosts",
]

/* Faces for the social-proof cluster. object-position is tuned per
   photo so each circle actually lands on a face. */
const FACES = [
  { src: "/images/4.webp", pos: "45% 30%" },
  { src: "/images/7.webp", pos: "58% 26%" },
  { src: "/images/fyndmee2.webp", pos: "16% 22%" },
  { src: "/images/5.webp", pos: "42% 52%" },
]

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)'/%3E%3C/svg%3E\")"

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.12 } },
}
const rise: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ── Hand-drawn underline. Two passes, slightly out of register,
      which is what makes it read as drawn rather than generated. ── */
function Underline({ animate }: { animate: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 22"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-2 left-0 h-[0.34em] w-full overflow-visible sm:-bottom-3"
    >
      <motion.path
        d="M5 13.5C48 6.2 128 2.8 176 5.1C224 7.4 284 12 315 8.4"
        fill="none"
        stroke="#D42952"
        strokeWidth={4.5}
        strokeLinecap="round"
        initial={animate ? { pathLength: 0 } : false}
        animate={animate ? { pathLength: 1 } : undefined}
        transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M18 18.6C66 13.4 148 11 208 12.6C246 13.6 282 15.4 302 14.2"
        fill="none"
        stroke="#AB1E3E"
        strokeWidth={2.4}
        strokeLinecap="round"
        opacity={0.6}
        initial={animate ? { pathLength: 0 } : false}
        animate={animate ? { pathLength: 1 } : undefined}
        transition={{ duration: 0.85, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}

/* ── One photo "print" in the collage. ── */
function Print({
  src,
  alt,
  priority,
  sizes,
  className,
  rotate,
  depth,
  px,
  py,
}: {
  src: string
  alt: string
  priority?: boolean
  sizes: string
  className: string
  rotate: number
  depth: number
  px: MotionValue<number>
  py: MotionValue<number>
}) {
  return (
    <motion.figure
      variants={{
        hidden: { opacity: 0, y: 34, scale: 0.94, rotate: rotate * 2.2 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate,
          transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      style={{ x: px, y: py, willChange: "transform" }}
      className={className}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-[18px] ring-1 ring-white/12"
        style={{
          boxShadow: `0 ${depth * 8}px ${depth * 26}px -${depth * 6}px rgba(10,2,6,0.75)`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
        {/* warms the photo into the wine canvas instead of sitting on top of it */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(200deg, rgba(171,30,62,0.16) 0%, transparent 42%, rgba(21,10,15,0.42) 100%)",
          }}
        />
      </div>
    </motion.figure>
  )
}

export default function EnhancedHeroSection() {
  const reduce = useReducedMotion()
  const animate = !reduce
  const collageRef = useRef<HTMLDivElement>(null)

  /* Pointer parallax — small enough to feel like depth, not like a toy. */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.7 })
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.7 })

  const bigX = useTransform(sx, [-0.5, 0.5], [10, -10])
  const bigY = useTransform(sy, [-0.5, 0.5], [7, -7])
  const midX = useTransform(sx, [-0.5, 0.5], [-16, 16])
  const midY = useTransform(sy, [-0.5, 0.5], [-11, 11])
  const smallX = useTransform(sx, [-0.5, 0.5], [18, -18])
  const smallY = useTransform(sy, [-0.5, 0.5], [13, -13])

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return
    const r = collageRef.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  const resetPointer = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-[#150a0f]">
      {/* ══════════ CANVAS ══════════ */}

      {/* warm light falling from the upper right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 8%, rgba(212,41,82,0.30) 0%, rgba(171,30,62,0.12) 34%, transparent 68%), radial-gradient(90% 70% at 4% 88%, rgba(255,133,163,0.14) 0%, transparent 60%), linear-gradient(180deg, #1c0c13 0%, #150a0f 46%, #120809 100%)",
        }}
      />

      {/* film grain — kills the flat-gradient look */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.055] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: "220px 220px" }}
      />

      {/* vignette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 42%, transparent 40%, rgba(8,3,5,0.55) 100%)",
        }}
      />

      {/* ══════════ CONTENT ══════════ */}
      <motion.div
        variants={animate ? stack : undefined}
        initial={animate ? "hidden" : false}
        animate={animate ? "show" : undefined}
        className="relative z-10 mx-auto grid w-full max-w-[1240px] flex-1 grid-cols-1 items-center gap-14 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-14 lg:pb-24 lg:pt-32 xl:gap-20"
      >
        {/* ───────── Left: the pitch ───────── */}
        <div className="max-w-xl">
          {/* eyebrow */}
          {/* <motion.p
            variants={animate ? rise : undefined}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.045] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#f0d6dc] backdrop-blur-sm sm:text-xs"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D42952] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#D42952]" />
            </span>
            Dating · Friendship · Networking
          </motion.p> */}

          {/* headline */}
          <motion.h1
            variants={animate ? rise : undefined}
            className="mt-7 text-[#FDF3EF]"
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(2.6rem, 6.2vw, 4.6rem)",
              lineHeight: 1.03,
              letterSpacing: "-0.022em",
            }}
          >
            Find someone worth
            <br />
            <span className="relative inline-block">
              <em style={{ fontStyle: "italic", fontWeight: 500 }}>
                staying up late
              </em>
              <Underline animate={animate} />
            </span>{" "}
            for.
          </motion.h1>

          {/* sub-copy */}
          <motion.p
            variants={animate ? rise : undefined}
            className="mt-8 max-w-[30rem] text-[15px] leading-[1.75] text-[#e3c9d0]/85 sm:text-[16.5px]"
          >
            FyndMee matches you on the things that actually decide it your
            interests.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={animate ? rise : undefined}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#download"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FDF3EF] px-6 py-3.5 text-[15px] font-semibold text-[#25101A] shadow-[0_10px_30px_-8px_rgba(253,243,239,0.35)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_38px_-10px_rgba(253,243,239,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#D42952] active:translate-y-0 cursor-pointer"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.564 12.043c-.03-3.019 2.473-4.465 2.584-4.534-1.411-2.062-3.6-2.345-4.373-2.377-1.864-.189-3.637 1.111-4.583 1.111-.946 0-2.404-1.087-3.955-1.057-2.03.03-3.935 1.181-4.986 3.003-2.125 3.681-.541 9.106 1.524 12.087 1.006 1.44 2.2 3.05 3.756 2.992 1.526-.057 2.094-.963 3.932-.963 1.837 0 2.35.963 3.953.933 1.633-.027 2.668-1.456 3.664-2.899 1.152-1.679 1.63-3.302 1.656-3.383-.036-.018-3.176-1.216-3.172-4.914zM15.236 4.372c.825-1.002 1.38-2.387 1.227-3.772-1.188.047-2.62.791-3.475 1.791-.765.887-1.437 2.304-1.258 3.659 1.331.104 2.681-.676 3.506-1.678z" />
              </svg>
              Get it on iPhone
            </a>

            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/22 bg-white/[0.05] px-6 py-3.5 text-[15px] font-semibold text-[#FDF3EF] backdrop-blur-sm transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#D42952] active:translate-y-0 cursor-pointer"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.24-.84-.76-.84-1.35Z" fill="#00D7FF" />
                <path d="M16.81 10.09 5.16 2.15c-.41-.23-.91-.23-1.32 0L13.69 12l3.12-1.91Z" fill="#FFCE00" />
                <path d="m13.69 12 3.12 1.91L5.16 21.85c-.41.23-.91.23-1.32 0L13.69 12Z" fill="#FF5C00" />
                <path d="m20.16 11.85-3.35-1.76L13.69 12l3.12 1.91 3.35-1.76c.65-.37.84-.91.84-.15 0-.24-.19.22-.84-.15Z" fill="#00B050" />
              </svg>
              Get it on Android
            </a>
          </motion.div>

          {/* social proof + scan-to-download */}
          <motion.div
            variants={animate ? rise : undefined}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-2.5">
                {FACES.map((f) => (
                  <span
                    key={f.src}
                    className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#1c0c13]"
                  >
                    <Image
                      src={f.src}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                      style={{ objectPosition: f.pos }}
                    />
                  </span>
                ))}
              </div>
              <p className="text-[13.5px] leading-snug text-[#e3c9d0]/75">
                <span className="font-semibold text-[#FDF3EF]">12,000+</span>{" "}
                people already
                <br className="hidden sm:block" /> looking for someone on
                FyndMee
              </p>
            </div>

            {/* a small physical detail — scan the code, it's a real link */}
            <div className="hidden items-center gap-3 xl:flex">
              <div className="rounded-lg bg-[#FDF3EF] p-1.5 shadow-lg shadow-black/40 [transform:rotate(-3.5deg)]">
                <QRCodeSVG
                  value="https://www.fyndmee.app"
                  size={54}
                  bgColor="#FDF3EF"
                  fgColor="#25101A"
                  level="M"
                />
              </div>
              <p
                className="max-w-[7.5rem] text-[13px] leading-snug text-[#e3c9d0]/60"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                scan it — the app is free
              </p>
            </div>
          </motion.div>
        </div>

        {/* ───────── Right: the photo collage ───────── */}
        <div
          ref={collageRef}
          onPointerMove={handlePointer}
          onPointerLeave={resetPointer}
          className="relative mx-auto aspect-[56/62] w-full max-w-[380px] sm:max-w-[440px] lg:mx-0 lg:max-w-[560px]"
        >
          {/* soft bloom behind the prints */}
          <div
            aria-hidden
            className="absolute inset-[-14%] -z-10 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(212,41,82,0.34), transparent 72%)",
            }}
          />

          <Print
            src="/images/fyndmee4.webp"
            alt="A couple walking together on an autumn afternoon"
            sizes="(max-width: 1024px) 34vw, 200px"
            className="absolute left-[6%] top-[2%] z-0 h-[33%] w-[36%]"
            rotate={-9}
            depth={1}
            px={smallX}
            py={smallY}
          />

          <Print
            src="/images/fyndmee3.webp"
            alt="A man proposing to his partner in a park"
            priority
            sizes="(max-width: 1024px) 62vw, 350px"
            className="absolute right-0 top-[2%] z-10 h-[75%] w-[62%]"
            rotate={2.2}
            depth={2}
            px={bigX}
            py={bigY}
          />

          <Print
            src="/images/5.webp"
            alt="A couple lying side by side, laughing"
            sizes="(max-width: 1024px) 54vw, 300px"
            className="absolute bottom-0 left-0 z-20 h-[61%] w-[54%]"
            rotate={-4.5}
            depth={3}
            px={midX}
            py={midY}
          />

          {/* product hint: compatibility score */}
          <motion.div
            variants={
              animate
                ? {
                    hidden: { opacity: 0, scale: 0.86, y: -8 },
                    show: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { delay: 0.95, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    },
                  }
                : undefined
            }
            className="absolute right-[3%] top-[10%] z-30 rounded-2xl border border-white/18 bg-[#1c0c13]/70 px-3.5 py-2.5 backdrop-blur-md"
          >
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#e3c9d0]/65">
              Compatibility
            </p>
            <p
              className="mt-0.5 text-2xl leading-none text-[#FDF3EF]"
              style={{ fontFamily: SERIF, fontWeight: 500 }}
            >
              94<span className="text-base text-[#D42952]">%</span>
            </p>
          </motion.div>

          {/* product hint: it's a match */}
          <motion.div
            variants={
              animate
                ? {
                    hidden: { opacity: 0, scale: 0.86, y: 10 },
                    show: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { delay: 1.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    },
                  }
                : undefined
            }
            className="absolute left-[41%] top-[50%] z-30 flex items-center gap-2.5 rounded-full border border-white/20 bg-[#1c0c13]/75 py-2 pl-2 pr-4 shadow-xl shadow-black/50 backdrop-blur-md [transform:rotate(-2deg)]"
          >
            <span className="flex -space-x-2">
              {FACES.slice(0, 2).map((f) => (
                <span
                  key={f.src}
                  className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-[#1c0c13]"
                >
                  <Image
                    src={f.src}
                    alt=""
                    fill
                    sizes="28px"
                    className="object-cover"
                    style={{ objectPosition: f.pos }}
                  />
                </span>
              ))}
            </span>
            <span className="whitespace-nowrap text-[12.5px] font-semibold text-[#FDF3EF]">
              It&rsquo;s a match
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ══════════ FEATURE RULE ══════════ */}
      <motion.div
        initial={animate ? { opacity: 0 } : false}
        animate={animate ? { opacity: 1 } : undefined}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 border-t border-white/[0.08]"
      >
        <ul className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 py-5 sm:px-8 lg:justify-start lg:gap-x-10">
          {FEATURES.map((f) => (
            <li
              key={f}
              className="text-[10.5px] font-medium uppercase tracking-[0.19em] text-[#e3c9d0]/45 sm:text-[11px]"
            >
              {f}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
