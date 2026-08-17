"use client"

import Image from "next/image"
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Heart,
  Lightbulb,
  LoaderCircle,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

const EMAIL_PATTERN = /\S+@\S+\.\S+/

const benefits = [
  { icon: Sparkles, label: "New features" },
  { icon: Lightbulb, label: "Dating advice" },
  { icon: ShieldCheck, label: "Safety updates" },
]

export default function BeFirstToKnow() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = () => {
    if (!email) return

    if (!EMAIL_PATTERN.test(email)) {
      setMessage("Enter a valid email address, such as you@example.com.")
      setIsSuccess(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage("Enter your email address to join the list.")
      setIsSuccess(false)
      return
    }

    if (!EMAIL_PATTERN.test(email)) {
      setMessage("Enter a valid email address, such as you@example.com.")
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert([
          {
            email,
            subscribed_at: new Date().toISOString(),
            source: "Newsletter Section",
          },
        ])
        .select()

      if (error) throw error

      setMessage("You’re on the list. We’ll keep the good stuff coming.")
      setIsSuccess(true)
      setEmail("")

      setTimeout(() => setMessage(""), 5000)
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setMessage("We couldn’t add you right now. Please try again.")
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="relative overflow-hidden bg-[#fff8f5] px-4 py-20 dark:bg-[#0e080a] sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#e94b72]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-[#f2a65a]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#7c1d38]/10 bg-[#2a0d16] shadow-[0_32px_90px_-36px_rgba(86,18,39,0.45)] sm:rounded-[2.5rem]">
        <div className="grid lg:min-h-[650px] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(224,66,105,0.26),transparent_42%),radial-gradient(circle_at_100%_100%,rgba(242,166,90,0.12),transparent_38%)]"
            />

            <div className="relative z-10 max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f6dce4] backdrop-blur-sm">
                <Mail aria-hidden="true" className="h-4 w-4 text-[#ff6f94]" />
                The Fynd Mee letter
              </p>

              <h2
                id="newsletter-heading"
                className="mt-7 max-w-[11ch] text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#fff8f5] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Stay close to what&rsquo;s next.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#ead2d9]/80 sm:text-lg sm:leading-8">
                Get thoughtful dating advice, product updates, and a first look
                at the ideas making every Fynd Mee connection feel more human.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Newsletter topics">
                {benefits.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/12 bg-black/10 px-3.5 text-sm font-medium text-[#f3e5e9]"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4 text-[#ff7899]" />
                    {label}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} noValidate className="mt-9 max-w-xl">
                <label htmlFor="newsletter-email" className="text-sm font-semibold text-[#fff8f5]">
                  Email address
                </label>

                <div className="mt-2 flex flex-col gap-3 rounded-2xl bg-[#fff8f5] p-2 shadow-[0_16px_38px_rgba(8,2,4,0.28)] sm:flex-row sm:items-center">
                  <div className="flex min-h-12 min-w-0 flex-1 items-center gap-3 px-3">
                    <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-[#a88992]" />
                    <input
                      id="newsletter-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (message && !isSuccess) setMessage("")
                      }}
                      onBlur={validateEmail}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(message && !isSuccess)}
                      aria-describedby={message ? "newsletter-message" : "newsletter-privacy"}
                      disabled={isLoading}
                      className="h-12 min-w-0 flex-1 bg-transparent text-base text-[#32131d] outline-none placeholder:text-[#9c838b] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[linear-gradient(110deg,#dc315f,#a81742)] px-6 text-sm font-bold text-[#fff] shadow-[0_9px_22px_rgba(171,30,62,0.28)] transition-[transform,filter,box-shadow] duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_28px_rgba(171,30,62,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7f1533] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:min-w-36"
                  >
                    {isLoading ? (
                      <>
                        <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
                        Joining…
                      </>
                    ) : (
                      <>
                        Join the list
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                </div>

                <div className="min-h-14 pt-3">
                  {message ? (
                    <p
                      id="newsletter-message"
                      role={isSuccess ? "status" : "alert"}
                      className={`flex items-start gap-2 text-sm leading-5 ${
                        isSuccess ? "text-[#b9efce]" : "text-[#ffc3cf]"
                      }`}
                    >
                      {isSuccess ? (
                        <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                      ) : (
                        <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                      )}
                      {message}
                    </p>
                  ) : (
                    <p
                      id="newsletter-privacy"
                      className="flex items-center gap-2 text-xs leading-5 text-[#d9bec6]/65"
                    >
                      <ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0" />
                      No noise, no spam. Unsubscribe whenever you like.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden lg:min-h-full">
            <Image
              src="/images/happy-cherry.jpg"
              alt="A smiling woman dressed in red"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[50%_34%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(25,5,12,0.86)_100%)] lg:bg-[linear-gradient(90deg,rgba(42,13,22,0.3)_0%,transparent_30%,transparent_68%,rgba(25,5,12,0.12)_100%)]"
            />

            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-semibold text-[#fff] shadow-lg backdrop-blur-md sm:left-7 sm:top-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6f94] opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff6f94]" />
              </span>
              Fresh from Fynd Mee
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#2a0d16]/70 p-5 shadow-2xl backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 lg:p-6">
              <Heart aria-hidden="true" className="h-5 w-5 fill-[#ff6f94] text-[#ff6f94]" />
              <p
                className="mt-3 max-w-md text-xl leading-snug text-[#fff8f5] sm:text-2xl"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Better connections begin with better conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
