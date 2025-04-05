import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export default function EnduranceBuilderPage({ params }: PageProps) {
  const workout = {
    title: "Endurance Builder",
    description:
      "A 20-minute full body workout designed to build endurance and strength. This no-equipment workout by Pamela Reif combines cardio and strength exercises to improve stamina and overall fitness. Perfect for building endurance and toning your entire body.",
    duration: "20 min",
    difficulty: "Intermediate",
    instructor: "Pamela Reif",
    instructorBio: "Pamela Reif is a renowned fitness trainer and influencer known for her effective workout routines. Her approach combines high-intensity exercises with proper form to help people achieve their fitness goals.",
    benefits: [
      "Builds endurance and stamina",
      "Tones entire body",
      "Improves cardiovascular health",
      "No equipment needed",
      "Can be done anywhere"
    ],
    preparation: [
      "Find a comfortable space with enough room to move",
      "Wear comfortable workout clothes",
      "Have a water bottle nearby",
      "Use a yoga mat if available",
      "Warm up with light stretching"
    ],
    videoId: "UBMk30rjy0o"
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
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${workout.videoId}?si=P22aCf7fO21LX8dW`}
              title={workout.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>

          <h1 className="text-3xl font-bold mb-2">{workout.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span className="flex items-center mr-4">
              <Clock className="mr-1 h-4 w-4" />
              {workout.duration}
            </span>
            <span>{workout.difficulty}</span>
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
            <ul>
              {workout.preparation.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            <h2>Workout Tips</h2>
            <ul>
              <li>Maintain proper form throughout each exercise</li>
              <li>Stay hydrated and take breaks when needed</li>
              <li>Focus on controlled movements rather than speed</li>
              <li>Listen to your body and modify exercises if necessary</li>
              <li>Practice regularly for best results</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="border rounded-xl p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h3 className="font-medium">{workout.instructor}</h3>
                <p className="text-sm text-muted-foreground">Fitness Trainer</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {workout.instructorBio}
            </p>

            <h3 className="font-medium mb-3">Related Workouts</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/workouts/power-hiit-workout" className="text-sm hover:text-primary">
                  Power HIIT Workout (30 min)
                </Link>
              </li>
              <li>
                <Link href="/workouts/breathwork-energy" className="text-sm hover:text-primary">
                  Breathwork for Energy (15 min)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 