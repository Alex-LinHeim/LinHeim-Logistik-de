import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, FileText, Shield } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"

export default function CustomsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('/images/services/customs-containers.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Expert Customs Clearance Services</h1>
              <p className="mt-6 text-lg text-gray-300">
                Navigating complex customs regulations with expertise and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-gray-600">
                  Linheim Logistik provides comprehensive customs clearance services to ensure your shipments move
                  smoothly across international borders. Our team of customs specialists has extensive knowledge of
                  global trade regulations, documentation requirements, and customs procedures.
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  We handle all aspects of the customs process, from classification and valuation to duty calculation
                  and payment, helping you avoid delays and compliance issues.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/services/customs-containers.png"
                  alt="Aerial view of shipping containers at a port terminal requiring customs clearance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Customs Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Import Clearance */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#18794E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Import Customs Clearance</h3>
                <p className="text-gray-600 mb-6">
                  Complete handling of import documentation and procedures to ensure smooth entry of your goods.
                </p>
                <ul className="space-y-3">
                  {[
                    "Document preparation and verification",
                    "HS code classification",
                    "Duty and tax calculation",
                    "Customs broker representation",
                    "Release of goods from customs control",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Export Clearance */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#18794E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Export Customs Clearance</h3>
                <p className="text-gray-600 mb-6">
                  Expert management of export documentation and compliance to facilitate outbound shipments.
                </p>
                <ul className="space-y-3">
                  {[
                    "Export declaration preparation",
                    "License and permit verification",
                    "Certificate of origin processing",
                    "AES filing",
                    "Compliance with export controls",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Customs Consulting",
                  icon: <Shield className="h-6 w-6 text-[#18794E]" />,
                  description:
                    "Strategic advice on customs regulations, trade agreements, and compliance requirements to optimize your international trade operations.",
                },
                {
                  title: "Tariff Classification",
                  icon: <FileText className="h-6 w-6 text-[#18794E]" />,
                  description:
                    "Expert determination of the correct HS codes for your products to ensure accurate duty assessment and compliance with trade regulations.",
                },
                {
                  title: "Special Customs Procedures",
                  icon: <Shield className="h-6 w-6 text-[#18794E]" />,
                  description:
                    "Management of bonded warehousing, temporary imports, carnet processing, and other special customs procedures to meet your specific needs.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Customs Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Expertise & Experience</h3>
                <ul className="space-y-3">
                  {[
                    "Dedicated team of customs specialists",
                    "In-depth knowledge of global trade regulations",
                    "Experience with complex customs scenarios",
                    "Continuous training on regulatory changes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Efficiency & Compliance</h3>
                <ul className="space-y-3">
                  {[
                    "Streamlined customs processes",
                    "Reduced risk of delays and penalties",
                    "Accurate documentation and classification",
                    "Full compliance with customs regulations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <ul className="space-y-4">
                {[
                  "In-house licensed customs brokers",
                  "Pre-clearance options to reduce delays",
                  "Compliance with EU/global trade regulations",
                  "Transparent documentation process",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Simplify Your Customs Procedures</h2>
              <p className="mt-4 text-lg text-white/90">
                Let our experts handle your customs clearance needs for smooth international trade.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/contact">Contact Our Customs Team</Link>
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
