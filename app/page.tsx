import EnhancedHeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import HowItWorksSection from "@/components/how-it-works-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import NewsletterSection from "@/components/NewsletterSection"
import BlogPostSection from "@/components/NewsletterSection"

export default function Home() {
  return (
    <main className="w-full min-h-screen transition-colors duration-300">
      <Header/>
      <EnhancedHeroSection />
       <TestimonialsSection />
      <FeaturesSection />
      {/* <HowItWorksSection /> */}
     
     <BlogPostSection />
      {/* <PricingSection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
