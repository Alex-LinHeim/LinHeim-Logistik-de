import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"

export default function SeaFreightPage() {
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
              backgroundImage: `url('/images/services/sea-freight-ship.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Reliable Global Sea Freight Services</h1>
              <p className="mt-6 text-lg text-gray-300">
                From port to port, and door to door — reliable, visible, and efficient.
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
                  Linheim Logistik provides full sea freight solutions across global trade lanes. Whether FCL or LCL, we
                  ensure containerized shipping, customs handling, and pre-/on-carriage with total visibility.
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  Our team coordinates end-to-end — from pickup to destination delivery, ensuring your cargo arrives
                  safely and on schedule, no matter the size or destination.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/services/sea-freight-ship.png"
                  alt="Container ship loaded with cargo sailing across the ocean"
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
              {/* FCL Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">FCL – Full Container Load</h3>
                <p className="text-gray-600 mb-6">
                  Secure, cost-effective solution for large shipments. Full container exclusively for your cargo.
                </p>
                <ul className="space-y-3">
                  {["20ft containers", "40ft containers", "40ft high cube", "Reefer containers"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LCL Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">LCL – Less-than-Container Load</h3>
                <p className="text-gray-600 mb-6">Efficient for smaller loads. Share space with other shipments.</p>
                <ul className="space-y-3">
                  {[
                    "Cost-effective for smaller volumes",
                    "Flexible scheduling",
                    "Consolidated shipments",
                    "Pay only for space used",
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

        {/* Process Timeline */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">10-Step Process Timeline</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: 1, title: "Customer Booking", description: "Initial booking and requirements gathering" },
                  {
                    step: 2,
                    title: "Document Preparation",
                    description: "Preparation of shipping documents and contracts",
                  },
                  {
                    step: 3,
                    title: "Cargo Pickup & Pre-Carriage",
                    description: "Collection of goods from origin location",
                  },
                  {
                    step: 4,
                    title: "Export Customs Clearance",
                    description: "Processing export documentation and clearance",
                  },
                  {
                    step: 5,
                    title: "Port Handling & Stuffing",
                    description: "Loading cargo into containers at origin port",
                  },
                  { step: 6, title: "Ocean Freight Transport", description: "Sea transit to destination port" },
                  { step: 7, title: "Arrival & Discharge", description: "Arrival at destination port and unloading" },
                  {
                    step: 8,
                    title: "Import Customs Clearance",
                    description: "Processing import documentation and clearance",
                  },
                  { step: 9, title: "Inland Delivery", description: "Transportation to final destination" },
                  { step: 10, title: "Proof of Delivery", description: "Confirmation of successful delivery" },
                ].map((item) => (
                  <div key={item.step} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#18794E] text-white flex items-center justify-center mr-4">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
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
                  "Extensive global carrier network",
                  "Competitive FCL/LCL pricing",
                  "End-to-end visibility and documentation handling",
                  "Dedicated support for complex shipments",
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
              <h2 className="text-3xl font-bold text-white">Need Sea Freight Services?</h2>
              <p className="mt-4 text-lg text-white/90">
                Contact us for a personalized quote tailored to your specific shipping requirements.
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
