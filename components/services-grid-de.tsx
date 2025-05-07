import Link from "next/link"
import { ArrowRight, Ship, Plane, Truck, Package, FileCheck, Warehouse } from "lucide-react"

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Unsere Kerndienstleistungen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ocean Freight Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Ship className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Globaler Seetransport</h3>
              <p className="text-gray-600 mb-4">
                FCL- und LCL-Versandlösungen mit Koordination vom Ursprung bis zum Ziel.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/de/services/sea-freight"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Seefracht erkunden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Air Freight Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zeitkritische Luftlogistik</h3>
              <p className="text-gray-600 mb-4">
                Schnelle, sichere und nachverfolgbare Luftfracht auf allen wichtigen Handelsrouten.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/de/services/air-freight"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Luftfracht erkunden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Road Transport Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Paneuropäische Straßenabdeckung</h3>
              <p className="text-gray-600 mb-4">FTL/LTL-Trucking in der gesamten EU mit Optionen für Zolltransporte.</p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/de/services/land-transport"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Straßentransport erkunden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Customs Clearance Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zollabfertigung</h3>
              <p className="text-gray-600 mb-4">
                Fachkundige Bearbeitung von Zolldokumenten und Einhaltung gesetzlicher Vorschriften.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/de/services/customs"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Zolldienste erkunden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Warehousing Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Warehouse className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lagerlösungen</h3>
              <p className="text-gray-600 mb-4">Moderne Lagereinrichtungen mit Bestandsverwaltungssystemen.</p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/de/services/warehousing"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Lagerhaltung erkunden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Logistics Solution Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrierte Logistiklösungen</h3>
              <p className="text-gray-600 mb-4">
                End-to-End-Lieferkettenmanagement, maßgeschneidert für Ihre Geschäftsanforderungen.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/de/services/logistics-solution"
                className="inline-flex items-center text-[#18794E] font-medium hover:underline"
              >
                Logistiklösungen erkunden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
