import EnhancedHeroSection from "@/components/hero-section"
import WhyChooseFyndMee from "@/components/why_choose_fynd_mee"
import BeFirstToKnow from "@/components/be_first_to_know"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import BlogPostSection from "@/components/NewsletterSection"
import SimpleChatWidget from "@/components/SimpleChatWidget"
import TestimonialsCarousel from "@/components/Testimonialscarouselminimal"
import StructuredData from "@/components/structured-data"
import {
  mobileApplicationJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo"

export default function Home() {
  return (
    <>
      <StructuredData
        data={[organizationJsonLd, websiteJsonLd, mobileApplicationJsonLd]}
      />
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-white px-4 py-3 text-gray-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="min-h-screen w-full transition-colors duration-300">
        <EnhancedHeroSection />
        <BeFirstToKnow />
        <WhyChooseFyndMee />
        <BlogPostSection />
        <TestimonialsCarousel />
        <CTASection />
      </main>
      <Footer />
      <SimpleChatWidget />
    </>
  )
}
