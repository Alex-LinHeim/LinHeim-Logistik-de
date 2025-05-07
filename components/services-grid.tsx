import Link from "next/link"
import { ArrowRight, Ship, Plane, Truck, Package } from "lucide-react"

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ocean Freight Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Ship className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Ocean Transport</h3>
              <p className="text-gray-600 mb-4">
                FCL and LCL shipping solutions with origin-to-destination coordination.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/services/sea-freight"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Explore Ocean Freight
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Air Freight Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Time-Critical Air Logistics</h3>
              <p className="text-gray-600 mb-4">Fast, secure and trackable air freight across all major trade lanes.</p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/services/air-freight"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Explore Air Freight
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Road Transport Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pan-European Road Coverage</h3>
              <p className="text-gray-600 mb-4">FTL/LTL trucking across the EU with bonded transport options.</p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/services/road-transport"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Explore Road Transport
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Logistics Solution Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrated Logistics Solutions</h3>
              <p className="text-gray-600 mb-4">End-to-end supply chain management tailored to your business needs.</p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/services/logistics-solution"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Explore Logistics Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
