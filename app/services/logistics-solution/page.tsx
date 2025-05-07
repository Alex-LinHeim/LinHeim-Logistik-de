import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Package, BarChart3, Workflow } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"

export default function LogisticsSolutionPage() {
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
              backgroundImage: `url('/images/services/logistics-analytics.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Integrated Logistics Solutions</h1>
              <p className="mt-6 text-lg text-gray-300">
                End-to-end supply chain management tailored to your business needs.
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
                  Linheim Logistik offers comprehensive logistics solutions that integrate multiple services into a
                  seamless supply chain. Our tailored approach combines transportation, warehousing, customs clearance,
                  and distribution services to create efficient, cost-effective logistics operations that meet your
                  specific business requirements.
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  Whether you need a complete supply chain overhaul or targeted improvements to specific areas, our
                  logistics experts work with you to design and implement solutions that drive value and competitive
                  advantage.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/services/logistics-analytics.png"
                  alt="Logistics professional analyzing supply chain data and performance metrics"
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Integrated Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Supply Chain Design */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Workflow className="h-6 w-6 text-[#18794E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Supply Chain Design</h3>
                <p className="text-gray-600 mb-6">
                  Strategic planning and optimization of your entire supply chain network.
                </p>
                <ul className="space-y-3">
                  {[
                    "Network optimization",
                    "Inventory positioning",
                    "Transportation modeling",
                    "Cost-to-serve analysis",
                    "Risk assessment and mitigation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4PL Services */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-[#18794E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">4PL Services</h3>
                <p className="text-gray-600 mb-6">
                  Complete outsourcing of your logistics operations with strategic oversight and management.
                </p>
                <ul className="space-y-3">
                  {[
                    "Carrier selection and management",
                    "Performance monitoring",
                    "Continuous improvement",
                    "Technology integration",
                    "End-to-end visibility",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supply Chain Analytics */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-[#18794E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Supply Chain Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Data-driven insights to optimize your logistics operations and drive continuous improvement.
                </p>
                <ul className="space-y-3">
                  {[
                    "Performance dashboards",
                    "Predictive analytics",
                    "Cost analysis",
                    "Service level monitoring",
                    "Sustainability metrics",
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

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Our Integrated Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
                <ul className="space-y-3">
                  {[
                    "Streamlined processes across the supply chain",
                    "Reduced handoffs and touchpoints",
                    "Improved coordination between logistics functions",
                    "Standardized procedures and best practices",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Strategic Value</h3>
                <ul className="space-y-3">
                  {[
                    "Cost reduction through optimization",
                    "Enhanced visibility and control",
                    "Improved customer service levels",
                    "Scalability to support business growth",
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

        {/* Strategic Partnerships Section - NEW */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Strategic Partnerships for Seamless Last-Mile and Cross-Docking Solutions
            </h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-6">
                At Linheim Logistik, we maintain strong strategic collaborations with trusted local courier networks,
                enabling high-efficiency last-mile delivery, streamlined transshipment, and one-click fulfillment
                services.
              </p>

              <h3 className="text-xl font-semibold mb-4">Our integration with domestic express carriers ensures:</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Rapid cross-border handoffs",
                  "Optimized pick-pack-ship workflows",
                  "Real-time tracking across the final delivery leg",
                  "Scalable order fulfillment with minimal lead time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600">
                Whether it's B2B distribution or direct-to-consumer drop-shipping, we provide agile and cost-effective
                solutions powered by automation and synchronized logistics networks.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Global Manufacturer Supply Chain Transformation</h3>
              <p className="text-gray-600 mb-4">
                A leading manufacturer needed to optimize their European distribution network to reduce costs and
                improve delivery times. Linheim Logistik designed and implemented an integrated solution that included:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Consolidation of 5 warehouses into 2 strategic distribution centers",
                  "Implementation of a multi-modal transportation strategy",
                  "Customs clearance process optimization",
                  "Real-time visibility platform deployment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600">
                <strong>Results:</strong> 22% reduction in logistics costs, 35% improvement in delivery times, and 99.8%
                on-time delivery performance.
              </p>
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
                  "Unified sea, air, land, and warehousing coordination",
                  "One point of contact for all logistics needs",
                  "Tailored logistics solutions for each client",
                  "Scalable for SMEs to large enterprises",
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
              <h2 className="text-3xl font-bold text-white">Transform Your Supply Chain</h2>
              <p className="mt-4 text-lg text-white/90">
                Contact our logistics experts to discuss how our integrated solutions can optimize your operations.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/contact">Request a Consultation</Link>
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
