import Link from "next/link"
import { ClipboardList, Package, FileCheck, TruckIcon as TruckDelivery } from "lucide-react"

export default function ProcessSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How We Deliver – Our Standard Process</h2>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <ClipboardList className="h-8 w-8 text-[#18794E]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quote & Booking</h3>
              <p className="text-gray-600 text-sm">Request pricing and confirm your shipment details</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <Package className="h-8 w-8 text-[#18794E]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pickup & Documentation</h3>
              <p className="text-gray-600 text-sm">We collect your cargo and prepare all necessary paperwork</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <FileCheck className="h-8 w-8 text-[#18794E]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customs & Transit</h3>
              <p className="text-gray-600 text-sm">We handle customs clearance and monitor your shipment in transit</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <TruckDelivery className="h-8 w-8 text-[#18794E]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Final Delivery & POD</h3>
              <p className="text-gray-600 text-sm">We deliver to the final destination and provide proof of delivery</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center text-[#18794E] font-medium hover:underline">
            See detailed process for each transport type
          </Link>
        </div>
      </div>
    </section>
  )
}
