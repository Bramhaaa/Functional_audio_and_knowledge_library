import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export default function WorkoutDetailPage({ params }: PageProps) {
  // In a real app, you would fetch this data based on the slug
  const workout = {
    title: "Power HIIT Workout",
    description:
      "This high-intensity interval training session is designed to maximize calorie burn and improve cardiovascular fitness in a short amount of time. Follow along with our expert trainer for a full-body workout.",
    duration: "25 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "HIIT",
    instructor: "Michael Chen",
    benefits: [
      "Increased calorie burn",
      "Improved cardiovascular health",
      "Enhanced metabolic rate",
      "No equipment needed",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/workouts" className="inline-flex items-center text-sm mb-6 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Workouts
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
            <Image src={workout.image || "/placeholder.svg"} alt={workout.title} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="rounded-full gap-2">
                <Play className="h-5 w-5 fill-white" />
                Start Workout
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2">{workout.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span className="flex items-center mr-4">
              <Clock className="mr-1 h-4 w-4" />
              {workout.duration}
            </span>
            <span>{workout.category}</span>
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
            <h2>About this workout</h2>
            <p>{workout.description}</p>

            <h2>Benefits</h2>
            <ul>
              {workout.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2>How to prepare</h2>
            <p>
              Wear comfortable workout clothes and supportive shoes. Have a water bottle nearby and a towel if needed.
              Make sure you have enough space to move freely. It's recommended to warm up for 5 minutes before starting
              this high-intensity workout.
            </p>
          </div>
        </div>

        <div>
          <div className="border rounded-xl p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h3 className="font-medium">{workout.instructor}</h3>
                <p className="text-sm text-muted-foreground">Fitness Instructor</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Michael is a certified personal trainer with expertise in HIIT, strength training, and functional fitness.
            </p>

            <h3 className="font-medium mb-3">Related Workouts</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/workouts/full-body-hiit" className="text-sm hover:text-primary">
                  Full Body HIIT (35 min)
                </Link>
              </li>
              <li>
                <Link href="/workouts/breathwork-energy" className="text-sm hover:text-primary">
                  Breathwork for Energy (15 min)
                </Link>
              </li>
              <li>
                <Link href="/workouts/recovery-stretching" className="text-sm hover:text-primary">
                  Recovery Stretching (20 min)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

