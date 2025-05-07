import { Check, MapPin, FileText, Search } from "lucide-react"

export default function ValueProposition() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Reliable Logistics for a Connected World</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Linheim Logistik provides tailored freight solutions across Europe and worldwide. From single shipments to
            complex supply chains, we deliver measurable results – faster transit, lower risk, and simplified customs
            handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-[#18794E]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Full-Service Freight</h3>
            <p className="text-gray-600">Sea, Air, and Road transport solutions tailored to your needs</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-[#18794E]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Based in Germany</h3>
            <p className="text-gray-600">Strategically located with EU-Wide reach and global connections</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-[#18794E]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Customs & Compliance</h3>
            <p className="text-gray-600">Expert handling of documentation and regulatory requirements</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-[#18794E]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-Time Visibility</h3>
            <p className="text-gray-600">Advanced tracking tools for complete supply chain transparency</p>
          </div>
        </div>
      </div>
    </section>
  )
}
