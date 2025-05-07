"use client"

import dynamic from "next/dynamic"

// Dynamically import the map component with SSR disabled
const InteractiveMap = dynamic(() => import("@/components/interactive-map"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center bg-gray-100">
      <p>Loading map...</p>
    </div>
  ),
})

export default function MapClientWrapper() {
  return <InteractiveMap />
}
