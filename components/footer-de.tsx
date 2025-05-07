import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Linheim Logistik</h3>
            <p className="text-gray-400 text-sm">
              Globaler Logistiklösungsanbieter, spezialisiert auf See-, Land-, Luftfracht, Zollabfertigung und
              Lagerhaltung.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Dienstleistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/de/services/sea-freight" className="text-gray-400 hover:text-white text-sm">
                  Seefracht
                </Link>
              </li>
              <li>
                <Link href="/de/services/land-transport" className="text-gray-400 hover:text-white text-sm">
                  Landtransport
                </Link>
              </li>
              <li>
                <Link href="/de/services/air-freight" className="text-gray-400 hover:text-white text-sm">
                  Luftfracht
                </Link>
              </li>
              <li>
                <Link href="/de/services/customs" className="text-gray-400 hover:text-white text-sm">
                  Zollabfertigung
                </Link>
              </li>
              <li>
                <Link href="/de/services/warehousing" className="text-gray-400 hover:text-white text-sm">
                  Lagerhaltung
                </Link>
              </li>
              <li>
                <Link href="/de/services/logistics-solution" className="text-gray-400 hover:text-white text-sm">
                  Logistiklösung
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/de/about" className="text-gray-400 hover:text-white text-sm">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/de/contact" className="text-gray-400 hover:text-white text-sm">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/de/careers" className="text-gray-400 hover:text-white text-sm">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/de/news" className="text-gray-400 hover:text-white text-sm">
                  Neuigkeiten
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                <span className="text-gray-400 text-sm">88 Business District, Dortmund, Deutschland</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                <span className="text-gray-400 text-sm">+49 231 123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                <span className="text-gray-400 text-sm">info@linheim-logistik.de</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Linheim Logistik GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
