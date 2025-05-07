import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, TrendingUp, Leaf, Truck, Ship, Plane } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('/placeholder.svg?key=agzpx')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Über Linheim Logistik</h1>
              <p className="mt-6 text-lg text-gray-300">
                Ihr vertrauenswürdiger Partner für globale Logistik und Supply-Chain-Lösungen.
              </p>
            </div>
          </div>
        </section>

        {/* Logo and Overview Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-10">
                <div className="relative w-full max-w-md h-32">
                  <Image
                    src="/images/linheim-logo-full.jpeg"
                    alt="Linheim Logistik GmbH Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Wer wir sind</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Mit über einem Jahrzehnt Erfahrung in der internationalen Logistik bietet Linheim Logistik
                  maßgeschneiderte End-to-End-Fracht- und Fulfillment-Lösungen für die Anforderungen des modernen
                  Handels. Ob per Luft, See oder Straße - wir liefern schnelle, zuverlässige und kosteneffektive
                  Transporte, unterstützt durch starke Partnerschaften mit lokalen Spediteuren und tiefe Integration mit
                  Fulfillment-Netzwerken.
                </p>
                <p className="mt-4">
                  Wir setzen uns für nachhaltige Logistik ein, optimieren aktiv Routen, konsolidieren Sendungen und
                  erkunden umweltfreundlichere Transportmöglichkeiten, um unseren CO2-Fußabdruck zu reduzieren.
                  Gleichzeitig investieren wir in digitale Infrastruktur und bauen intelligente Systeme auf, die
                  Transparenz, Automatisierung und Kundenerfahrung in der gesamten Lieferkette verbessern.
                </p>
                <p className="mt-4">
                  Unsere Mission ist es, unseren Kunden zu helfen, mit Zuversicht global zu expandieren - durch agile
                  Logistik, operative Exzellenz und einen zukunftsorientierten Ansatz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Unsere Kernwerte</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-6 w-6 text-[#18794E]" />,
                  title: "Globale Reichweite, lokale Expertise",
                  description:
                    "Wir kombinieren weltweite Abdeckung mit tiefem Verständnis lokaler Märkte, Vorschriften und Zollanforderungen.",
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-[#18794E]" />,
                  title: "Kontinuierliche Innovation",
                  description:
                    "Wir entwickeln unsere Dienstleistungen und Technologien ständig weiter, um Branchentrends und Kundenbedürfnissen voraus zu sein.",
                },
                {
                  icon: <Leaf className="h-6 w-6 text-[#18794E]" />,
                  title: "Nachhaltige Betriebsabläufe",
                  description:
                    "Wir priorisieren umweltverantwortliche Praktiken in unseren gesamten Betriebsabläufen und der Lieferkette.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Unsere umfassenden Dienstleistungen</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Wir bieten eine komplette Palette von Logistiklösungen zur Unterstützung Ihrer globalen
                Handelsanforderungen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Ship className="h-6 w-6 text-[#18794E]" />,
                  title: "Seefracht",
                  description: "Zuverlässiger Seetransport für FCL- und LCL-Sendungen weltweit.",
                  link: "/de/services/sea-freight",
                },
                {
                  icon: <Plane className="h-6 w-6 text-[#18794E]" />,
                  title: "Luftfracht",
                  description: "Schneller und sicherer Lufttransport für zeitkritische Sendungen.",
                  link: "/de/services/air-freight",
                },
                {
                  icon: <Truck className="h-6 w-6 text-[#18794E]" />,
                  title: "Landtransport",
                  description: "Effiziente Straßenfrachtlösungen in ganz Europa.",
                  link: "/de/services/land-transport",
                },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-[#18794E]/50 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild className="bg-[#18794E] hover:bg-[#136a44]">
                <Link href="/de/services">Alle Dienstleistungen anzeigen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Bereit, Ihre Lieferkette zu optimieren?</h2>
              <p className="mt-4 text-lg text-white/90">
                Partnern Sie mit Linheim Logistik für zuverlässige, effiziente und nachhaltige Logistiklösungen.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/de/contact">Jetzt starten</Link>
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
