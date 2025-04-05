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
    title: "The Power of Believing You Can Improve",
    description:
      "Carol Dweck researches 'growth mindset' — the idea that we can grow our brain's capacity to learn and to solve problems. In this talk, she describes two ways to think about a problem that's slightly too hard for you to solve. Are you not smart enough to solve it ... or have you just not solved it yet? A great introduction to this influential field.",
    duration: "10 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Mindset",
    speaker: "Carol Dweck",
    keyPoints: [
      "The power of 'not yet' vs. failure",
      "Growth mindset vs. fixed mindset",
      "How effort and difficulty lead to learning",
      "Transforming education through mindset",
      "Real-world examples of growth mindset success"
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
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_X0mgOOSpLU"
              title="The power of believing that you can improve | Carol Dweck | TED"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
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
              This talk is essential viewing for educators, parents, students, and anyone interested in personal development. 
              Whether you're looking to improve your own learning abilities, help others develop their potential, or understand 
              how mindset affects achievement, Carol Dweck's insights on growth mindset will provide valuable perspectives 
              and practical applications for both personal and professional growth.
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
              Carol Dweck is a pioneering researcher in the field of motivation, personality, and development. She is the Lewis and Virginia Eaton Professor of Psychology at Stanford University and the author of the bestselling book "Mindset: The New Psychology of Success."
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

