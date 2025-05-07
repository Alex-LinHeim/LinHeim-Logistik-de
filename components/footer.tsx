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
              Global logistics solution provider specializing in sea, land, air, customs clearance, and warehousing
              services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/sea-freight" className="text-gray-400 hover:text-white text-sm">
                  Sea Freight
                </Link>
              </li>
              <li>
                <Link href="/services/land-transport" className="text-gray-400 hover:text-white text-sm">
                  Land Transport
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="text-gray-400 hover:text-white text-sm">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services/customs" className="text-gray-400 hover:text-white text-sm">
                  Customs Clearance
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing" className="text-gray-400 hover:text-white text-sm">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services/logistics-solution" className="text-gray-400 hover:text-white text-sm">
                  Logistics Solution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white text-sm">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                <span className="text-gray-400 text-sm">88 Business District, Dortmund, Germany</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                <span className="text-gray-400 text-sm">+49 231 123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                <span className="text-gray-400 text-sm">info@linheim-logistik.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Linheim Logistik GmbH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
