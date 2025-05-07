import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"
import { Check } from "lucide-react"

export default function AirFreightPage() {
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
              backgroundImage: `url('/images/services/air-freight-ship.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Time-Critical Global Air Freight</h1>
              <p className="mt-6 text-lg text-gray-300">Fast, secure, and trackable air logistics — globally.</p>
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
                  For urgent cargo, Linheim Logistik provides dedicated air freight with priority handling. We offer
                  airport-to-airport or door-to-door delivery with customs clearance, real-time tracking, and global
                  airline partnerships.
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  When time is critical and sea freight isn't fast enough, our air freight solutions ensure your cargo
                  reaches its destination quickly and securely, with complete visibility throughout the journey.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/services/air-freight-ship.png"
                  alt="Airplane flying over cargo ship, illustrating the speed advantage of air freight"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Speed Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-semibold mb-4">Speed & Efficiency</h3>
                <p className="text-gray-600">
                  Fastest transit times for your time-sensitive cargo. We prioritize your shipments to ensure they reach
                  their destination as quickly as possible.
                </p>
              </div>

              {/* Security Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-semibold mb-4">Enhanced Security</h3>
                <p className="text-gray-600">
                  Strict handling protocols ensure your cargo's safety. We maintain the highest security standards
                  throughout the entire shipping process.
                </p>
              </div>

              {/* Tracking Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-semibold mb-4">Real-time Tracking</h3>
                <p className="text-gray-600">
                  Monitor your shipment at every stage. Our advanced tracking systems provide complete visibility from
                  pickup to delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">9-Step Process</h2>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <div className="flex min-w-max md:min-w-0 md:grid md:grid-cols-9 gap-4">
                {[
                  { step: 1, title: "Booking & Cargo Pre-check" },
                  { step: 2, title: "Cargo Collection" },
                  { step: 3, title: "Export Documentation" },
                  { step: 4, title: "Export Customs Clearance" },
                  { step: 5, title: "Airport Handling" },
                  { step: 6, title: "Air Transport & Tracking" },
                  { step: 7, title: "Arrival & Import Handling" },
                  { step: 8, title: "Import Customs Clearance" },
                  { step: 9, title: "Delivery to Consignee" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-gray-100 w-40 md:w-auto"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#18794E] text-white flex items-center justify-center mb-3">
                      {item.step}
                    </div>
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Partnerships with leading airlines",
                  "Time-critical delivery solutions",
                  "Airport-to-door capabilities",
                  "Real-time shipment tracking",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Ship with Speed and Precision</h2>
              <p className="mt-4 text-lg text-white/90">
                Get a customized air freight solution for your time-critical shipments.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/contact">Get Air Freight Quote</Link>
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
