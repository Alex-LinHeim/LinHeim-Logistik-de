import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Leaf, Truck, Warehouse, Users, Lightbulb, Check } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"

export default function SustainabilityPage() {
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
              backgroundImage: `url('/images/sustainability/green-building.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Committed to Sustainable Logistics</h1>
              <p className="mt-6 text-lg text-gray-300">
                Building a greener future through eco-friendly transportation and responsible supply chain practices.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-16 w-16 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-6 mx-auto">
                <Leaf className="h-8 w-8 text-[#18794E]" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Sustainability Commitment</h2>
              <p className="text-lg text-gray-600">
                At Linheim Logistik, we recognize our responsibility to minimize the environmental impact of logistics
                operations. We are committed to developing and implementing sustainable practices across our entire
                business, from transportation and warehousing to packaging and technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Carbon Footprint Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Reducing Carbon Footprint</h2>
                <p className="text-gray-600 mb-6">
                  We are actively working to minimize our environmental impact by adopting eco-friendly transportation
                  methods:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Fleet Electrification & Alternative Fuels</span> – Transitioning to
                      electric, hybrid, and hydrogen-powered trucks.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Route Optimization</span> – Using AI-powered route planning to
                      reduce fuel consumption and emissions.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Carbon Offsetting</span> – Investing in reforestation and renewable
                      energy projects to balance emissions.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/sustainability/hands-plant.png"
                  alt="Hands holding soil with a small plant, representing carbon offsetting and reforestation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Green Freight Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/sustainability/moss-ball.png"
                  alt="Green moss ball representing eco-friendly transport solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Green Freight & Eco-Friendly Transport Solutions</h2>
                <p className="text-gray-600 mb-6">To ensure sustainable freight transportation, we focus on:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Intermodal Transportation</span> – Combining rail, sea, and road
                      transport to optimize fuel efficiency.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Low-Emission Vehicles</span> – Expanding our fleet with Euro 6
                      standard and electric trucks.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Sustainable Packaging</span> – Encouraging recyclable and
                      biodegradable packaging solutions.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Warehousing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Warehouse className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Sustainable Warehousing</h2>
                <p className="text-gray-600 mb-6">
                  Our warehouses are designed with energy efficiency and sustainability in mind:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Solar-Powered Warehouses</span> – Utilizing solar panels to power
                      logistics hubs.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Energy-Efficient Lighting</span> – Installing LED lighting and
                      motion sensors to minimize energy use.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Waste Reduction Programs</span> – Implementing recycling and
                      zero-waste policies.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/sustainability/green-building.png"
                  alt="Green building with vertical garden facade, representing sustainable warehouse design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partnering Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/sustainability/green-building-2.png"
                  alt="Sustainable green building with vertical gardens, representing our eco-friendly partnerships"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Partnering for a Greener Supply Chain</h2>
                <p className="text-gray-600 mb-6">
                  We collaborate with environmentally responsible partners to ensure sustainability across the entire
                  supply chain:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Eco-Friendly Suppliers</span> – Partnering with carriers and
                      manufacturers committed to reducing emissions.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Sustainable Shipping Partnerships</span> – Working with green
                      shipping companies like EMC, OOCL, and COSCO.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#18794E] mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Certified Carbon-Neutral Operations</span> – Striving for carbon
                      neutrality through third-party certifications.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Logistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4 mx-auto">
                  <Lightbulb className="h-6 w-6 text-[#18794E]" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Smart Logistics & Technology for Sustainability</h2>
                <p className="text-gray-600">Innovation is key to achieving sustainable logistics:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3">AI & IoT for Fuel Efficiency</h3>
                  <p className="text-gray-600 text-sm">
                    Using smart sensors and data analytics to optimize energy consumption and reduce waste in our
                    operations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3">Paperless Operations</h3>
                  <p className="text-gray-600 text-sm">
                    Digitizing documentation and implementing electronic systems to reduce paper waste and streamline
                    processes.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3">Blockchain for Transparency</h3>
                  <p className="text-gray-600 text-sm">
                    Ensuring end-to-end supply chain visibility to track sustainability efforts and verify environmental
                    claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Goals */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Sustainability Goals</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We have set ambitious targets to reduce our environmental impact and contribute to a more sustainable
                future:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#18794E] mb-2">30%</div>
                <p className="font-semibold mb-2">Carbon Reduction</p>
                <p className="text-sm text-gray-600">
                  Reduce our carbon emissions by 30% by 2025 compared to our 2020 baseline.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#18794E] mb-2">50%</div>
                <p className="font-semibold mb-2">Renewable Energy</p>
                <p className="text-sm text-gray-600">
                  Power 50% of our operations with renewable energy sources by 2026.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#18794E] mb-2">100%</div>
                <p className="font-semibold mb-2">Sustainable Packaging</p>
                <p className="text-sm text-gray-600">
                  Achieve 100% recyclable or biodegradable packaging in our operations by 2027.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#18794E]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Partner with Us for Sustainable Logistics</h2>
              <p className="mt-4 text-lg text-white/90">
                Join us in our commitment to environmentally responsible logistics and supply chain solutions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
                  <Link href="/contact">Contact Our Sustainability Team</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="/about">Learn More About Our Initiatives</Link>
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
