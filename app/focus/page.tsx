import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioCard from "@/components/audio-card"
import PageHeader from "@/components/page-header"

export default function FocusSoundsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Focus Sounds" description="Enhance concentration with binaural beats and ambient sounds" />

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="binaural">Binaural Beats</TabsTrigger>
          <TabsTrigger value="ambient">Ambient</TabsTrigger>
          <TabsTrigger value="nature">Nature</TabsTrigger>
          <TabsTrigger value="white-noise">White Noise</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard
              title="Alpha Waves for Focus"
              description="8-12 Hz frequencies to enhance concentration"
              duration="60 min"
              image="/placeholder.svg?height=200&width=400"
              href="/focus/alpha-waves"
            />
            <AudioCard
              title="Theta Meditation"
              description="4-8 Hz frequencies for deep relaxation and creativity"
              duration="45 min"
              image="/placeholder.svg?height=200&width=400"
              href="/focus/theta-meditation"
            />
            <AudioCard
              title="Rainforest Ambience"
              description="Immersive natural sounds for deep work"
              duration="120 min"
              image="/placeholder.svg?height=200&width=400"
              href="/focus/rainforest"
            />
            <AudioCard
              title="Ocean Waves"
              description="Rhythmic wave sounds for sustained focus"
              duration="90 min"
              image="/placeholder.svg?height=200&width=400"
              href="/focus/ocean-waves"
            />
            <AudioCard
              title="Cafe Background"
              description="Gentle cafe ambience for productive work"
              duration="60 min"
              image="/placeholder.svg?height=200&width=400"
              href="/focus/cafe-background"
            />
            <AudioCard
              title="Pink Noise"
              description="Balanced frequency noise for concentration"
              duration="180 min"
              image="/placeholder.svg?height=200&width=400"
              href="/focus/pink-noise"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="nature" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard
              title="Rainforest Ambience"
              description="Immersive natural sounds for deep work"
              duration="120 min"
              image="/placeholder.svg?height=200&width=400"
              href="/focus/rainforest"
            />
            <AudioCard
              title="Ocean Waves"
              description="Rhythmic wave sounds for sustained focus"
              duration="90 min"
              image="/placeholder.svg?height=200&width=400"
              href="/focus/ocean-waves"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

