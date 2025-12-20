import EnhancedHeroSection from "@/components/hero-section"
import WhyChooseFyndMee from "@/components/why_choose_fynd_mee"
import BeFirstToKnow from "@/components/be_first_to_know"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import BlogPostSection from "@/components/NewsletterSection"

export default function Home() {
  return (
    <main className="w-full min-h-screen transition-colors duration-300">
      <Header />
      <EnhancedHeroSection />
      <BeFirstToKnow />
      <WhyChooseFyndMee />
      <BlogPostSection />
      <CTASection />
      <Footer />
    </main>
  )
}
