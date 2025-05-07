"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "David Chen",
    content:
      "Linheim Logistik's service is highly professional. Our cargo always arrives on time. Their team is responsive and excellent at problem-solving. Very satisfied with their service!",
  },
  {
    id: 2,
    name: "Michael Schmidt",
    content:
      "We've been working with Linheim Logistik for years. Their customs clearance services have saved us significant time and costs. Their knowledge of European and Asian markets brings us tremendous value.",
  },
  {
    id: 3,
    name: "Lisa Wang",
    content:
      "Linheim Logistik's one-stop logistics solution has greatly simplified our supply chain management. Their tracking system allows us to monitor cargo status at any time, which is very convenient.",
  },
  {
    id: 4,
    name: "John Davis",
    content:
      "Shipping from the US to Europe and Asia had been our challenge until we found Linheim Logistik. Their international network and expertise make transoceanic shipping simple.",
  },
  {
    id: 5,
    name: "Thomas Wang",
    content:
      "We needed a reliable partner to handle our European distribution, and Linheim Logistik perfectly met this need. Their warehousing and distribution services are highly efficient.",
  },
  {
    id: 6,
    name: "Maria Gonzalez",
    content:
      "As an international trading company, we need flexible and reliable logistics partners. Linheim Logistik's team always adapts to our changing needs and provides excellent service.",
  },
]

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Auto-scroll
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % (testimonials.length - visibleCount + 1))
    }, 5000)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(interval)
    }
  }, [visibleCount])

  const handlePrev = () => {
    setActiveIndex((current) => (current > 0 ? current - 1 : 0))
  }

  const handleNext = () => {
    setActiveIndex((current) =>
      current < testimonials.length - visibleCount ? current + 1 : testimonials.length - visibleCount,
    )
  }

  return (
    <section className="py-12 bg-gray-50" id="testimonials">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-2 text-sm text-gray-600">Hear from our satisfied customers</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4" style={{ flex: `0 0 ${100 / visibleCount}%` }}>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 h-full">
                    <div className="flex items-start mb-4">
                      <Quote className="h-6 w-6 text-[#18794E]/20 mr-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{testimonial.content}</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex >= testimonials.length - visibleCount}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full ${
                activeIndex === index ? "bg-[#18794E]" : "bg-gray-300"
              } transition-colors`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/testimonials" className="text-sm text-[#18794E] hover:underline">
            View more testimonials
          </Link>
        </div>
      </div>
    </section>
  )
}
