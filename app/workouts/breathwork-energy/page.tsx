import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export default function BreathworkEnergyPage({ params }: PageProps) {
  const workout = {
    title: "Breathwork for Energy",
    description:
      "A powerful breathwork session designed to sharpen focus and concentration. This practice combines ancient breathing techniques with modern science to help you unlock your full potential and transform your life. Perfect for boosting energy levels and mental clarity.",
    duration: "15 min",
    difficulty: "All Levels",
    instructor: "Mike Maher",
    instructorBio: "Mike Maher is a breathwork expert with nearly a decade of experience. He combines ancient techniques with modern science to help people transform their lives through the power of breath. Mike offers one-on-one coaching sessions and has helped countless individuals improve their well-being through breathwork.",
    benefits: [
      "Sharpens focus and concentration",
      "Boosts energy levels",
      "Reduces stress and anxiety",
      "Improves mental clarity",
      "Enhances overall well-being"
    ],
    preparation: [
      "Find a quiet, comfortable space",
      "Sit in a comfortable position with good posture",
      "Close your eyes and relax your body",
      "Take a few normal breaths to settle in",
      "Be ready to follow the guided breathing pattern"
    ],
    videoId: "FJJazKtH_9I",
    safetyNotice: "Do not practice this breathwork during pregnancy, or if you are epileptic. People with cardiovascular issues, or any other serious health conditions, should always consult a medical professional before starting breathwork. These breathing exercises are a guide only, you should always listen to your own body and not push yourself, if you feel unwell STOP."
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
            <h2>About this practice</h2>
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

            <h2>Practice Tips</h2>
            <ul>
              <li>Listen to your body and don't push beyond your comfort level</li>
              <li>Maintain a comfortable pace throughout the practice</li>
              <li>Focus on the quality of your breath rather than quantity</li>
              <li>Practice regularly for best results</li>
              <li>Stay hydrated before and after the session</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg mt-6">
              <h3 className="text-yellow-800 font-medium mb-2">Safety Notice</h3>
              <p className="text-yellow-700 text-sm">{workout.safetyNotice}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="border rounded-xl p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h3 className="font-medium">{workout.instructor}</h3>
                <p className="text-sm text-muted-foreground">Breathwork Expert</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {workout.instructorBio}
            </p>

            <h3 className="font-medium mb-3">Related Practices</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/workouts/power-hiit-workout" className="text-sm hover:text-primary">
                  Power HIIT Workout (30 min)
                </Link>
              </li>
              <li>
                <Link href="/workouts/endurance-builder" className="text-sm hover:text-primary">
                  Endurance Builder (30 min)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 