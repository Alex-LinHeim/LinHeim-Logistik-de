import ServiceCarousel from "./service-carousel-de"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container - Switched layout direction */}
      <div className="container relative z-10 px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Main Content (was on right) */}
          <div className="order-1">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl mb-8">
                Globale Logistik <span className="text-[#4ade80]">Komplettlösungen</span>
              </h1>
              <p className="text-2xl text-gray-200 max-w-3xl lg:max-w-none mx-auto lg:mx-0 mb-8 leading-relaxed">
                Umfassende Logistikdienstleistungen einschließlich See-, Land-, Luftfracht, Zollabwicklung und
                Lagerhaltung zur Unterstützung Ihres globalen Handels.
              </p>
            </div>
          </div>

          {/* Right Side - Service Carousel (was on left) */}
          <div className="order-2">
            <ServiceCarousel />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-70"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
