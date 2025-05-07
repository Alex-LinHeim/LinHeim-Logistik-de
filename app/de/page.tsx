import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section-de"
import ServicesGrid from "@/components/services-grid-de"
import StatisticsSection from "@/components/statistics-section-de"
import WorkflowInfographic from "@/components/workflow-infographic-de"
import PartnersCarousel from "@/components/partners-carousel"
import TestimonialsCarousel from "@/components/testimonials-carousel-de"
import MapClientWrapper from "@/components/map-client-wrapper"
import Footer from "@/components/footer-de"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* 1. Hero Section with Carousel */}
        <HeroSection />

        {/* 2. 3x2 Grid Service Cards */}
        <ServicesGrid />

        {/* 3. Statistics Section - Moved above Workflow */}
        <StatisticsSection />

        {/* 4. Workflow Section */}
        <WorkflowInfographic />

        {/* 5. Coming-soon platform tracker & other sections */}
        <PartnersCarousel />
        <TestimonialsCarousel />
        <MapClientWrapper />
      </main>
      <Footer />
    </div>
  )
}
