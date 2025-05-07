import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Warehouse, PackageCheck, BarChart3 } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"

export default function WarehousingPage() {
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
              backgroundImage: `url('/images/services/smart-warehouse.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Strategic Warehousing Solutions</h1>
              <p className="mt-6 text-lg text-gray-300">
                Flexible storage, efficient distribution, and value-added services for your supply chain.
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
                  Linheim Logistik offers comprehensive warehousing and distribution services across strategic locations
                  in Europe and beyond. Our modern facilities provide secure storage, efficient inventory management,
                  and seamless distribution capabilities.
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  Whether you need short-term storage, long-term warehousing, or a complete fulfillment solution, we
                  tailor our services to meet your specific requirements and optimize your supply chain.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/services/smart-warehouse.png"
                  alt="Smart warehouse with digital inventory tracking and automated guided vehicles"
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Warehousing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Storage Solutions */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Warehouse className="h-6 w-6 text-[#18794E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Storage Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Secure and flexible storage options to accommodate various types of goods and inventory requirements.
                </p>
                <ul className="space-y-3">
                  {[
                    "Short and long-term storage",
                    "Temperature-controlled facilities",
                    "Bonded warehousing",
                    "Bulk and rack storage systems",
                    "Hazardous goods storage (ADR)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fulfillment Services */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <PackageCheck className="h-6 w-6 text-[#18794E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fulfillment Services</h3>
                <p className="text-gray-600 mb-6">
                  End-to-end order processing and fulfillment to streamline your distribution operations.
                </p>
                <ul className="space-y-3">
                  {[
                    "Order processing",
                    "Pick and pack services",
                    "Kitting and assembly",
                    "Returns management",
                    "E-commerce fulfillment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inventory Management */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-[#18794E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Inventory Management</h3>
                <p className="text-gray-600 mb-6">
                  Advanced systems and processes to maintain optimal inventory levels and visibility.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time inventory tracking",
                    "Barcode and RFID technology",
                    "Cycle counting",
                    "Inventory reporting",
                    "Stock level optimization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section - NEW */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Smart Warehouse Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4">Digital Integration & Automation</h3>
                <p className="text-gray-600 mb-6">
                  Our warehouses leverage cutting-edge technology to maximize efficiency and accuracy in all operations:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Automated Guided Vehicles (AGVs)</span> – Robotic transport systems
                      that optimize internal movements and reduce handling errors.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">IoT Sensors & Real-time Monitoring</span> – Continuous tracking of
                      inventory location, environmental conditions, and space utilization.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Warehouse Management System (WMS)</span> – Advanced software that
                      optimizes all warehouse processes from receiving to shipping.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/services/smart-warehouse.png"
                  alt="Digital warehouse management system with IoT integration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value-Added Services */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Value-Added Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Product Customization</h3>
                <ul className="space-y-3">
                  {[
                    "Product labeling and tagging",
                    "Packaging and repackaging",
                    "Bundle creation",
                    "Product inspection",
                    "Quality control checks",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Supply Chain Services</h3>
                <ul className="space-y-3">
                  {[
                    "Cross-docking operations",
                    "Consolidation and deconsolidation",
                    "Just-in-time delivery",
                    "Vendor managed inventory",
                    "Supply chain visibility",
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
                  "Modern, secure, and strategically located facilities",
                  "Inventory visibility & digital management",
                  "Value-added services (packing, labeling, etc.)",
                  "Scalable storage solutions",
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
              <h2 className="text-3xl font-bold text-white">Optimize Your Warehousing & Distribution</h2>
              <p className="mt-4 text-lg text-white/90">
                Contact us to discuss how our warehousing solutions can enhance your supply chain.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/contact">Request Warehousing Information</Link>
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
