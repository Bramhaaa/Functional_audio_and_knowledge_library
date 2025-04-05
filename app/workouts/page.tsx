import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioCard from "@/components/audio-card"
import PageHeader from "@/components/page-header"

export default function WorkoutsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Workout Sessions"
        description="Enhance your fitness with HIIT, breathwork, and endurance training sessions"
      />

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="hiit">HIIT</TabsTrigger>
          <TabsTrigger value="breathwork">Breathwork</TabsTrigger>
          <TabsTrigger value="endurance">Endurance</TabsTrigger>
          <TabsTrigger value="stretching">Stretching</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard
              title="Power HIIT Workout"
              description="High-intensity interval training for maximum results"
              duration="25 min"
              image="/placeholder.svg?height=200&width=400"
              href="/workouts/power-hiit"
            />
            <AudioCard
              title="Breathwork for Energy"
              description="Breathing techniques to boost your energy levels"
              duration="15 min"
              image="/placeholder.svg?height=200&width=400"
              href="/workouts/breathwork-energy"
            />
            <AudioCard
              title="Endurance Builder"
              description="Progressive training to improve stamina and endurance"
              duration="30 min"
              image="/placeholder.svg?height=200&width=400"
              href="/workouts/endurance-builder"
            />
            <AudioCard
              title="Neck Exercise Routine"
              description="Relieve tension and improve neck flexibility"
              duration="10 min"
              image="/placeholder.svg?height=200&width=400"
              href="/workouts/neck-exercise"
            />
            <AudioCard
              title="Full Body HIIT"
              description="Complete workout targeting all major muscle groups"
              duration="35 min"
              image="/placeholder.svg?height=200&width=400"
              href="/workouts/full-body-hiit"
            />
            <AudioCard
              title="Recovery Stretching"
              description="Gentle stretches to aid muscle recovery"
              duration="20 min"
              image="/placeholder.svg?height=200&width=400"
              href="/workouts/recovery-stretching"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="hiit" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard
              title="Power HIIT Workout"
              description="High-intensity interval training for maximum results"
              duration="25 min"
              image="/placeholder.svg?height=200&width=400"
              href="/workouts/power-hiit"
            />
            <AudioCard
              title="Full Body HIIT"
              description="Complete workout targeting all major muscle groups"
              duration="35 min"
              image="/placeholder.svg?height=200&width=400"
              href="/workouts/full-body-hiit"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

