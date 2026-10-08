import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowLeft, ArrowRight, Heart, MessageCircle, ShieldCheck, Sparkles } from "lucide-react"

const serif = { fontFamily: "var(--font-fraunces), Georgia, serif" }

function AppleIcon() {
  return <svg aria-hidden="true" className="h-7 w-7 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
}

function PlayIcon() {
  return <svg aria-hidden="true" className="h-7 w-7 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M3.61 1.81 13.79 12 3.61 22.19A1 1 0 0 1 3 21.27V2.73a1 1 0 0 1 .61-.92Zm11.6 10.9 2.49 2.49L6.29 21.8l8.92-9.09Zm3.2-3.2 2.1 1.21a1.47 1.47 0 0 1 0 2.56l-2.1 1.21L15.91 12l2.5-2.49ZM6.29 2.2 17.7 8.8l-2.49 2.49L6.29 2.2Z" /></svg>
}

const steps = [
  { number: "01", icon: Sparkles, title: "Show up as yourself", description: "Build a profile with your photos, interests, and a little about what makes you, you." },
  { number: "02", icon: Heart, title: "Find your people", description: "Discover profiles and connections shaped around shared interests and preferences." },
  { number: "03", icon: MessageCircle, title: "Start something real", description: "When the feeling is mutual, start a conversation and see where it takes you." },
]

