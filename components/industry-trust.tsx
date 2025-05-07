import { Building, Truck, Plane } from "lucide-react"

export default function IndustryTrust() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by Exporters, Distributors, and Global Traders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Use Case 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-[#18794E]/10 flex items-center justify-center mr-4 mt-1">
                <Building className="h-5 w-5 text-[#18794E]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Exporting to Asia via Hamburg?</h3>
                <p className="text-gray-600">
                  Our FCL services provide reliable, cost-effective shipping with end-to-end visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-[#18794E]/10 flex items-center justify-center mr-4 mt-1">
                <Plane className="h-5 w-5 text-[#18794E]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Urgent pharma samples to Sweden?</h3>
                <p className="text-gray-600">
                  Our air freight solutions with customs expertise ensure timely delivery of sensitive cargo.
                </p>
              </div>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-[#18794E]/10 flex items-center justify-center mr-4 mt-1">
                <Truck className="h-5 w-5 text-[#18794E]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Weekly EU pallet loads?</h3>
                <p className="text-gray-600">
                  Our LTL road solutions provide efficient, reliable transport across Europe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies across industries</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-xs">CLIENT LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
