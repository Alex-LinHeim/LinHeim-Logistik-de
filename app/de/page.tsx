import HeroSection from "@/components/hero-section"
import PartnersCarousel from "@/components/partners-carousel"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import MapClientWrapper from "@/components/map-client-wrapper"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Grid */}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#18794E]"
                    >
                      <path d="M22 12H2" />
                      <path d="M20 4v16" />
                      <path d="M15 4h-3v16h3" />
                      <path d="M9 4H6v16h3" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Air Freight Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#18794E]"
                    >
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Zeitkritische Luftlogistik</h3>
                  <p className="text-gray-600 mb-4">
                    Schnelle, sichere und verfolgbare Luftfracht auf allen wichtigen Handelsrouten.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/de/services/air-freight"
                    className="inline-flex items-center text-[#18794E] font-medium hover:underline"
                  >
                    Luftfracht erkunden
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Road Transport Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#18794E]"
                    >
                      <path d="M10 17h4V5H2v12h3" />
                      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                      <path d="M14 17h1" />
                      <circle cx="7.5" cy="17.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Paneuropäischer Straßentransport</h3>
                  <p className="text-gray-600 mb-4">
                    FTL/LTL-Transporte in der gesamten EU mit Optionen für Zolltransporte.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/de/services/land-transport"
                    className="inline-flex items-center text-[#18794E] font-medium hover:underline"
                  >
                    Straßentransport erkunden
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Customs Clearance Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#18794E]"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Zollabfertigung</h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Bearbeitung von Zolldokumenten und Einhaltung von Vorschriften.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/de/services/customs"
                    className="inline-flex items-center text-[#18794E] font-medium hover:underline"
                  >
                    Zolldienste erkunden
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Warehousing Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#18794E]"
                    >
                      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
                      <path d="M6 18h12" />
                      <path d="M6 14h12" />
                      <rect width="12" height="12" x="6" y="10" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Logistics Solution Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#18794E]"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" x2="12" y1="22" y2="12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrierte Logistiklösungen</h3>
                  <p className="text-gray-600 mb-4">
                    End-to-End-Supply-Chain-Management, maßgeschneidert für Ihre Geschäftsanforderungen.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/de/services/logistics-solution"
                    className="inline-flex items-center text-[#18794E] font-medium hover:underline"
                  >
                    Logistiklösungen erkunden
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Unsere Leistungen in Zahlen</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Wir sind stolz auf unsere Erfolge und die Ergebnisse, die wir für unsere Kunden erzielen.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#18794E] mb-2">15+</div>
                <p className="text-gray-600">Jahre Erfahrung</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#18794E] mb-2">300+</div>
                <p className="text-gray-600">Zufriedene Kunden</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#18794E] mb-2">99,8%</div>
                <p className="text-gray-600">Pünktliche Lieferung</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#18794E] mb-2">50+</div>
                <p className="text-gray-600">Globale Standorte</p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Infographic */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">One-Stop Globaler Logistik-Workflow</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Unser nahtloser Prozess gewährleistet effiziente und zuverlässige Logistikdienstleistungen von Anfang
                bis Ende.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#18794E]/10 text-[#18794E] mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Anfrage & Beratung</h3>
                  <p className="text-gray-600">
                    Detaillierte Bedarfsanalyse und maßgeschneiderte Logistiklösungen für Ihre spezifischen
                    Anforderungen.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#18794E]/10 text-[#18794E] mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Planung & Koordination</h3>
                  <p className="text-gray-600">
                    Strategische Routenplanung, Transportmittelauswahl und Zeitplanung für optimale Effizienz.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#18794E]/10 text-[#18794E] mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ausführung & Überwachung</h3>
                  <p className="text-gray-600">
                    Präzise Durchführung mit Echtzeit-Tracking und proaktivem Management von Ausnahmen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-[#18794E]/10 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-[#18794E]"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">Plattform-Tracker - Demnächst verfügbar</h2>
                <p className="text-lg text-gray-600">
                  Unsere neue digitale Plattform für Echtzeit-Sendungsverfolgung, Dokumentenverwaltung und
                  Leistungsanalyse wird bald verfügbar sein.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#18794E] hover:bg-[#136a44]">Für frühen Zugang registrieren</Button>
                <Button variant="outline">Mehr erfahren</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Unsere vertrauenswürdigen Partner</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Wir arbeiten mit führenden Unternehmen der Branche zusammen, um erstklassige Logistikdienstleistungen zu
                gewährleisten.
              </p>
            </div>

            <PartnersCarousel />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Was unsere Kunden sagen</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Erfahren Sie, wie wir Unternehmen dabei helfen, ihre Logistikziele zu erreichen.
              </p>
            </div>

            <TestimonialsCarousel />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Globale Präsenz</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Mit Niederlassungen und Partnern auf der ganzen Welt bieten wir umfassende Logistiklösungen für Ihr
                Unternehmen.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 h-[500px]">
              <MapClientWrapper />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Bereit, Ihre Logistik zu optimieren?</h2>
              <p className="mt-4 text-lg text-white/90">
                Kontaktieren Sie uns noch heute, um zu besprechen, wie wir Ihnen helfen können.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/de/contact">Kontakt aufnehmen</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="/de/services">Unsere Dienstleistungen</Link>
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
