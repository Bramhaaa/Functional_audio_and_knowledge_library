import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TakeABreakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f4f1] to-[#d9f0f7] px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          <Link
            href="/"
            className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 hover:bg-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="text-center pt-16 pb-12">
            <h1 className="text-4xl font-bold mb-4">
              Take <span className="font-normal">a</span> Break
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Take a break every 60-90 minutes. Mindfulness exercises enhance focus, reduce stress, and improve
              emotional well-being. Consistent, regular sessions are most effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image src="/icons/breathing.svg" alt="Breathing" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-1">Breathing</h3>
              <div className="text-sm text-gray-500 mb-2">3-5 minutes</div>
              <p className="text-sm text-gray-600">Helps reduce stress and blood pressure.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image src="/icons/neck-exercise.svg" alt="Neck Exercise" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-1">Neck Exercise</h3>
              <div className="text-sm text-gray-500 mb-2">5-14 minutes</div>
              <p className="text-sm text-gray-600">Relieves tension, reduces pain, and improves flexibility.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image src="/icons/meditation.svg" alt="Meditation" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-1">Meditation</h3>
              <div className="text-sm text-gray-500 mb-2">8-13 minutes</div>
              <p className="text-sm text-gray-600">Puts you in a relaxed state and improves focus.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image src="/icons/body-scan.svg" alt="Full Body Scan" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-1">Full Body Scan</h3>
              <div className="text-sm text-gray-500 mb-2">8-16 minutes</div>
              <p className="text-sm text-gray-600">Tunes you into your body and surroundings.</p>
            </div>
          </div>

          <div className="text-center text-gray-500 pb-8">Thanks for your help!</div>
        </div>
      </div>
    </div>
  )
}

