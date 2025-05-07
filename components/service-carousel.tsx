"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Ship, Truck, Plane, FileCheck, Warehouse, Package, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    icon: <Ship className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Sea Freight",
    description: "Reliable ocean transport for global import and export needs.",
    link: "/services/sea-freight",
  },
  {
    icon: <Truck className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Land Transport",
    description: "Fast and secure truck delivery across Europe and beyond.",
    link: "/services/land-transport",
  },
  {
    icon: <Plane className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Air Freight",
    description: "Express air cargo solutions with global reach.",
    link: "/services/air-freight",
  },
  {
    icon: <FileCheck className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Customs Clearance",
    description: "Hassle-free customs handling with expert compliance.",
    link: "/services/customs",
  },
  {
    icon: <Warehouse className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Warehousing",
    description: "Secure storage and smart inventory management.",
    link: "/services/warehousing",
  },
  {
    icon: <Package className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Logistics Solution",
    description: "Tailored end-to-end logistics services for every business.",
    link: "/services/logistics-solution",
  },
]

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
      setIsAnimating(false)
    }, 300) // Half of the transition time for a smooth exit-enter effect
  }

  const prevSlide = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
      setIsAnimating(false)
    }, 300) // Half of the transition time for a smooth exit-enter effect
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300) // Half of the transition time for a smooth exit-enter effect
  }

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused])

  return (
    <div
      className="relative w-full mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Enlarged Service Card with Animation */}
      <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/20 min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-center w-full mx-auto">
        <div
          className={`transition-all duration-500 ease-out ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#18794E] flex items-center justify-center mb-8">
            <div className="text-white">{services[currentIndex].icon}</div>
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">{services[currentIndex].title}</h3>
          <p className="text-xl md:text-2xl text-gray-200 text-center mb-8 max-w-2xl">
            {services[currentIndex].description}
          </p>
          <Link
            href={services[currentIndex].link}
            className="px-8 py-3 bg-[#18794E] text-white text-lg rounded-full hover:bg-[#18794E]/90 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Navigation Arrows - Positioned outside the card */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Previous service"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Next service"
        disabled={isAnimating}
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      {/* Indicator Dots - Centered below the card */}
      <div className="flex justify-center mt-6 space-x-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 transition-all rounded-full ${index === currentIndex ? "bg-white w-8" : "bg-white/50 w-3"}`}
            aria-label={`Go to service ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}
