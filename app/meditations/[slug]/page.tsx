import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export default function MeditationDetailPage({ params }: PageProps) {
  const meditation = {
    title: "Guided Meditation for Healing & Recovery",
    description:
      "A powerful 15-minute meditation designed to help you reset, reconstruct, and realign yourself. This practice uses visualization of healing white light to cleanse and regenerate your body, mind, and soul. Perfect for those seeking physical, emotional, or spiritual healing.",
    duration: "15 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Healing",
    instructor: "Meditation Channel",
    instructorBio: "This meditation channel creates transformative guided meditations that help people heal and find balance in their lives. Their practices combine ancient wisdom with modern techniques to facilitate deep healing and personal growth.",
    benefits: [
      "Promotes physical and emotional healing",
      "Cleanses and regenerates the body",
      "Strengthens the mind-body connection",
      "Brings balance and alignment",
      "Enhances self-healing capabilities"
    ],
    preparation: [
      "Find a comfortable seated position on the ground or any surface",
      "Close your eyes and focus on your breath",
      "Allow yourself to come into the present moment",
      "Be open to receiving healing energy",
      "Let go of any expectations and surrender to the process"
    ],
    affirmations: [
      "I am healthy",
      "I am strong",
      "I am guided towards healing and balance"
    ],
    videoId: "7g96Zq9NSqo"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/meditations" className="inline-flex items-center text-sm mb-6 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Meditations
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${meditation.videoId}`}
              title={meditation.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>

          <h1 className="text-3xl font-bold mb-2">{meditation.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span className="flex items-center mr-4">
              <Clock className="mr-1 h-4 w-4" />
              {meditation.duration}
            </span>
            <span>{meditation.category}</span>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Heart className="h-4 w-4" />
              Favorite
            </Button>
          </div>

          <div className="prose max-w-none">
            <h2>About this meditation</h2>
            <p>{meditation.description}</p>

            <h2>Benefits</h2>
            <ul>
              {meditation.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2>How to prepare</h2>
            <ul>
              {meditation.preparation.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            <h2>Healing Affirmations</h2>
            <ul>
              {meditation.affirmations.map((affirmation, index) => (
                <li key={index}>{affirmation}</li>
              ))}
            </ul>

            <h2>Practice Tips</h2>
            <ul>
              <li>Stay connected to the healing white light visualization</li>
              <li>Notice any tingling sensations or colors that may appear</li>
              <li>Allow the light to penetrate every cell of your body</li>
              <li>Repeat the affirmations softly to yourself</li>
              <li>Stay in the healing energy for as long as needed</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="border rounded-xl p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h3 className="font-medium">{meditation.instructor}</h3>
                <p className="text-sm text-muted-foreground">Meditation Instructor</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {meditation.instructorBio}
            </p>

            <h3 className="font-medium mb-3">Related Meditations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/meditations/evening-wind-down" className="text-sm hover:text-primary">
                  Evening Wind Down (15 min)
                </Link>
              </li>
              <li>
                <Link href="/meditations/focus-enhancement" className="text-sm hover:text-primary">
                  Focus Enhancement (12 min)
                </Link>
              </li>
              <li>
                <Link href="/meditations/gratitude-practice" className="text-sm hover:text-primary">
                  Gratitude Practice (8 min)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

