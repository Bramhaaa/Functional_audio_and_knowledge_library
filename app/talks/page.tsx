import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioCard from "@/components/audio-card"
import PageHeader from "@/components/page-header"

export default function KnowledgeTalksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Knowledge Talks"
        description="Gain insights on mindset, productivity, and emotional intelligence"
      />

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="mindset">Mindset</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="emotional">Emotional Intelligence</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard
              title="The Power of Believing You Can Improve"
              description="Carol Dweck's groundbreaking research on growth mindset"
              duration="10 min"
              image="https://img.youtube.com/vi/_X0mgOOSpLU/maxresdefault.jpg"
              href="/talks/power-of-believing"
            />
            <AudioCard
              title="Daniel Goleman Introduces Emotional Intelligence"
              description="Understanding the four domains of emotional intelligence and its impact on success"
              duration="5 min"
              image="https://img.youtube.com/vi/Y7m9eNoB3NU/maxresdefault.jpg"
              href="/talks/emotional-intelligence-goleman"
            />
            <AudioCard
              title="The Space Between Self-Esteem and Self Compassion"
              description="Kristin Neff explores the transformative power of self-compassion and its benefits over self-esteem"
              duration="18 min"
              image="https://img.youtube.com/vi/IvtZBUSplr4/maxresdefault.jpg"
              href="/talks/self-compassion"
            />
            <AudioCard
              title="Emotional Intelligence"
              description="Understanding and managing emotions effectively"
              duration="25 min"
              image="/placeholder.svg?height=200&width=400"
              href="/talks/emotional-intelligence"
            />
            <AudioCard
              title="Leadership Principles"
              description="Core concepts for effective leadership"
              duration="30 min"
              image="/placeholder.svg?height=200&width=400"
              href="/talks/leadership-principles"
            />
            <AudioCard
              title="Deep Work Strategies"
              description="Achieve flow state and maximize focus"
              duration="20 min"
              image="/placeholder.svg?height=200&width=400"
              href="/talks/deep-work-strategies"
            />
            <AudioCard
              title="Stress Management"
              description="Practical techniques to reduce and manage stress"
              duration="15 min"
              image="/placeholder.svg?height=200&width=400"
              href="/talks/stress-management"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="productivity" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard
              title="The Power of Believing You Can Improve"
              description="Carol Dweck's groundbreaking research on growth mindset"
              duration="10 min"
              image="https://img.youtube.com/vi/_X0mgOOSpLU/maxresdefault.jpg"
              href="/talks/power-of-believing"
            />
            <AudioCard
              title="Deep Work Strategies"
              description="Achieve flow state and maximize focus"
              duration="20 min"
              image="/placeholder.svg?height=200&width=400"
              href="/talks/deep-work-strategies"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

