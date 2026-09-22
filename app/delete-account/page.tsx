"use client"

import { FormEvent, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Database,
  LoaderCircle,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Trash2,
} from "lucide-react"

import { supabase } from "@/lib/supabase"

const supportEmail = "info@fyndmee.app"
const supportMailto = `mailto:${supportEmail}?subject=${encodeURIComponent(
  "Fynd Mee account deletion request",
)}`

type SubmissionStatus = "idle" | "submitting" | "success" | "error"

function isValidAccountIdentifier(value: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneDigits = value.replace(/\D/g, "")

  return emailPattern.test(value) || (phoneDigits.length >= 7 && phoneDigits.length <= 15)
}

export default function DeleteAccountPage() {
  const identifierRef = useRef<HTMLInputElement>(null)
  const [identifier, setIdentifier] = useState("")
  const [details, setDetails] = useState("")
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<SubmissionStatus>("idle")
  const [feedback, setFeedback] = useState("")
  const hasIdentifierError =
    status === "error" && !isValidAccountIdentifier(identifier.trim())

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const accountIdentifier = identifier.trim()

    if (!isValidAccountIdentifier(accountIdentifier)) {
      setStatus("error")
      setFeedback("Enter a valid email address or phone number linked to your account.")
      identifierRef.current?.focus()
      return
    }

    setStatus("submitting")
    setFeedback("")

    // Bots commonly fill hidden fields. Treat the request as complete without storing it.
    if (website) {
      setStatus("success")
      setFeedback("Your request has been received.")
      return
    }

    const requestDetails = [
      "Account deletion requested through fyndmee.app/delete-account.",
      `Account identifier: ${accountIdentifier}`,
      details.trim() ? `Additional information: ${details.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    try {
      const { error } = await supabase.from("contact-us-website").insert({
        email: accountIdentifier,
        name: "Fynd Mee account holder",
        subject: "Account deletion request",
        content: requestDetails,
        subscribed_at: new Date().toISOString(),
        source: "fyndmee account deletion page",
      })

      if (error) throw error

      setIdentifier("")
      setDetails("")
      setStatus("success")
      setFeedback(
        "Your deletion request has been submitted. Fynd Mee support may contact you to verify that the account belongs to you.",
      )
    } catch (error) {
      console.error("Unable to submit account deletion request:", error)
      setStatus("error")
      setFeedback(
        "We could not submit your request right now. Please email Fynd Mee support using the link below.",
      )
    }
  }

  return (
    <div className="min-h-dvh bg-[#fffafb] text-slate-950 dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black dark:text-white">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-white px-4 py-3 font-bold text-[#AB1E3E] shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#AB1E3E] dark:bg-slate-900"
      >
        Skip to main content
      </a>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#AB1E3E]/8 blur-3xl dark:bg-rose-500/10" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl dark:bg-pink-500/10" />
      </div>

      <header className="relative z-10 border-b border-rose-100/80 bg-white/75 backdrop-blur-md dark:border-white/10 dark:bg-black/25">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            aria-label="Fynd Mee home"
            className="flex min-h-11 items-center gap-2 rounded-lg font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
          >
            <Image
              src="/images/logo-cherry.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-contain"
            />
            <span className="text-xl">Fynd Mee</span>
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-[#AB1E3E] transition-colors hover:bg-rose-50 hover:text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E] dark:hover:bg-white/10 dark:hover:text-rose-300"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main id="main-content" className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-12 max-w-3xl">
         
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Delete your Fynd Mee account
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/70">
            Submit the email address or phone number linked to your Fynd Mee account.
            We will use it to locate your account and process your deletion request.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:gap-12">
          <div className="space-y-8">
            <section
              aria-labelledby="deletion-steps"
              className="rounded-3xl border border-rose-100 bg-white p-6 shadow-[0_20px_60px_-36px_rgba(136,19,55,0.35)] sm:p-8 dark:border-white/10 dark:bg-white/5"
            >
              <h2 id="deletion-steps" className="text-2xl font-bold">
                How to request deletion
              </h2>
              <ol className="mt-6 space-y-5">
                {[
                  "Enter the email address or phone number associated with your Fynd Mee account.",
                  "Submit the form on this page. You may also use the deletion option available inside the Fynd Mee app.",
                  "Watch for a message from Fynd Mee support. We may need to verify that the account belongs to you before deletion.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#AB1E3E] font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 leading-7 text-slate-600 dark:text-white/70">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex gap-3 rounded-2xl bg-amber-50 p-4 text-amber-950 dark:bg-amber-300/10 dark:text-amber-100">
                <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-6">
                  Never include your password, one-time code, payment information, or other
                  sensitive information in this form.
                </p>
              </div>
            </section>

            <div className="grid gap-5 sm:grid-cols-2">
              <section
                aria-labelledby="deleted-data"
                className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <Trash2 aria-hidden="true" className="h-7 w-7 text-[#AB1E3E] dark:text-rose-400" />
                <h2 id="deleted-data" className="mt-4 text-xl font-bold">
                  What will be deleted
                </h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-white/70">
                  Your Fynd Mee account and associated personal data, including profile
                  information, uploaded media, and user-generated content linked to the
                  account, where applicable.
                </p>
              </section>

              <section
                aria-labelledby="retained-data"
                className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <Database aria-hidden="true" className="h-7 w-7 text-[#AB1E3E] dark:text-rose-400" />
                <h2 id="retained-data" className="mt-4 text-xl font-bold">
                  Data that may be retained
                </h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-white/70">
                  Limited information may be retained when required for legal, security,
                  fraud-prevention, dispute-resolution, or regulatory purposes.
                </p>
              </section>
            </div>

            <section
              aria-labelledby="retention-period"
              className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
            >
              <Clock3 aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-[#AB1E3E] dark:text-rose-400" />
              <div>
                <h2 id="retention-period" className="text-lg font-bold">
                  Retention period
                </h2>
                <p className="mt-2 leading-7 text-slate-600 dark:text-white/70">
                  Any limited information that must be retained is kept only for as long as
                  required by applicable law or reasonably necessary for the purposes above.
                  It is then deleted or anonymized. Backup copies may take additional time to
                  expire through normal backup rotation.
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-8">
            <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-[0_24px_80px_-32px_rgba(136,19,55,0.45)] sm:p-8 dark:border-rose-400/20 dark:bg-slate-950/80">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#AB1E3E] dark:bg-rose-400/10 dark:text-rose-300">
                <Mail aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold">Request account deletion</h2>
              <p className="mt-2 leading-7 text-slate-600 dark:text-white/70">
                Fields marked with an asterisk are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
                <div>
                  <label htmlFor="account-identifier" className="block text-sm font-bold">
                    Account email or phone number <span aria-hidden="true">*</span>
                  </label>
                  <p id="identifier-help" className="mt-1 text-sm text-slate-500 dark:text-white/55">
                    Include your country code if you enter a phone number.
                  </p>
                  <input
                    ref={identifierRef}
                    id="account-identifier"
                    name="accountIdentifier"
                    type="text"
                    autoComplete="username"
                    aria-describedby={hasIdentifierError ? "identifier-help identifier-error" : "identifier-help"}
                    aria-invalid={hasIdentifierError}
                    value={identifier}
                    onChange={(event) => {
                      setIdentifier(event.target.value)
                      if (status !== "idle") {
                        setStatus("idle")
                        setFeedback("")
                      }
                    }}
                    placeholder="name@example.com or +233…"
                    maxLength={254}
                    required
                    className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#AB1E3E] focus:ring-4 focus:ring-rose-100 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-rose-400 dark:focus:ring-rose-400/10"
                  />
                  {hasIdentifierError ? (
                    <p id="identifier-error" role="alert" className="mt-2 text-sm font-semibold text-red-700 dark:text-red-300">
                      {feedback}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="request-details" className="block text-sm font-bold">
                    Additional information <span className="font-normal text-slate-500 dark:text-white/50">(optional)</span>
                  </label>
                  <textarea
                    id="request-details"
                    name="details"
                    rows={4}
                    maxLength={1000}
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                    placeholder="For example, tell us if you no longer have access to your account."
                    className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-[#AB1E3E] focus:ring-4 focus:ring-rose-100 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-rose-400 dark:focus:ring-rose-400/10"
                  />
                </div>

                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    maxLength={120}
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#AB1E3E] px-5 font-bold text-white shadow-lg shadow-rose-950/15 transition hover:bg-[#921a35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:ring-offset-slate-950"
                >
                  {status === "submitting" ? (
                    <>
                      <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" />
                      Submitting request…
                    </>
                  ) : (
                    <>
                      <Trash2 aria-hidden="true" className="h-5 w-5" />
                      Submit deletion request
                    </>
                  )}
                </button>

                <div aria-live="polite" aria-atomic="true">
                  {feedback && !hasIdentifierError ? (
                    <div
                      role={status === "error" ? "alert" : "status"}
                      className={`flex gap-3 rounded-xl border p-4 text-sm leading-6 ${
                        status === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-100"
                          : "border-red-200 bg-red-50 text-red-900 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-100"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
                      ) : (
                        <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
                      )}
                      <span>{feedback}</span>
                    </div>
                  ) : null}
                </div>

                {status === "error" ? (
                  <a
                    href={supportMailto}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-slate-300 px-4 text-sm font-bold text-[#AB1E3E] transition hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E] dark:border-white/20 dark:hover:bg-white/10"
                  >
                    Email {supportEmail}
                  </a>
                ) : null}

                <p className="text-xs leading-5 text-slate-500 dark:text-white/50">
                  We use the information submitted here only to locate your account, verify
                  your request, and complete the deletion process.
                </p>
              </form>
            </div>

            <p className="mt-5 text-center text-sm leading-6 text-slate-500 dark:text-white/55">
              Need help? Email{" "}
              <a
                href={supportMailto}
                className="font-bold text-[#AB1E3E] underline decoration-rose-300 underline-offset-4 hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-200"
              >
                {supportEmail}
              </a>
              .
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
