import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Leaf, Truck, Warehouse, Users, Lightbulb, Check } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer-de"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('/images/sustainability/green-building.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Engagement für nachhaltige Logistik</h1>
              <p className="mt-6 text-lg text-gray-300">
                Aufbau einer grüneren Zukunft durch umweltfreundlichen Transport und verantwortungsvolle
                Lieferkettenpraktiken.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-16 w-16 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-6 mx-auto">
                <Leaf className="h-8 w-8 text-[#18794E]" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Unser Nachhaltigkeitsversprechen</h2>
              <p className="text-lg text-gray-600">
                Bei Linheim Logistik erkennen wir unsere Verantwortung, die Umweltauswirkungen von Logistikoperationen
                zu minimieren. Wir sind bestrebt, nachhaltige Praktiken in unserem gesamten Unternehmen zu entwickeln
                und umzusetzen, vom Transport und der Lagerhaltung bis hin zu Verpackungs- und Technologielösungen.
              </p>
            </div>
          </div>
        </section>

        {/* Carbon Footprint Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Reduzierung des CO2-Fußabdrucks</h2>
                <p className="text-gray-600 mb-6">
                  Wir arbeiten aktiv daran, unsere Umweltauswirkungen zu minimieren, indem wir umweltfreundliche
                  Transportmethoden einsetzen:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Elektrifizierung der Flotte & alternative Kraftstoffe</span> –
                      Umstellung auf elektrische, hybride und wasserstoffbetriebene Lkw.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Routenoptimierung</span> – Einsatz KI-gestützter Routenplanung zur
                      Reduzierung von Kraftstoffverbrauch und Emissionen.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">CO2-Kompensation</span> – Investitionen in Aufforstungs- und
                      erneuerbare Energieprojekte zum Ausgleich von Emissionen.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/sustainability/hands-plant.png"
                  alt="Hände, die Erde mit einer kleinen Pflanze halten, repräsentieren CO2-Ausgleich und Aufforstung"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Green Freight Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/sustainability/moss-ball.png"
                  alt="Grüner Moosball, der umweltfreundliche Transportlösungen repräsentiert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Grüne Fracht & umweltfreundliche Transportlösungen</h2>
                <p className="text-gray-600 mb-6">
                  Um nachhaltigen Frachttransport zu gewährleisten, konzentrieren wir uns auf:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Intermodaler Transport</span> – Kombination von Schienen-, See- und
                      Straßentransport zur Optimierung der Kraftstoffeffizienz.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Emissionsarme Fahrzeuge</span> – Erweiterung unserer Flotte mit Lkw
                      nach Euro-6-Standard und Elektrofahrzeugen.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Nachhaltige Verpackung</span> – Förderung recycelbarer und
                      biologisch abbaubarer Verpackungslösungen.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Warehousing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Warehouse className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Nachhaltige Lagerhaltung</h2>
                <p className="text-gray-600 mb-6">
                  Unsere Lager sind mit Blick auf Energieeffizienz und Nachhaltigkeit konzipiert:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Solarbetriebene Lagerhäuser</span> – Nutzung von Solarmodulen zur
                      Stromversorgung von Logistikzentren.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Energieeffiziente Beleuchtung</span> – Installation von
                      LED-Beleuchtung und Bewegungssensoren zur Minimierung des Energieverbrauchs.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Abfallreduzierungsprogramme</span> – Implementierung von Recycling-
                      und Zero-Waste-Richtlinien.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/sustainability/green-building.png"
                  alt="Grünes Gebäude mit vertikaler Gartenfassade, repräsentiert nachhaltiges Lagerdesign"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partnering Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/sustainability/green-building-2.png"
                  alt="Nachhaltiges grünes Gebäude mit vertikalen Gärten, repräsentiert unsere umweltfreundlichen Partnerschaften"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Partnerschaften für eine grünere Lieferkette</h2>
                <p className="text-gray-600 mb-6">
                  Wir arbeiten mit umweltverantwortlichen Partnern zusammen, um Nachhaltigkeit in der gesamten
                  Lieferkette zu gewährleisten:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Umweltfreundliche Lieferanten</span> – Partnerschaften mit
                      Spediteuren und Herstellern, die sich zur Emissionsreduzierung verpflichtet haben.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Nachhaltige Schifffahrtspartnerschaften</span> – Zusammenarbeit mit
                      grünen Reedereien wie EMC, OOCL und COSCO.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Zertifizierte CO2-neutrale Betriebsabläufe</span> – Streben nach
                      Kohlenstoffneutralität durch Zertifizierungen von Drittanbietern.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Logistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4 mx-auto">
                  <Lightbulb className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Intelligente Logistik & Technologie für Nachhaltigkeit</h2>
                <p className="text-gray-600">Innovation ist der Schlüssel zur Erreichung nachhaltiger Logistik:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3">KI & IoT für Kraftstoffeffizienz</h3>
                  <p className="text-gray-600 text-sm">
                    Einsatz intelligenter Sensoren und Datenanalyse zur Optimierung des Energieverbrauchs und zur
                    Reduzierung von Abfall in unseren Betriebsabläufen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3">Papierlose Betriebsabläufe</h3>
                  <p className="text-gray-600 text-sm">
                    Digitalisierung von Dokumentation und Implementierung elektronischer Systeme zur Reduzierung von
                    Papierabfall und Optimierung von Prozessen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3">Blockchain für Transparenz</h3>
                  <p className="text-gray-600 text-sm">
                    Gewährleistung der End-to-End-Transparenz der Lieferkette zur Verfolgung von
                    Nachhaltigkeitsbemühungen und Überprüfung von Umweltaussagen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Goals */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Unsere Nachhaltigkeitsziele</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Wir haben uns ehrgeizige Ziele gesetzt, um unsere Umweltauswirkungen zu reduzieren und zu einer
                nachhaltigeren Zukunft beizutragen:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#18794E] mb-2">30%</div>
                <p className="font-semibold mb-2">CO2-Reduzierung</p>
                <p className="text-sm text-gray-600">
                  Reduzierung unserer CO2-Emissionen um 30% bis 2025 im Vergleich zu unserem Basisjahr 2020.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#18794E] mb-2">50%</div>
                <p className="font-semibold mb-2">Erneuerbare Energie</p>
                <p className="text-sm text-gray-600">
                  Versorgung von 50% unserer Betriebsabläufe mit erneuerbaren Energiequellen bis 2026.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#18794E] mb-2">100%</div>
                <p className="font-semibold mb-2">Nachhaltige Verpackung</p>
                <p className="text-sm text-gray-600">
                  Erreichen von 100% recycelbarer oder biologisch abbaubarer Verpackung in unseren Betriebsabläufen bis
                  2027.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Partnern Sie mit uns für nachhaltige Logistik</h2>
              <p className="mt-4 text-lg text-white/90">
                Schließen Sie sich unserem Engagement für umweltverantwortliche Logistik und Lieferkettenlösungen an.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/de/contact">Kontaktieren Sie unser Nachhaltigkeitsteam</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="/de/about">Erfahren Sie mehr über unsere Initiativen</Link>
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
