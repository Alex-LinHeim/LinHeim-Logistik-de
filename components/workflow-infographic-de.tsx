import { TruckIcon as TruckDelivery, Ship, Plane } from "lucide-react"

export default function WorkflowInfographic() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Unser Logistik-Workflow</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Wir bieten einen nahtlosen, transparenten Prozess von der Anfrage bis zur Lieferung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Sea Freight */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mr-4">
                <Ship className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold">Seefracht</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Buchung & Dokumentation</p>
                  <p className="text-sm text-gray-500">Wir bereiten alle erforderlichen Dokumente vor</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Containerbeladung</p>
                  <p className="text-sm text-gray-500">Sichere Verladung und Versiegelung</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Seetransport & Lieferung</p>
                  <p className="text-sm text-gray-500">Überwachter Transport bis zum Endziel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Air Freight */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mr-4">
                <Plane className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold">Luftfracht</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Express-Abholung</p>
                  <p className="text-sm text-gray-500">Schnelle Abholung und Sicherheitskontrolle</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Prioritätsversand</p>
                  <p className="text-sm text-gray-500">Beschleunigte Abfertigung und Verladung</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Schnelle Zustellung</p>
                  <p className="text-sm text-gray-500">Zeitkritische Lieferung zum Bestimmungsort</p>
                </div>
              </div>
            </div>
          </div>

          {/* Road Transport */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mr-4">
                <TruckDelivery className="h-6 w-6 text-[#18794E]" />
              </div>
              <h3 className="text-xl font-semibold">Landtransport</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Routenplanung</p>
                  <p className="text-sm text-gray-500">Optimierte Streckenführung für Effizienz</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Grenzüberschreitender Transport</p>
                  <p className="text-sm text-gray-500">Nahtlose Zollabwicklung an Grenzen</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Tür-zu-Tür Lieferung</p>
                  <p className="text-sm text-gray-500">Direkte Zustellung an den gewünschten Standort</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Jeder Schritt wird von unserem erfahrenen Team überwacht, um Qualität und Pünktlichkeit zu gewährleisten
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 border border-[#18794E] text-[#18794E] rounded-lg font-medium hover:bg-[#18794E]/5 transition-colors">
            Vollständige Transparenz durch Echtzeit-Tracking
          </div>
        </div>
      </div>
    </section>
  )
}
