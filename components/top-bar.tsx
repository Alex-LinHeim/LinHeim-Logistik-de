import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function TopBar() {
  return (
    <div className="w-full bg-[#f5f9f5] text-[#18794E] py-2 px-4">
      <div className="container flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="mailto:Info@linheim-logistik.de" className="flex items-center text-sm hover:text-[#136a44]">
            <Mail className="h-4 w-4 mr-2" />
            Info@linheim-logistik.de
          </Link>
          <Link href="tel:+4930123456789" className="flex items-center text-sm hover:text-[#136a44]">
            <Phone className="h-4 w-4 mr-2" />
            +49 30 123 456 789
          </Link>
        </div>
        <div>
          <Link href="/contact" className="text-sm font-medium hover:text-[#136a44] transition-colors">
            Contact Request
          </Link>
        </div>
      </div>
    </div>
  )
}
