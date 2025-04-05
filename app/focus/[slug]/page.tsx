import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

const focusSounds = {
  "alpha-waves-focus": {
    title: "Alpha Waves for Focus",
    description:
      "YellowBrickCinema's Study Music & Concentration Music is ideal background music to help you study, concentrate, focus and work more effectively. This Study and Focus Music uses alpha waves and binaural beats to boost concentration and brain power, and is the ideal relaxing music for stress relief. Our soothing music for studying can help you study for exams and focus at work.",
    duration: "161 min",
    image: "https://img.youtube.com/vi/WPni755-Krg/maxresdefault.jpg",
    category: "Binaural Beats",
    creator: "YellowBrickCinema",
    videoId: "WPni755-Krg",
    benefits: [
      "Enhanced focus and concentration",
      "Reduced mental fatigue",
      "Improved learning ability",
      "Increased creative thinking",
      "Stress relief and relaxation",
      "Better study performance"
    ],
  },
  "theta-meditation": {
    title: "Theta Meditation",
    description:
      "A beautiful composition by Peder B. Helland, designed to help you relax, sleep, and meditate. This ambient relaxing music creates a peaceful atmosphere perfect for stress relief, deep relaxation, and meditation. The composer's vision is to create a place you can visit whenever you want to sit down and relax, with music that can be described as sleep music, calm music, yoga music, study music, and peaceful music.",
    duration: "180 min",
    image: "https://img.youtube.com/vi/2OEL4P1Rz04/maxresdefault.jpg",
    category: "Ambient",
    creator: "Peder B. Helland",
    videoId: "2OEL4P1Rz04",
    benefits: [
      "Deep relaxation and stress relief",
      "Improved sleep quality",
      "Enhanced meditation experience",
      "Peaceful atmosphere for study",
      "Calm and soothing environment",
      "Yoga and mindfulness support"
    ],
  },
  "rainforest-ambience": {
    title: "Rainforest Ambience",
    description: "Ludwig van Beethoven's Moonlight Sonata, one of the most famous piano pieces ever written. This beautiful composition, officially titled Piano Sonata No. 14 in C-sharp minor 'Quasi una fantasia', Op. 27, No. 2, is known for its hauntingly beautiful first movement. The piece was completed in 1801 and dedicated to Beethoven's pupil, Countess Giulietta Guicciardi.",
    duration: "15 min",
    image: "https://img.youtube.com/vi/4Tr0otuiQuU/maxresdefault.jpg",
    category: "Classical",
    creator: "Ludwig van Beethoven",
    videoId: "4Tr0otuiQuU",
    benefits: [
      "Enhanced focus and concentration",
      "Reduced stress and anxiety",
      "Improved mood and emotional well-being",
      "Increased creativity and inspiration",
      "Better sleep quality",
      "Enhanced memory and learning"
    ],
  },
  "ocean-waves": {
    title: "Ocean Waves",
    description: "Rhythmic wave sounds for sustained focus",
    duration: "90 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Nature",
    creator: "Nature Sounds Studio",
    videoId: "",
    benefits: [
      "Calming wave patterns",
      "Stress reduction",
      "Improved focus",
      "Natural white noise",
      "Sleep aid",
      "Meditation support"
    ],
  },
  "cafe-background": {
    title: "Cafe Background",
    description: "Gentle cafe ambience for productive work",
    duration: "60 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Ambient",
    creator: "Ambient Sound Lab",
    videoId: "",
    benefits: [
      "Productive work environment",
      "Social atmosphere",
      "Reduced isolation",
      "Enhanced creativity",
      "Background noise masking",
      "Improved focus"
    ],
  },
  "pink-noise": {
    title: "Pink Noise",
    description: "Balanced frequency noise for concentration",
    duration: "180 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "White Noise",
    creator: "Sound Engineering Lab",
    videoId: "",
    benefits: [
      "Consistent background sound",
      "Improved sleep quality",
      "Enhanced concentration",
      "Reduced distractions",
      "Stress reduction",
      "Tinnitus relief"
    ],
  }
}

export default function FocusSoundDetailPage({ params }: PageProps) {
  const focusSound = focusSounds[params.slug as keyof typeof focusSounds]

  if (!focusSound) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/focus" className="inline-flex items-center text-sm mb-6 hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Focus Sounds
        </Link>
        <h1 className="text-3xl font-bold mb-4">Sound not found</h1>
        <p>The requested focus sound could not be found. Please check the URL or return to the focus sounds page.</p>
      </div>
    )
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
            {focusSound.videoId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${focusSound.videoId}`}
                title={focusSound.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            ) : (
              <Image src={focusSound.image || "/placeholder.svg"} alt={focusSound.title} fill className="object-cover" />
            )}
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
                <p className="text-sm text-muted-foreground">Composer & Musician</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Peder B. Helland is a composer from Norway who creates beautiful, relaxing music for sleep, meditation, and stress relief. His vision is to provide a peaceful space through music where people can relax and find tranquility.
            </p>

            <h3 className="font-medium mb-3">Related Focus Sounds</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/focus/alpha-waves" className="text-sm hover:text-primary">
                  Alpha Waves for Focus
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

