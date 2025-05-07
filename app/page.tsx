import TopBar from "@/components/top-bar"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import PartnersCarousel from "@/components/partners-carousel"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import Footer from "@/components/footer"
import GetQuoteSection from "@/components/get-quote-section"
import MapClientWrapper from "@/components/map-client-wrapper"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <PartnersCarousel />
        <TestimonialsCarousel />
        <GetQuoteSection darkBackground />
        <MapClientWrapper />
      </main>
      <Footer />
    </div>
  )
}
