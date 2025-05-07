import type React from "react"
import Link from "next/link"
import { Ship, Truck, Plane, FileCheck, Warehouse, Package } from "lucide-react"

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

      {/* Content Container */}
      <div className="container relative z-10 px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline and Subheadline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Global Logistics <span className="text-[#4ade80]">One-Stop Solutions</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            Comprehensive logistics services including sea, land, air, customs clearance, and warehousing to support
            your global trade.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceCard
              icon={<Ship className="h-6 w-6" />}
              title="Sea Freight"
              description="Reliable ocean transport for global import and export needs."
              link="/services/sea-freight"
            />
            <ServiceCard
              icon={<Truck className="h-6 w-6" />}
              title="Land Transport"
              description="Fast and secure truck delivery across Europe and beyond."
              link="/services/land-transport"
            />
            <ServiceCard
              icon={<Plane className="h-6 w-6" />}
              title="Air Freight"
              description="Express air cargo solutions with global reach."
              link="/services/air-freight"
            />
            <ServiceCard
              icon={<FileCheck className="h-6 w-6" />}
              title="Customs Clearance"
              description="Hassle-free customs handling with expert compliance."
              link="/services/customs"
            />
            <ServiceCard
              icon={<Warehouse className="h-6 w-6" />}
              title="Warehousing"
              description="Secure storage and smart inventory management."
              link="/services/warehousing"
            />
            <ServiceCard
              icon={<Package className="h-6 w-6" />}
              title="Logistics Solution"
              description="Tailored end-to-end logistics services for every business."
              link="/services/logistics-solution"
            />
          </div>

          {/* Divider */}
          <div className="mt-16 max-w-xs mx-auto">
            <div className="h-px bg-white/20"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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

function ServiceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Link href={link} className="block">
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 flex flex-col items-center text-center hover:bg-white/15 transition-all h-full">
        <div className="h-12 w-12 rounded-full bg-[#18794E] flex items-center justify-center mb-4">
          <div className="text-white">{icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </Link>
  )
}
