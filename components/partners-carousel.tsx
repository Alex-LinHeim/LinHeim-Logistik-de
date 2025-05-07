"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const partners = [
  { name: "UPS", logo: "/images/partners/ups-logo.png", link: "/partners/ups" },
  { name: "DHL", logo: "/images/partners/dhl-logo.png", link: "/partners/dhl" },
  { name: "DPD", logo: "/images/partners/dpd-logo.png", link: "/partners/dpd" },
  { name: "EVERGREEN", logo: "/images/partners/evergreen-logo.png", link: "/partners/evergreen" },
  { name: "COSCO SHIPPING", logo: "/images/partners/cosco-logo.png", link: "/partners/cosco" },
  { name: "OOCL", logo: "/images/partners/oocl-logo.png", link: "/partners/oocl" },
]

export default function PartnersCarousel() {
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current)
      }
    }
  }, [])

  return (
    <section className="py-12 bg-white" id="partners">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Trusted Partners</h2>
          <p className="mt-2 text-sm text-gray-600">Collaborating with leading logistics companies worldwide</p>
        </div>

        <div
          ref={carouselRef}
          className="relative overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <div className={`flex items-center space-x-12 py-4 ${isVisible ? "animate-marquee" : ""} whitespace-nowrap`}>
            {[...partners, ...partners].map((partner, index) => (
              <Link key={index} href={partner.link} className="flex-shrink-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-16 relative mb-2">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-[#18794E] transition-colors">
                    {partner.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/partners" className="text-sm text-[#18794E] hover:underline">
            View all partners
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
