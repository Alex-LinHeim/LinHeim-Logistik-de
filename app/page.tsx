import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesGrid from "@/components/services-grid"
import WorkflowInfographic from "@/components/workflow-infographic"
import PartnersCarousel from "@/components/partners-carousel"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import StatisticsSection from "@/components/statistics-section"
import MapClientWrapper from "@/components/map-client-wrapper"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <ServicesGrid />
        <WorkflowInfographic />
        <PartnersCarousel />
        <TestimonialsCarousel />
        <StatisticsSection />
        <MapClientWrapper />
      </main>
      <Footer />
    </div>
  )
}
