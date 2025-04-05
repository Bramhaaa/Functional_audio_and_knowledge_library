import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioCard from "@/components/audio-card"
import PageHeader from "@/components/page-header"

export default function MeditationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Guided Meditations"
        description="Enhance your focus, healing, and relaxation with our guided meditation sessions"
      />

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="focus">Focus</TabsTrigger>
          <TabsTrigger value="healing">Healing</TabsTrigger>
          <TabsTrigger value="relaxation">Relaxation</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard
              title="Focus Meditation with Music"
              description="A guided meditation that helps strengthen your focus muscles through music"
              duration="5 min"
              image={`https://img.youtube.com/vi/zSkFFW--Ma0/maxresdefault.jpg`}
              href="/meditations/focus-meditation"
            />
            <AudioCard
              title="Guided Meditation for Healing & Recovery"
              description="A 15-minute meditation to help you reset, reconstruct, and realign yourself through healing energy"
              duration="15 min"
              image={`https://img.youtube.com/vi/7g96Zq9NSqo/maxresdefault.jpg`}
              href="/meditations/healing-meditation"
            />
            <AudioCard
              title="Healing Visualization"
              description="Support your body's natural healing process"
              duration="20 min"
              image="/placeholder.svg?height=200&width=400"
              href="/meditations/healing-visualization"
            />
            <AudioCard
              title="Focus Enhancement"
              description="Sharpen your concentration and mental clarity"
              duration="12 min"
              image="/placeholder.svg?height=200&width=400"
              href="/meditations/focus-enhancement"
            />
            <AudioCard
              title="Deep Sleep Meditation"
              description="Prepare your mind and body for restful sleep"
              duration="30 min"
              image="/placeholder.svg?height=200&width=400"
              href="/meditations/deep-sleep"
            />
            <AudioCard
              title="Anxiety Relief"
              description="Calm your nervous system and find peace"
              duration="18 min"
              image="/placeholder.svg?height=200&width=400"
              href="/meditations/anxiety-relief"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="focus" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard
              title="Focus Enhancement"
              description="Sharpen your concentration and mental clarity"
              duration="12 min"
              image="/placeholder.svg?height=200&width=400"
              href="/meditations/focus-enhancement"
            />
            <AudioCard
              title="Study Session Prep"
              description="Optimize your mind for learning and retention"
              duration="8 min"
              image="/placeholder.svg?height=200&width=400"
              href="/meditations/study-session"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

