import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock, Download, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

const talks = {
  "power-of-believing": {
    title: "The Power of Believing You Can Improve",
    description:
      "Carol Dweck researches 'growth mindset' — the idea that we can grow our brain's capacity to learn and to solve problems. In this talk, she describes two ways to think about a problem that's slightly too hard for you to solve. Are you not smart enough to solve it ... or have you just not solved it yet? A great introduction to this influential field.",
    duration: "10 min",
    image: "https://img.youtube.com/vi/_X0mgOOSpLU/maxresdefault.jpg",
    category: "Mindset",
    speaker: "Carol Dweck",
    videoId: "_X0mgOOSpLU",
    keyPoints: [
      "The power of 'not yet' vs. failure",
      "Growth mindset vs. fixed mindset",
      "How effort and difficulty lead to learning",
      "Transforming education through mindset",
      "Real-world examples of growth mindset success"
    ],
  },
  "emotional-intelligence-goleman": {
    title: "Daniel Goleman Introduces Emotional Intelligence",
    description:
      "Daniel Goleman introduces the concept of emotional intelligence, explaining its four key domains: self-awareness, self-management, empathy, and social skills. He discusses how emotional intelligence develops in the brain, its impact on learning and success, and why it should be taught systematically in schools. Goleman also addresses gender differences in emotional intelligence and how it manifests across different cultures.",
    duration: "5 min",
    image: "https://img.youtube.com/vi/Y7m9eNoB3NU/maxresdefault.jpg",
    category: "Emotional Intelligence",
    speaker: "Daniel Goleman",
    videoId: "Y7m9eNoB3NU",
    keyPoints: [
      "The four domains of emotional intelligence: self-awareness, self-management, empathy, and social skills",
      "How emotional intelligence develops in the brain",
      "The impact of emotional intelligence on learning and success",
      "The importance of teaching emotional intelligence in schools",
      "Gender differences and cultural variations in emotional intelligence"
    ],
  },
  "self-compassion": {
    title: "The Space Between Self-Esteem and Self Compassion",
    description:
      "Kristin Neff explores the transformative power of self-compassion and its benefits over self-esteem. She shares her personal journey with self-compassion and explains how it differs from self-esteem, why it's more beneficial, and how to practice it. Neff discusses the three core components of self-compassion: self-kindness, common humanity, and mindfulness, and how they contribute to mental well-being.",
    duration: "18 min",
    image: "https://img.youtube.com/vi/IvtZBUSplr4/maxresdefault.jpg",
    category: "Wellness",
    speaker: "Kristin Neff",
    videoId: "IvtZBUSplr4",
    keyPoints: [
      "The difference between self-esteem and self-compassion",
      "The three core components of self-compassion: self-kindness, common humanity, and mindfulness",
      "How self-compassion reduces stress and improves mental well-being",
      "The role of self-compassion in motivation and personal growth",
      "Practical ways to cultivate self-compassion in daily life"
    ],
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence",
    description: "Understanding and managing emotions effectively",
    duration: "25 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Emotional Intelligence",
    speaker: "Emotional Intelligence Expert",
    videoId: "",
    keyPoints: [
      "Understanding emotional intelligence",
      "Developing self-awareness",
      "Managing emotions effectively",
      "Building empathy skills",
      "Improving social relationships"
    ],
  },
  "leadership-principles": {
    title: "Leadership Principles",
    description: "Core concepts for effective leadership",
    duration: "30 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Leadership",
    speaker: "Leadership Expert",
    videoId: "",
    keyPoints: [
      "Core leadership principles",
      "Building effective teams",
      "Communication strategies",
      "Decision-making frameworks",
      "Leading through change"
    ],
  },
  "deep-work-strategies": {
    title: "Deep Work Strategies",
    description: "Achieve flow state and maximize focus",
    duration: "20 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Productivity",
    speaker: "Productivity Expert",
    videoId: "",
    keyPoints: [
      "Understanding deep work",
      "Creating focus rituals",
      "Managing distractions",
      "Building concentration stamina",
      "Measuring deep work effectiveness"
    ],
  },
  "stress-management": {
    title: "Stress Management",
    description: "Practical techniques to reduce and manage stress",
    duration: "15 min",
    image: "/placeholder.svg?height=400&width=800",
    category: "Wellness",
    speaker: "Wellness Expert",
    videoId: "",
    keyPoints: [
      "Understanding stress triggers",
      "Mindfulness techniques",
      "Physical stress relief",
      "Cognitive restructuring",
      "Building resilience"
    ],
  }
}

export default function KnowledgeTalkDetailPage({ params }: PageProps) {
  const talk = talks[params.slug as keyof typeof talks]

  if (!talk) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/talks" className="inline-flex items-center text-sm mb-6 hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Knowledge Talks
        </Link>
        <h1 className="text-3xl font-bold mb-4">Talk not found</h1>
        <p>The requested talk could not be found. Please check the URL or return to the talks page.</p>
      </div>
    )
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
            {talk.videoId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${talk.videoId}`}
                title={talk.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            ) : (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Video coming soon</span>
              </div>
            )}
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
              This talk is designed for anyone interested in {talk.category.toLowerCase()}, whether you're looking to improve your own skills, 
              help others develop their potential, or understand how these concepts affect personal and professional growth.
            </p>
          </div>
        </div>

        <div>
          <div className="border rounded-xl p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h3 className="font-medium">{talk.speaker}</h3>
                <p className="text-sm text-muted-foreground">{talk.category} Expert</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {talk.speaker} is an expert in the field of {talk.category.toLowerCase()}, with extensive experience in teaching and applying these principles in real-world settings.
            </p>

            <h3 className="font-medium mb-3">Related Talks</h3>
            <ul className="space-y-3">
              {Object.entries(talks)
                .filter(([key]) => key !== params.slug)
                .slice(0, 3)
                .map(([key, relatedTalk]) => (
                  <li key={key}>
                    <Link href={`/talks/${key}`} className="text-sm hover:text-primary">
                      {relatedTalk.title} ({relatedTalk.duration})
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