export default function DownloadPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf5] text-[#24171b] dark:bg-[#100b0e] dark:text-[#fff8f5]">
      <header className="relative z-20 border-b border-[#eadbd7] bg-[#fffaf5]/90 dark:border-white/10 dark:bg-[#100b0e]/90">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[#6a4e56] transition-colors hover:text-[#ab1e3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:text-white/75 dark:hover:text-white dark:focus-visible:ring-offset-[#100b0e]">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back home
          </Link>
          <Link href="/" aria-label="Fynd Mee home" className="flex min-h-11 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#100b0e]">
            <Image src="/images/logo-cherry.svg" alt="" width={34} height={34} className="h-8 w-8" />
            <span className="text-base font-bold tracking-tight">Fynd Mee</span>
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#3b1022] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-24 h-96 w-96 rounded-full bg-[#ab1e3e]/35 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#e16b7f]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-0 pt-16 sm:px-8 md:pt-20 lg:min-h-[680px] lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:px-12 lg:pt-10">
          <div className="relative z-10 pb-12 lg:pb-20">
            <h1 className="max-w-[660px] text-balance text-[clamp(3.25rem,7vw,6.25rem)] font-bold leading-[0.98] tracking-[-0.065em]" style={{ color: "#fff" }}>Good things start with a <span className="italic text-[#ffb6c6]" style={serif}>hello.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#f7dce3] sm:text-xl">Your next meaningful connection could be closer than you think. Make a profile, meet people who share your interests, and let the conversation begin.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#get-the-app" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-base font-bold text-[#65142b] shadow-[0_12px_35px_rgba(9,2,5,0.18)] transition-colors hover:bg-[#ffe5eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3b1022]">Find the app <ArrowDown aria-hidden="true" className="h-4 w-4" /></a>
              <Link href="/the-app" style={{ color: "#fff" }} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-5 font-semibold underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Explore how it works <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm text-[#ebc5ce]"><ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0" />For adults 18 and over</p>
          </div>
          <div className="relative mx-auto flex w-full max-w-[590px] items-end justify-center self-end pt-4 lg:pt-10">
            <div aria-hidden="true" className="absolute bottom-16 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.07] sm:h-[510px] sm:w-[510px]" />
            <div aria-hidden="true" className="absolute bottom-24 left-1/2 h-[330px] w-[330px] -translate-x-1/2 rounded-full border border-white/10 sm:h-[400px] sm:w-[400px]" />
            <div className="relative z-10 w-[min(70vw,360px)] translate-y-5 rotate-[-5deg] drop-shadow-[0_30px_45px_rgba(10,2,6,0.5)] sm:w-[365px] lg:w-[390px]">
              <Image src="/images/download-page.png" alt="Preview of Fynd Mee's discovery screen, showing a profile in Accra" width={490} height={1008} priority sizes="(max-width: 640px) 70vw, 390px" className="h-auto w-full" />
            </div>
            <div className="absolute right-0 top-14 z-10 hidden max-w-[175px] rotate-[7deg] rounded-2xl border border-white/25 bg-[#fffaf5] p-4 text-[#58192b] shadow-2xl sm:block lg:right-2 lg:top-24">
              <Heart aria-hidden="true" className="mb-3 h-6 w-6 fill-[#cf345b] text-[#cf345b]" /><p className="text-sm font-bold leading-snug">A little spark can go a long way.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28" aria-labelledby="how-it-starts">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a41d40] dark:text-[#ff9bb4]">The first few steps</p>
          <h2 id="how-it-starts" className="mt-4 text-balance text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Come as you are. <span className="italic text-[#ab1e3e] dark:text-[#ff9bb4]" style={serif}>See who you meet.</span></h2>
          <p className="mt-5 text-lg leading-8 text-[#66545a] dark:text-white/70">A simple start leaves more room for the part that matters: getting to know someone.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <article key={number} className="rounded-[2rem] border border-[#efdedb] bg-white p-7 shadow-[0_15px_40px_rgba(67,20,35,0.04)] dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fce6e9] text-[#a41d40] dark:bg-[#6b1c35] dark:text-[#ffd3df]"><Icon aria-hidden="true" className="h-6 w-6" /></span><span className="text-sm font-bold tracking-[0.12em] text-[#aa8b92] dark:text-white/50">{number}</span></div>
              <h3 className="mt-9 text-xl font-bold tracking-tight">{title}</h3><p className="mt-3 leading-7 text-[#66545a] dark:text-white/70">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="get-the-app" className="scroll-mt-8 bg-[#f8e9e7] px-5 py-20 dark:bg-[#26131b] sm:px-8 lg:px-12 lg:py-28" aria-labelledby="get-the-app-title">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a41d40] dark:text-[#ff9bb4]">Ready when you are</p>
            <h2 id="get-the-app-title" className="mt-4 text-balance text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Your story starts <span className="italic text-[#ab1e3e] dark:text-[#ff9bb4]" style={serif}>here.</span></h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-[#66545a] dark:text-white/70">Open your phone&apos;s app store and look for Fynd Mee. Need help finding the official listing? We&apos;re here to help.</p>
            <Link href="/contact-us" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-[#981b3c] underline underline-offset-4 transition-colors hover:text-[#641127] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#981b3c] dark:text-[#ffb3c5] dark:hover:text-white">Contact the Fynd Mee team <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-[2rem] border border-[#e8d5d2] bg-[#fffaf5] p-5 shadow-[0_30px_70px_rgba(67,20,35,0.1)] dark:border-white/10 dark:bg-[#3b2029] sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" aria-label="Open the Apple App Store in a new tab" style={{ color: "#fff" }} className="group flex min-h-20 items-center gap-4 rounded-2xl bg-[#3b1022] px-5 transition-colors hover:bg-[#741d3b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:bg-[#150b10] dark:hover:bg-[#6b1c35] dark:focus-visible:ring-offset-[#3b2029]"><AppleIcon /><span className="min-w-0 text-left"><span className="block text-xs font-medium text-white/75">Open the</span><span className="block text-lg font-bold">App Store</span></span><ArrowRight aria-hidden="true" className="ml-auto h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" /></a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" aria-label="Open Google Play in a new tab" className="group flex min-h-20 items-center gap-4 rounded-2xl border border-[#d5bcc2] bg-white px-5 text-[#3b1022] transition-colors hover:border-[#ab1e3e] hover:bg-[#fff0f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-2 dark:border-white/25 dark:bg-white dark:hover:bg-[#ffe8ef] dark:focus-visible:ring-offset-[#3b2029]"><PlayIcon /><span className="min-w-0 text-left"><span className="block text-xs font-medium text-[#725d65]">Open</span><span className="block text-lg font-bold">Google Play</span></span><ArrowRight aria-hidden="true" className="ml-auto h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" /></a>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#6d565e] dark:text-white/70">These buttons open the store homepages. Direct Fynd Mee listing links are still being confirmed; if you can&apos;t find the app, <Link href="/contact-us" className="font-semibold underline underline-offset-2 hover:text-[#ab1e3e] dark:hover:text-white">ask us for the official link</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
