import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlissfulDeepRelaxationPage({ params }: PageProps) {
  const meditation = {
    title: "Blissful Deep Relaxation",
    description:
      "A guided meditation journey into a deep state of relaxation and calmness. This practice helps you release tension from your body and mind, leading to a profound sense of peace and tranquility. Perfect for stress relief and deep relaxation.",
    duration: "12 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Relaxation",
    instructor: "The Mindful Movement",
    instructorBio: "The Mindful Movement creates guided meditations that help people achieve deep states of relaxation and inner peace. Their approach combines gentle guidance with soothing background music to create a truly blissful experience.",
    benefits: [
      "Deep relaxation of body and mind",
      "Reduces stress and anxiety",
      "Improves sleep quality",
      "Enhances overall well-being",
      "Promotes emotional balance"
    ],
    preparation: [
      "Find a quiet, comfortable space",
      "Lie down in a comfortable position",
      "Use a pillow under your head and knees if needed",
      "Cover yourself with a light blanket",
      "Close your eyes and take a few deep breaths"
    ],
    videoId: "Jyy0ra2WcQQ"
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
              src={`https://www.youtube.com/embed/${meditation.videoId}?si=P22aCf7fO21LX8dW`}
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

            <h2>Practice Tips</h2>
            <ul>
              <li>Allow yourself to fully surrender to the experience</li>
              <li>Let go of any expectations or judgments</li>
              <li>Focus on your breath and the sensations in your body</li>
              <li>Practice regularly for maximum benefits</li>
              <li>Use this meditation before bed for better sleep</li>
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
                <Link href="/meditations/focus-meditation-with-music" className="text-sm hover:text-primary">
                  Focus Meditation with Music (5 min)
                </Link>
              </li>
              <li>
                <Link href="/meditations/healing-meditation" className="text-sm hover:text-primary">
                  Guided Meditation for Healing & Recovery (15 min)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 