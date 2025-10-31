import EnhancedHeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import HowItWorksSection from "@/components/how-it-works-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="w-full">
      <Header/>
      <EnhancedHeroSection />
      <FeaturesSection />
      {/* <HowItWorksSection /> */}
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
