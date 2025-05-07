import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Clock } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer-de"
import MapClientWrapper from "@/components/map-client-wrapper"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('/placeholder.svg?key=bnvxz')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Kontakt</h1>
              <p className="mt-6 text-lg text-gray-300">
                Nehmen Sie Kontakt mit unseren Logistikexperten auf für maßgeschneiderte Lösungen und Unterstützung.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Vollständiger Name*
                      </label>
                      <Input id="name" placeholder="Geben Sie Ihren Namen ein" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-Mail-Adresse*
                      </label>
                      <Input id="email" type="email" placeholder="Geben Sie Ihre E-Mail ein" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefonnummer
                      </label>
                      <Input id="phone" placeholder="Geben Sie Ihre Telefonnummer ein" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Firmenname
                      </label>
                      <Input id="company" placeholder="Geben Sie Ihren Firmennamen ein" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry-type" className="text-sm font-medium">
                      Anfrageart*
                    </label>
                    <Select>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Wählen Sie die Anfrageart" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Angebotsanfrage</SelectItem>
                        <SelectItem value="information">Allgemeine Informationen</SelectItem>
                        <SelectItem value="support">Kundensupport</SelectItem>
                        <SelectItem value="partnership">Partnerschaftsmöglichkeiten</SelectItem>
                        <SelectItem value="other">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Nachricht*
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Bitte beschreiben Sie Ihre Anfrage im Detail"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#18794E] hover:bg-[#136a44]">
                    Anfrage absenden
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Phone className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Telefon:</p>
                        <p className="text-gray-600">+49 231 123 4567</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">E-Mail:</p>
                        <p className="text-gray-600">Info@linheim-logistik.de</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Geschäftszeiten:</p>
                        <p className="text-gray-600">Montag - Freitag: 8:30 - 17:30 Uhr</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Unsere Standorte</h2>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 h-[500px]">
              <MapClientWrapper />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Benötigen Sie Unterstützung?</h2>
              <p className="mt-4 text-lg text-white/90">
                Unser Team steht bereit, um Ihnen bei Ihren Logistikanforderungen zu helfen.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="mailto:Info@linheim-logistik.de">Jetzt E-Mail senden</Link>
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
