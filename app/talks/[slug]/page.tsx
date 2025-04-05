import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export default function KnowledgeTalkDetailPage({ params }: PageProps) {
  // In a real app, you would fetch this data based on the slug
  const talk = {
    title: "Productivity Mastery",
    description:
      "Learn practical techniques to maximize your daily output and achieve more in less time. This talk covers time management, prioritization, deep work strategies, and how to overcome procrastination.",
    duration: "18 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Productivity",
    speaker: "Dr. Emma Wilson",
    keyPoints: [
      "The 80/20 principle for maximum output",
      "Time blocking techniques",
      "Managing digital distractions",
      "Creating effective work environments",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/talks" className="inline-flex items-center text-sm mb-6 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Knowledge Talks
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
            <Image src={talk.image || "/placeholder.svg"} alt={talk.title} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="rounded-full gap-2">
                <Play className="h-5 w-5 fill-white" />
                Play Talk
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2">{talk.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span className="flex items-center mr-4">
              <Clock className="mr-1 h-4 w-4" />
              {talk.duration}
            </span>
            <span>{talk.category}</span>
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
            <h2>About this talk</h2>
            <p>{talk.description}</p>

            <h2>Key Points</h2>
            <ul>
              {talk.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <h2>Who this is for</h2>
            <p>
              This talk is ideal for professionals, students, entrepreneurs, and anyone looking to improve their
              productivity and time management skills. Whether you're struggling with procrastination or simply want to
              optimize your workflow, you'll find valuable insights and actionable strategies.
            </p>
          </div>
        </div>

        <div>
          <div className="border rounded-xl p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h3 className="font-medium">{talk.speaker}</h3>
                <p className="text-sm text-muted-foreground">Productivity Expert</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Dr. Wilson is a renowned productivity researcher and author of several bestselling books on time
              management and personal effectiveness.
            </p>

            <h3 className="font-medium mb-3">Related Talks</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/talks/deep-work" className="text-sm hover:text-primary">
                  Deep Work Strategies (20 min)
                </Link>
              </li>
              <li>
                <Link href="/talks/growth-mindset" className="text-sm hover:text-primary">
                  Growth Mindset Development (22 min)
                </Link>
              </li>
              <li>
                <Link href="/talks/stress-management" className="text-sm hover:text-primary">
                  Stress Management (15 min)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

