import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, TrendingUp, Leaf, Truck, Ship, Plane } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"

export default function AboutPage() {
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
              backgroundImage: `url('/placeholder.svg?key=agzpx')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Linheim Logistik</h1>
              <p className="mt-6 text-lg text-gray-300">
                Your trusted partner for global logistics and supply chain solutions.
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
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  With over a decade of experience in international logistics, Linheim Logistik provides end-to-end
                  freight and fulfillment solutions tailored to the needs of modern commerce. Whether by air, ocean, or
                  road, we deliver fast, reliable, and cost-effective transport — backed by strong partnerships with
                  local carriers and deep integration with fulfillment networks.
                </p>
                <p className="mt-4">
                  We are committed to sustainable logistics, actively optimizing routes, consolidating shipments, and
                  exploring greener transport options to reduce our carbon footprint. At the same time, we are investing
                  in digital infrastructure, building smart systems that enhance visibility, automation, and customer
                  experience throughout the supply chain.
                </p>
                <p className="mt-4">
                  Our mission is to help our clients scale globally with confidence — through agile logistics,
                  operational excellence, and a forward-thinking approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-6 w-6 text-[#18794E]" />,
                  title: "Global Reach, Local Expertise",
                  description:
                    "We combine worldwide coverage with deep understanding of local markets, regulations, and customs requirements.",
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-[#18794E]" />,
                  title: "Continuous Innovation",
                  description:
                    "We constantly evolve our services and technology to stay ahead of industry trends and client needs.",
                },
                {
                  icon: <Leaf className="h-6 w-6 text-[#18794E]" />,
                  title: "Sustainable Operations",
                  description:
                    "We prioritize environmentally responsible practices throughout our operations and supply chain.",
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
              <h2 className="text-3xl font-bold">Our Comprehensive Services</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a complete range of logistics solutions to support your global trade needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Ship className="h-6 w-6 text-[#18794E]" />,
                  title: "Sea Freight",
                  description: "Reliable ocean transport for FCL and LCL shipments worldwide.",
                  link: "/services/sea-freight",
                },
                {
                  icon: <Plane className="h-6 w-6 text-[#18794E]" />,
                  title: "Air Freight",
                  description: "Fast and secure air transport for time-critical shipments.",
                  link: "/services/air-freight",
                },
                {
                  icon: <Truck className="h-6 w-6 text-[#18794E]" />,
                  title: "Land Transport",
                  description: "Efficient road freight solutions across Europe.",
                  link: "/services/land-transport",
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
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Ready to Optimize Your Supply Chain?</h2>
              <p className="mt-4 text-lg text-white/90">
                Partner with Linheim Logistik for reliable, efficient, and sustainable logistics solutions.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/contact">Get Started Today</Link>
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
