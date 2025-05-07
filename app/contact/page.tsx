import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Clock } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"
import MapClientWrapper from "@/components/map-client-wrapper"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-[#004466] text-white">
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
              <p className="mt-6 text-lg text-gray-200">
                Get in touch with our logistics experts for personalized solutions and support.
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
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name*
                      </label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address*
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry-type" className="text-sm font-medium">
                      Inquiry Type*
                    </label>
                    <Select>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Request a Quote</SelectItem>
                        <SelectItem value="information">General Information</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message*
                    </label>
                    <Textarea id="message" placeholder="Please describe your inquiry in detail" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-[#18794E] hover:bg-[#136a44]">
                    Submit Inquiry
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Phone className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone:</p>
                        <p className="text-gray-600">+49 231 123 4567</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Email:</p>
                        <p className="text-gray-600">Info@linheim-logistik.de</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Business Hours:</p>
                        <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:30 PM</p>
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
            <h2 className="text-2xl font-bold mb-8 text-center">Our Locations</h2>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 h-[500px]">
              <MapClientWrapper />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Need Assistance?</h2>
              <p className="mt-4 text-lg text-white/90">Our team is ready to help with your logistics needs.</p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="mailto:Info@linheim-logistik.de">Email Us Now</Link>
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
