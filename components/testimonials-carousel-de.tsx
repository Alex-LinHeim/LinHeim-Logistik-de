"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Schmidt",
    position: "Logistikleiter",
    company: "TechGlobal GmbH",
    quote:
      "Linheim Logistik hat unsere Lieferkette komplett transformiert. Ihre Seefracht-Services haben unsere Lieferzeiten nach Asien um 20% reduziert und gleichzeitig die Kosten gesenkt.",
    rating: 5,
  },
  {
    name: "Julia Weber",
    position: "Einkaufsleiterin",
    company: "MedSupply AG",
    quote:
      "Für unsere zeitkritischen Pharmaprodukte ist die Luftfracht von Linheim unverzichtbar. Ihr Team versteht die besonderen Anforderungen unserer Branche und liefert immer zuverlässig.",
    rating: 5,
  },
  {
    name: "Thomas Becker",
    position: "Supply Chain Manager",
    company: "EuroRetail GmbH",
    quote:
      "Die Zollabwicklung war immer unser größtes Hindernis. Seit wir mit Linheim zusammenarbeiten, haben wir keine Verzögerungen mehr und können uns auf unser Kerngeschäft konzentrieren.",
    rating: 4,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 8000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused])

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Was unsere Kunden sagen</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie, wie wir Unternehmen dabei helfen, ihre Logistikziele zu erreichen
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-100 min-h-[300px] flex flex-col justify-center">
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gray-300" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">
                {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Nächstes Testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#18794E] w-8" : "bg-gray-300 w-3"
                }`}
                aria-label={`Zu Testimonial ${index + 1} gehen`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
