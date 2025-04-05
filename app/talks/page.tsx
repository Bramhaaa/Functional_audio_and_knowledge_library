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
              href="/talks/growth-mindset"
            />
            <AudioCard
              title="Growth Mindset Development"
              description="Cultivate a mindset for continuous improvement"
              duration="22 min"
              image="/placeholder.svg?height=200&width=400"
              href="/talks/growth-mindset"
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
              href="/talks/deep-work"
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
              href="/talks/growth-mindset"
            />
            <AudioCard
              title="Deep Work Strategies"
              description="Achieve flow state and maximize focus"
              duration="20 min"
              image="/placeholder.svg?height=200&width=400"
              href="/talks/deep-work"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

