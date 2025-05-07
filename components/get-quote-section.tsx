import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function GetQuoteSection({ darkBackground = false }: { darkBackground?: boolean }) {
  return (
    <section className={`py-12 ${darkBackground ? "bg-[#18794E]" : "bg-gray-50"}`} id="quote">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className={`text-2xl font-bold ${darkBackground ? "text-white" : "text-gray-900"}`}>Get a Quote</h2>
            <p className={`mt-2 text-sm ${darkBackground ? "text-white/80" : "text-gray-600"}`}>
              Fill out the form below and our team will contact you shortly
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5">
            <form className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="service-type" className="text-sm font-medium">
                  Service Type
                </label>
                <Select>
                  <SelectTrigger id="service-type">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sea">Sea Freight</SelectItem>
                    <SelectItem value="land">Land Transport</SelectItem>
                    <SelectItem value="air">Air Freight</SelectItem>
                    <SelectItem value="customs">Customs Clearance</SelectItem>
                    <SelectItem value="warehousing">Warehousing</SelectItem>
                    <SelectItem value="integrated">Integrated Logistics Solution</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium">
                  Requirements
                </label>
                <Textarea id="message" placeholder="Describe your logistics requirements" rows={3} />
              </div>

              <Button type="submit" className="w-full bg-[#18794E] hover:bg-[#136a44]">
                Submit Request
              </Button>
            </form>
          </div>

          <div className="text-center mt-4">
            <Link
              href="/contact"
              className={`text-sm ${darkBackground ? "text-white/90 hover:text-white" : "text-[#18794E] hover:underline"}`}
            >
              Or contact us directly
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
