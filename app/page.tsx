import { Button } from "@/components/ui/button"
import { ChevronRight, Headphones, BookOpen, Zap, Waves } from "lucide-react"
import CategoryCard from "@/components/category-card"
import FeaturedAudio from "@/components/featured-audio"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Audio & Knowledge Library</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Enhance your mind, body, and spirit with our curated audio collection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            title="Guided Meditations"
            description="For focus, healing, and relaxation"
            icon={<Headphones className="h-8 w-8" />}
            href="/meditations"
            color="bg-teal-50"
            count={24}
          />
          <CategoryCard
            title="Workout Sessions"
            description="HIIT, breathwork, and endurance training"
            icon={<Zap className="h-8 w-8" />}
            href="/workouts"
            color="bg-blue-50"
            count={18}
          />
          <CategoryCard
            title="Knowledge Talks"
            description="Insights on mindset, productivity, and emotional intelligence"
            icon={<BookOpen className="h-8 w-8" />}
            href="/talks"
            color="bg-purple-50"
            count={32}
          />
          <CategoryCard
            title="Focus Sounds"
            description="Binaural beats and sounds to enhance concentration"
            icon={<Waves className="h-8 w-8" />}
            href="/focus"
            color="bg-amber-50"
            count={15}
          />
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Content</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View all <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedAudio
            title="Morning Mindfulness"
            category="Meditation"
            duration="10 min"
            image="/placeholder.svg?height=200&width=400"
            href="/meditations/morning-mindfulness"
          />
          <FeaturedAudio
            title="Power HIIT Workout"
            category="Workout"
            duration="25 min"
            image="/placeholder.svg?height=200&width=400"
            href="/workouts/power-hiit"
          />
          <FeaturedAudio
            title="Productivity Mastery"
            category="Knowledge Talk"
            duration="18 min"
            image="/placeholder.svg?height=200&width=400"
            href="/talks/productivity-mastery"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recently Added</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View all <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedAudio
            title="Deep Sleep Meditation"
            category="Meditation"
            duration="30 min"
            image="/placeholder.svg?height=200&width=400"
            href="/meditations/deep-sleep"
          />
          <FeaturedAudio
            title="Alpha Waves for Focus"
            category="Focus Sound"
            duration="60 min"
            image="/placeholder.svg?height=200&width=400"
            href="/focus/alpha-waves"
          />
          <FeaturedAudio
            title="Emotional Intelligence"
            category="Knowledge Talk"
            duration="22 min"
            image="/placeholder.svg?height=200&width=400"
            href="/talks/emotional-intelligence"
          />
        </div>
      </section>
    </div>
  )
}

