"use client"

import { useEffect, useRef, useState } from "react"

// Define the locations outside the component
const locations = [
  {
    name: "Dortmund Headquarters",
    country: "Germany",
    position: [51.513, 7.465],
    description: "Headquarters in Dortmund, Germany",
    link: "/locations/dortmund",
  },
  {
    name: "Rotterdam Port Office",
    country: "Netherlands",
    position: [51.9225, 4.47917],
    description: "Port office in Rotterdam, Netherlands",
    link: "/locations/rotterdam",
  },
  {
    name: "Houston Branch",
    country: "USA",
    position: [29.7604, -95.3698],
    description: "Branch office in Houston, USA",
    link: "/locations/houston",
  },
  {
    name: "Shenzhen Office",
    country: "China",
    position: [22.5431, 114.0579],
    description: "Office in Shenzhen, China",
    link: "/locations/shenzhen",
  },
]

export default function InteractiveMap() {
  const mapRef = useRef(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set isClient to true once component mounts
    setIsClient(true)

    // Import Leaflet dynamically only on the client side
    const initializeMap = async () => {
      if (typeof window !== "undefined" && mapContainerRef.current && !mapRef.current) {
        const L = (await import("leaflet")).default

        // Fix Leaflet icon paths
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        })

        // Create map
        const map = L.map(mapContainerRef.current).setView([30, 10], 2)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map)

        // Add markers
        locations.forEach((location) => {
          const marker = L.marker(location.position as [number, number]).addTo(map)
          marker.bindPopup(`<b>${location.name}</b><br>${location.description}`)
        })

        mapRef.current = map
      }
    }

    if (isClient) {
      initializeMap()
    }

    return () => {
      if (mapRef.current) {
        // @ts-ignore - TypeScript doesn't know about the map's remove method
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [isClient])

  return (
    <section className="py-12 bg-white" id="locations">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Global Network</h2>
          <p className="mt-2 text-sm text-gray-600">Our strategic locations worldwide</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div ref={mapContainerRef} className="h-[400px] w-full" />
        </div>
      </div>
    </section>
  )
}
