import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ship, Truck, Plane, FileCheck, Warehouse, Package } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-[#0c4b6e]">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#18794E" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Global Logistics <span className="text-[#4ade80]">One-Stop Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            Comprehensive logistics services including sea, land, air, customs clearance, and warehousing to support
            your global trade.
          </p>

          {/* Services - 3 on top, 3 below */}
          <div className="mt-10 flex flex-col items-center">
            <div className="grid grid-cols-3 gap-4 mb-4 w-full max-w-2xl">
              <ServiceCard icon={<Ship className="h-6 w-6" />} title="Sea Freight" link="/services/sea-freight" />
              <ServiceCard
                icon={<Truck className="h-6 w-6" />}
                title="Land Transport"
                link="/services/land-transport"
              />
              <ServiceCard icon={<Plane className="h-6 w-6" />} title="Air Freight" link="/services/air-freight" />
            </div>
            <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
              <ServiceCard
                icon={<FileCheck className="h-6 w-6" />}
                title="Customs Clearance"
                link="/services/customs"
              />
              <ServiceCard icon={<Warehouse className="h-6 w-6" />} title="Warehousing" link="/services/warehousing" />
              <ServiceCard
                icon={<Package className="h-6 w-6" />}
                title="Logistics Solution"
                link="/services/logistics-solution"
              />
            </div>
          </div>

          <div className="mt-10">
            <Button asChild size="lg" className="bg-[#18794E] hover:bg-[#136a44]">
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, link }: { icon: React.ReactNode; title: string; link: string }) {
  return (
    <Link href={link} className="block">
      <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center hover:border-[#18794E]/50 hover:shadow-md transition-all">
        <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-2">
          <div className="text-[#18794E]">{icon}</div>
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </Link>
  )
}
