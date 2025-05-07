import {
  FileText,
  MessageSquare,
  Clipboard,
  FileCheck,
  TrendingUp,
  Anchor,
  TruckIcon,
  CreditCard,
  Search,
  Bell,
} from "lucide-react"

export default function WorkflowInfographic() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">One-Stop Global Logistics Workflow</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From Inquiry to Delivery – Fast, Transparent, and Reliable.
          </p>
        </div>

        {/* Workflow Process */}
        <div className="mb-16">
          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-7 gap-8 relative z-10">
              {/* Step 1: Inquiry */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <FileText className="h-8 w-8 text-[#18794E]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Inquiry</h3>
                <p className="text-gray-600 text-sm">Submit your logistics requirements</p>
              </div>

              {/* Step 2: Consultation */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <MessageSquare className="h-8 w-8 text-[#18794E]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">Expert advice on best shipping options</p>
              </div>

              {/* Step 3: Booking & Documentation */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <Clipboard className="h-8 w-8 text-[#18794E]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Booking & Documentation</h3>
                <p className="text-gray-600 text-sm">Secure shipping space and prepare documents</p>
              </div>

              {/* Step 4: Customs Clearance */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <FileCheck className="h-8 w-8 text-[#18794E]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Customs Clearance</h3>
                <p className="text-gray-600 text-sm">Expert handling of customs procedures</p>
              </div>

              {/* Step 5: In Transit */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <TrendingUp className="h-8 w-8 text-[#18794E]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">In Transit</h3>
                <p className="text-gray-600 text-sm">Real-time tracking during transportation</p>
              </div>

              {/* Step 6: At Port */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <Anchor className="h-8 w-8 text-[#18794E]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">At Port</h3>
                <p className="text-gray-600 text-sm">Arrival and port handling procedures</p>
              </div>

              {/* Step 7: Final Delivery */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <TruckIcon className="h-8 w-8 text-[#18794E]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Final Delivery</h3>
                <p className="text-gray-600 text-sm">Last-mile delivery to final destination</p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Features and Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Platform Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Our Logistics Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1: Quote & Book Online */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#18794E]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Quote & Book Online</h4>
                <p className="text-gray-600 text-sm">
                  Get instant quotes and book shipments directly through our platform
                </p>
              </div>

              {/* Feature 2: Digital Payments */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-[#18794E]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Digital Payments</h4>
                <p className="text-gray-600 text-sm">Secure online payment options for all shipping services</p>
              </div>

              {/* Feature 3: Live Shipment Tracking */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-[#18794E]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Live Shipment Tracking</h4>
                <p className="text-gray-600 text-sm">Real-time visibility of your cargo location and status</p>
              </div>

              {/* Feature 4: Smart Notifications */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-[#18794E]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Smart Notifications</h4>
                <p className="text-gray-600 text-sm">Automated alerts about status changes and important events</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[640px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-white">
                  {/* App Header */}
                  <div className="bg-[#18794E] text-white p-4">
                    <div className="text-lg font-bold mb-1">Linheim Tracking</div>
                    <div className="text-sm">Shipment ID: LH-283945</div>
                  </div>

                  {/* Tracking Status */}
                  <div className="p-6">
                    <h4 className="font-semibold mb-4">Shipment Status</h4>

                    {/* Status Timeline */}
                    <div className="space-y-6">
                      {[
                        { status: "Booked", date: "May 10, 2023", completed: true },
                        { status: "At Port", date: "May 15, 2023", completed: true },
                        { status: "In Transit", date: "May 18, 2023", completed: true },
                        { status: "Customs Clearance", date: "May 25, 2023", completed: false },
                        { status: "Delivered", date: "Expected: May 28, 2023", completed: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mr-4 flex flex-col items-center">
                            <div
                              className={`h-6 w-6 rounded-full ${item.completed ? "bg-[#18794E]" : "border-2 border-gray-300 bg-white"} flex items-center justify-center`}
                            >
                              {item.completed && (
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  stroke="white"
                                  strokeWidth="3"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              )}
                            </div>
                            {index < 4 && (
                              <div className={`h-12 w-0.5 ${item.completed ? "bg-[#18794E]" : "bg-gray-300"}`}></div>
                            )}
                          </div>
                          <div>
                            <div className={`font-medium ${item.completed ? "text-[#18794E]" : "text-gray-500"}`}>
                              {item.status}
                            </div>
                            <div className="text-xs text-gray-500">{item.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
