import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export default function FocusSoundDetailPage({ params }: PageProps) {
  // In a real app, you would fetch this data based on the slug
  const focusSound = {
    title: "Alpha Waves for Focus",
    description:
      "Alpha waves (8-12 Hz) help create a state of relaxed alertness, ideal for studying, creative work, and sustained focus. This track uses binaural beats technology to help your brain synchronize to these beneficial frequencies.",
    duration: "60 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Binaural Beats",
    creator: "SoundMind Audio Lab",
    benefits: [
      "Enhanced focus and concentration",
      "Reduced mental fatigue",
      "Improved learning ability",
      "Increased creative thinking",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/focus" className="inline-flex items-center text-sm mb-6 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Focus Sounds
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
            <Image src={focusSound.image || "/placeholder.svg"} alt={focusSound.title} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="rounded-full gap-2">
                <Play className="h-5 w-5 fill-white" />
                Play Sound
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2">{focusSound.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span className="flex items-center mr-4">
              <Clock className="mr-1 h-4 w-4" />
              {focusSound.duration}
            </span>
            <span>{focusSound.category}</span>
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
            <h2>About this focus sound</h2>
            <p>{focusSound.description}</p>

            <h2>Benefits</h2>
            <ul>
              {focusSound.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2>How to use</h2>
            <p>
              For best results, listen with headphones to experience the full binaural effect. Use during study
              sessions, creative work, or whenever you need sustained focus. You can play this at a low volume in the
              background while working. This track is designed for continuous play and can be looped for longer
              sessions.
            </p>
          </div>
        </div>

        <div>
          <div className="border rounded-xl p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h3 className="font-medium">{focusSound.creator}</h3>
                <p className="text-sm text-muted-foreground">Audio Engineering Team</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Our audio engineering team creates scientifically-designed sound frequencies to enhance cognitive
              performance and mental states.
            </p>

            <h3 className="font-medium mb-3">Related Focus Sounds</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/focus/theta-meditation" className="text-sm hover:text-primary">
                  Theta Meditation (45 min)
                </Link>
              </li>
              <li>
                <Link href="/focus/pink-noise" className="text-sm hover:text-primary">
                  Pink Noise (180 min)
                </Link>
              </li>
              <li>
                <Link href="/focus/cafe-background" className="text-sm hover:text-primary">
                  Cafe Background (60 min)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

