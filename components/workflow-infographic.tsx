import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Bell, CreditCard } from "lucide-react"

export default function WorkflowInfographic() {
  // Workflow steps
  const workflowSteps = [
    { id: 1, title: "Inquiry" },
    { id: 2, title: "Consultation" },
    { id: 3, title: "Booking & Documentation" },
    { id: 4, title: "Customs Clearance" },
    { id: 5, title: "In Transit" },
    { id: 6, title: "At Port" },
    { id: 7, title: "Final Delivery" },
  ]

  // Platform features
  const platformFeatures = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#18794E]" />,
      title: "Quote & Book Online",
      description: "Get instant quotes and book shipments with a few clicks",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-[#18794E]" />,
      title: "Digital Payments",
      description: "Secure and convenient payment options",
    },
    {
      icon: <Clock className="h-6 w-6 text-[#18794E]" />,
      title: "Live Shipment Tracking",
      description: "Real-time visibility of your cargo location",
    },
    {
      icon: <Bell className="h-6 w-6 text-[#18794E]" />,
      title: "Smart Notifications",
      description: "Automated alerts for shipment milestones",
    },
  ]

  // Tracking stages for phone mockup
  const trackingStages = [
    { status: "Booked", completed: true },
    { status: "At Port", completed: true },
    { status: "In Transit", completed: true },
    { status: "Customs Clearance", completed: false },
    { status: "Delivered", completed: false },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">One-Stop Global Logistics Workflow</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From Inquiry to Delivery – Fast, Transparent, and Reliable.
          </p>
        </div>

        {/* Main Content - Two Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Column - Workflow and Features (3/5 width on desktop) */}
          <div className="lg:col-span-3 space-y-12">
            {/* Workflow Steps */}
            <div className="relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

              <div className="flex flex-col md:flex-row justify-between relative z-10">
                {workflowSteps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center text-center mb-6 md:mb-0">
                    <div className="h-12 w-12 rounded-full bg-[#18794E] text-white flex items-center justify-center mb-2">
                      {step.id}
                    </div>
                    <p className="text-sm font-medium">{step.title}</p>
                    {index < workflowSteps.length - 1 && (
                      <ArrowRight
                        className="hidden md:block h-5 w-5 text-gray-400 absolute top-1/2 -translate-y-1/2"
                        style={{ left: `${(index + 1) * (100 / workflowSteps.length) - 50 / workflowSteps.length}%` }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Features */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-center md:text-left">Our Logistics Platform Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {platformFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-[#18794E]/10 flex items-center justify-center mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup (2/5 width on desktop) */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative max-w-[280px] w-full">
              {/* Phone Frame */}
              <div className="relative rounded-[40px] bg-gray-900 p-4 shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>

                {/* Phone Screen */}
                <div className="bg-white rounded-[28px] overflow-hidden pt-8 pb-10 px-4">
                  {/* App Header */}
                  <div className="text-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-[#18794E]/10 flex items-center justify-center mx-auto mb-2">
                      <Image
                        src="/images/linheim-logo.jpeg"
                        alt="Linheim Logistik"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <h4 className="text-sm font-bold">Shipment Tracking</h4>
                    <p className="text-xs text-gray-500">ID: LH-38294-CN</p>
                  </div>

                  {/* Tracking Timeline */}
                  <div className="space-y-4">
                    {trackingStages.map((stage, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`h-5 w-5 rounded-full flex items-center justify-center mr-3 
                          ${stage.completed ? "bg-[#18794E]" : "border-2 border-gray-300"}`}
                        >
                          {stage.completed && <CheckCircle className="h-4 w-4 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${stage.completed ? "font-medium" : "text-gray-500"}`}>
                            {stage.status}
                          </p>
                        </div>
                        {stage.completed && <span className="text-xs text-[#18794E]">Completed</span>}
                      </div>
                    ))}
                  </div>

                  {/* Current Status */}
                  <div className="mt-6 bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-medium">Current Location:</p>
                    <p className="text-xs text-gray-600">Frankfurt Customs Facility</p>
                    <p className="text-xs text-gray-500 mt-1">Est. delivery: June 8, 2023</p>
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
