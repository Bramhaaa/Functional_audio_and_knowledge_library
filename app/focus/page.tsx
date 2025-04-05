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
              description="Study Music Alpha Waves: Relaxing Studying Music, Brain Power, Focus Concentration Music"
              duration="161 min"
              image="https://img.youtube.com/vi/WPni755-Krg/maxresdefault.jpg"
              href="/focus/alpha-waves-focus"
            />
            <AudioCard
              title="Theta Meditation"
              description="The Hidden Valley: Ambient Relaxing Music for Stress Relief, Sleep & Meditation"
              duration="180 min"
              image="https://img.youtube.com/vi/2OEL4P1Rz04/maxresdefault.jpg"
              href="/focus/theta-meditation"
            />
            <AudioCard
              title="Beethoven - Moonlight Sonata (FULL)"
              description="Beethoven - Moonlight Sonata (FULL)"
              duration="15 min"
              image="https://img.youtube.com/vi/4Tr0otuiQuU/maxresdefault.jpg"
              href="/focus/rainforest-ambience"
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
              description="Beethoven - Moonlight Sonata (FULL)"
              duration="15 min"
              image="https://img.youtube.com/vi/4Tr0otuiQuU/maxresdefault.jpg"
              href="/focus/rainforest-ambience"
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

