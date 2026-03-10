import EnhancedHeroSection from "@/components/hero-section"
import WhyChooseFyndMee from "@/components/why_choose_fynd_mee"
import BeFirstToKnow from "@/components/be_first_to_know"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import BlogPostSection from "@/components/NewsletterSection"
import SimpleChatWidget from "@/components/SimpleChatWidget"
import TestimonialsCarousel from "@/components/Testimonialscarouselminimal"
import GetStartedSection from "@/components/get_in_tourch"

export default function Home() {
  return (
    <main className="w-full min-h-screen transition-colors duration-300">
      <Header />
      <EnhancedHeroSection />
      {/* <GetStartedSection /> */}
      <BeFirstToKnow />
      <WhyChooseFyndMee />
      <BlogPostSection />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
      <SimpleChatWidget />
    </main>
  )
}
