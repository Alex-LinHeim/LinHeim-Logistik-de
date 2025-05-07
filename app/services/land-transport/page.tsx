import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Truck } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"

export default function LandTransportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('/images/services/land-transport-trucks.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Pan-European Road Transport</h1>
              <p className="mt-6 text-lg text-gray-300">
                Efficient, reliable, and flexible road freight solutions across Europe.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-gray-600">
                  Linheim Logistik offers comprehensive road transport services throughout Europe. Our fleet of modern
                  vehicles and experienced drivers ensure your cargo reaches its destination safely and on time.
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  We specialize in both full truckload (FTL) and less than truckload (LTL) shipments, providing flexible
                  solutions for businesses of all sizes, with reliable transit times and real-time tracking.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/services/land-transport-trucks.png"
                  alt="Fleet of trucks transporting goods on a European highway"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Service Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* FTL Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">FTL – Full Truckload</h3>
                <p className="text-gray-600 mb-6">
                  Dedicated vehicle for your shipment. Ideal for large volumes or time-sensitive cargo.
                </p>
                <ul className="space-y-3">
                  {[
                    "Direct point-to-point delivery",
                    "Faster transit times",
                    "Reduced handling and risk",
                    "Suitable for high-value or sensitive goods",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LTL Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">LTL – Less than Truckload</h3>
                <p className="text-gray-600 mb-6">
                  Cost-effective solution for smaller shipments. Share vehicle space with other cargo.
                </p>
                <ul className="space-y-3">
                  {[
                    "Economical for smaller volumes",
                    "Regular scheduled departures",
                    "Extensive network coverage",
                    "Pay only for the space you need",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section - Enhanced */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Modern Fleet</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Standard Trucks",
                  capacity: "Up to 24 tons",
                  volume: "Up to 90 m³",
                  features: ["Curtain-sided", "Box trucks", "Temperature-controlled", "Euro 6 emission standard"],
                },
                {
                  title: "Specialized Vehicles",
                  capacity: "Various capacities",
                  volume: "Custom solutions",
                  features: ["Flatbeds", "Low loaders", "MEGA trailers", "Double-deckers", "Oversized cargo transport"],
                },
                {
                  title: "Express Vans",
                  capacity: "Up to 1.5 tons",
                  volume: "Up to 20 m³",
                  features: [
                    "Fast delivery",
                    "Ideal for urgent shipments",
                    "Direct service",
                    "Same-day delivery options",
                  ],
                },
              ].map((vehicle, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-[#18794E]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{vehicle.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">Capacity: {vehicle.capacity}</p>
                  <p className="text-sm text-gray-500 mb-4">Volume: {vehicle.volume}</p>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-[#18794E] mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - NEW */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive Road Transport Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4">Beyond Standard Transport</h3>
                <p className="text-gray-600 mb-6">
                  Our road transport services extend beyond basic shipping to provide complete logistics solutions:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Express & Time-Critical Delivery</span> – Guaranteed delivery
                      windows for urgent shipments with priority handling.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Groupage Services</span> – Consolidated shipments for optimal
                      efficiency and cost savings on smaller loads.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Specialized Transport</span> – Solutions for oversized, hazardous,
                      or temperature-sensitive goods requiring special handling.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/services/land-transport-trucks.png"
                  alt="Fleet of trucks providing reliable road transport services across Europe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Ready to Ship Across Europe?</h2>
              <p className="mt-4 text-lg text-white/90">
                Contact us for competitive rates and reliable road transport solutions.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
