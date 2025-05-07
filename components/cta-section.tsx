import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 bg-[#18794E]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Let's Move Freight Smarter.</h2>
          <p className="mt-4 text-lg text-white/90">
            Get in touch to receive a tailored quote from our logistics experts.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-[#18794E] hover:bg-gray-100">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
