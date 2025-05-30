import { TrendingUp, Users, Globe, Clock } from "lucide-react"

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Years of Experience */}
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-[#18794E]" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">15+</h3>
            <p className="text-lg font-medium text-gray-700 mt-2">Years</p>
            <p className="text-sm text-gray-500 mt-1">Logistics Experience</p>
          </div>

          {/* Satisfied Clients */}
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-[#18794E]" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">300+</h3>
            <p className="text-lg font-medium text-gray-700 mt-2">Satisfied Clients</p>
            <p className="text-sm text-gray-500 mt-1">Across industries worldwide</p>
          </div>

          {/* Countries Served */}
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-[#18794E]" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">15+</h3>
            <p className="text-lg font-medium text-gray-700 mt-2">Countries</p>
            <p className="text-sm text-gray-500 mt-1">Global logistics network</p>
          </div>

          {/* On-Time Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-[#18794E]/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-[#18794E]" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">99.8%</h3>
            <p className="text-lg font-medium text-gray-700 mt-2">On-Time Delivery</p>
            <p className="text-sm text-gray-500 mt-1">Reliability you can count on</p>
          </div>
        </div>
      </div>
    </section>
  )
}
