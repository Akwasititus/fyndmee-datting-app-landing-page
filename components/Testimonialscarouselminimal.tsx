"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

interface Testimonial {
  quote: string
  names: string
}

const testimonials: Testimonial[] = [
  {
    quote: "“I matched with Kofi while he was working in Lagos and I was in Accra. What started as random late-night chats turned into daily calls. Eight months later, he flew down to meet my family. Fynd Mee didn’t just give me a match,  it gave me my husband.”",
    names: "— Ama, Ghana",
  },
  {
    quote: "“Being Ghanaian in Toronto can feel isolating sometimes. I filtered by country on Fynd Mee and that’s how I met Efua. Two years later, we’re engaged.”",
    names: "— Michael, Toronto",
  },
  {
    quote: "“I had deleted every other app before trying Fynd Mee. The filtering actually made sense — region, interests, distance. I met Thabo just 6km away from me. We’ve been together for a year now.”",
    names: "— Kayla, Johannesburg",
  },
  {
    quote: "“Before relocating for work, I used Fynd Mee to connect with professionals in my field. It helped me build relationships before I even landed. That made the transition smoother.”",
    names: "— Amara, Toronto",
  },
  {
    quote: "“We both joined Fynd Mee just looking for community. Neither of us expected to meet someone so aligned. Our first date lasted six hours. Now we share an apartment.”",
    names: "Jessica P. and Marcus W.",
  },

  {
    quote: "“I filtered by fitness and outdoor activities on Fynd Mee and matched with someone who lives 4km away. We started with morning runs and ended up becoming real friends.”",
    names: "— Zinhle, Johannesburg",
  },

  {
    quote: "“Fynd Mee made it easy to connect across cultures. I met Awa while traveling in Dakar. What stood out was how genuine everyone felt. No pressure, just real conversations.”",
    names: "— Lucas, Paris",
  },

  {
    quote: "“I signed up on Fynd Mee for networking. Within weeks, I met someone who complemented my skills perfectly. What started as conversations turned into a real business partnership.”",
    names: "— Samuel, Accra",
  },

  {
    quote: "“I moved to a new city and didn’t know anyone. I used the friendship option on Fynd Mee and found two amazing women I now call my sisters.”",
    names: "— Ada, Abuja",
  },
]

export default function TestimonialsCarousel() {
  const [carouselRef, carouselApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    breakpoints: { "(prefers-reduced-motion: reduce)": { duration: 0 } },
  })
  const [firstVisible, setFirstVisible] = useState(0)

  useEffect(() => {
    if (!carouselApi) return
    const updateSelection = () => setFirstVisible(carouselApi.selectedScrollSnap())
    updateSelection()
    carouselApi.on("select", updateSelection)
    carouselApi.on("reInit", updateSelection)
    return () => {
      carouselApi.off("select", updateSelection)
      carouselApi.off("reInit", updateSelection)
    }
  }, [carouselApi])

  return (
    <section className="relative overflow-hidden bg-[#fff8f5] px-4 py-20 text-[#29171d] dark:bg-[#100b0e] dark:text-[#fff8f5] sm:px-6 lg:px-8 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-12 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-800/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 bottom-12 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl dark:bg-pink-800/10" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-[-0.045em] sm:mb-16 sm:text-5xl lg:text-6xl">
          What Our{" "}
          <span className="bg-gradient-to-r from-[#AB1E3E] to-pink-500 bg-clip-text text-transparent">Users Say</span>
        </h2>

        <div ref={carouselRef} className="overflow-hidden" role="region" aria-roledescription="carousel" aria-label="Testimonials">
          <div className="flex items-stretch gap-5">
          {testimonials.map((testimonial, index) => {
            const featured = index === firstVisible
            return (
              <figure
                key={`${testimonial.names}-${index}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
                className={`group relative flex min-w-0 shrink-0 basis-full flex-col overflow-hidden rounded-[1.75rem] border p-7 shadow-[0_16px_45px_rgba(76,20,39,0.06)] transition-[background-color,border-color,box-shadow] duration-300 hover:shadow-[0_24px_50px_rgba(76,20,39,0.12)] sm:basis-[calc((100%-1.25rem)/2)] sm:p-8 lg:min-h-[430px] lg:basis-[calc((100%-2.5rem)/3)] ${featured
                  ? "border-[#6e2540] bg-[#3b1022] text-[#fff8f5] dark:border-[#a65b75]"
                  : "border-[#efdde0] bg-white text-[#39232b] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#f4e9ec]"
                }`}
              >
                <span aria-hidden="true" className={`mb-6 block text-6xl font-bold leading-none ${featured ? "text-[#f6a4b9]" : "text-[#b0254d] dark:text-[#ff9eb6]"}`} style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>“</span>
                <blockquote className="flex-1 text-lg leading-[1.7] sm:text-xl">{testimonial.quote}</blockquote>
                <figcaption className={`mt-8 flex items-center gap-3 border-t pt-5 ${featured ? "border-white/20" : "border-[#f0e2e5] dark:border-white/10"}`}>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${featured ? "bg-white" : "bg-[#fbe8ed] dark:bg-white"}`}>
                    <Image src="/images/logo-cherry.svg" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
                  </span>
                  <span className={`text-sm font-semibold sm:text-base ${featured ? "text-[#fff8f5]" : "text-[#6c4653] dark:text-white/75"}`}>{testimonial.names}</span>
                </figcaption>
              </figure>
            )
          })}
          </div>
        </div>

        <nav className="mt-8 flex items-center justify-center gap-5" aria-label="Testimonial carousel controls">
          <button type="button" onClick={() => carouselApi?.scrollPrev()} aria-label="Previous testimonial" className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e5cbd2] bg-white text-[#7d2440] transition-colors hover:border-[#ab1e3e] hover:bg-[#fff0f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] dark:border-white/20 dark:bg-white/5 dark:text-[#ffd8e2] dark:hover:bg-white/10"><ChevronLeft aria-hidden="true" className="h-5 w-5" /></button>
          <span className="min-w-20 text-center text-sm font-semibold tabular-nums text-[#7d2440] dark:text-[#ffd8e2]">{firstVisible + 1} / {testimonials.length}</span>
          <button type="button" onClick={() => carouselApi?.scrollNext()} aria-label="Next testimonial" className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e5cbd2] bg-white text-[#7d2440] transition-colors hover:border-[#ab1e3e] hover:bg-[#fff0f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] dark:border-white/20 dark:bg-white/5 dark:text-[#ffd8e2] dark:hover:bg-white/10"><ChevronRight aria-hidden="true" className="h-5 w-5" /></button>
        </nav>
        <p className="sr-only" role="status" aria-live="polite">Starting with testimonial {firstVisible + 1} of {testimonials.length}</p>
      </div>
    </section>
  )
}
