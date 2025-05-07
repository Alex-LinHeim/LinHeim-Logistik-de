"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/images/linheim-logo.jpeg" alt="Linheim Logistik" width={180} height={60} className="h-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#18794E] flex items-center">
            <span className="mr-1">Home</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium transition-colors hover:text-[#18794E] flex items-center">
                <span className="mr-1">Our Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/services/sea-freight">Sea Freight</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/land-transport">Land Transport</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/air-freight">Air Freight</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/customs">Customs Clearance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/warehousing">Warehousing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/logistics-solution">Logistics Solution</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/sustainability" className="text-sm font-medium transition-colors hover:text-[#18794E]">
            Sustainability
          </Link>

          <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#18794E]">
            About Us
          </Link>

          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-[#18794E]">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button aria-label="Search" className="p-2">
            <Search className="h-5 w-5" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-sm font-medium">
                <span className="mr-1">English</span>
                <Globe className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium transition-colors hover:text-[#18794E]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="block text-sm font-medium">
              <div className="flex justify-between items-center py-2" onClick={() => setIsOpen(false)}>
                <span>Our Services</span>
              </div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/services/sea-freight"
                  className="block text-sm py-1 hover:text-[#18794E]"
                  onClick={() => setIsOpen(false)}
                >
                  Sea Freight
                </Link>
                <Link
                  href="/services/land-transport"
                  className="block text-sm py-1 hover:text-[#18794E]"
                  onClick={() => setIsOpen(false)}
                >
                  Land Transport
                </Link>
                <Link
                  href="/services/air-freight"
                  className="block text-sm py-1 hover:text-[#18794E]"
                  onClick={() => setIsOpen(false)}
                >
                  Air Freight
                </Link>
                <Link
                  href="/services/customs"
                  className="block text-sm py-1 hover:text-[#18794E]"
                  onClick={() => setIsOpen(false)}
                >
                  Customs Clearance
                </Link>
                <Link
                  href="/services/warehousing"
                  className="block text-sm py-1 hover:text-[#18794E]"
                  onClick={() => setIsOpen(false)}
                >
                  Warehousing
                </Link>
                <Link
                  href="/services/logistics-solution"
                  className="block text-sm py-1 hover:text-[#18794E]"
                  onClick={() => setIsOpen(false)}
                >
                  Logistics Solution
                </Link>
              </div>
            </div>
            <Link
              href="/sustainability"
              className="block text-sm font-medium transition-colors hover:text-[#18794E]"
              onClick={() => setIsOpen(false)}
            >
              Sustainability
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium transition-colors hover:text-[#18794E]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium transition-colors hover:text-[#18794E]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
