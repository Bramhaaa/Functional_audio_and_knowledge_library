import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioCard from "@/components/audio-card"
import PageHeader from "@/components/page-header"

export default function WorkoutsPage() {
  const workouts = [
    {
      title: "Power HIIT Workout",
      description: "High-intensity interval training for maximum fat burning",
      duration: "30 min",
      difficulty: "Intermediate",
      category: "HIIT",
      image: "/workouts/power-hiit-thumbnail.jpg",
      thumbnail: "https://img.youtube.com/vi/ml6cT4AZdqI/maxresdefault.jpg",
      href: "/workouts/power-hiit-workout"
    },
    {
      title: "Breathwork for Energy",
      description: "Breathing techniques to boost your energy levels",
      duration: "15 min",
      category: "Breathwork",
      image: "/workouts/breathwork-thumbnail.jpg",
      thumbnail: "https://img.youtube.com/vi/FJJazKtH_9I/maxresdefault.jpg",
      href: "/workouts/breathwork-energy"
    },
    {
      title: "Endurance Builder",
      description: "Progressive training to improve stamina and endurance",
      duration: "20 min",
      category: "Endurance",
      image: "/workouts/endurance-thumbnail.jpg",
      thumbnail: "https://img.youtube.com/vi/UBMk30rjy0o/maxresdefault.jpg",
      href: "/workouts/endurance-builder"
    },
    {
      title: "Neck Exercise Routine",
      description: "Relieve tension and improve neck flexibility",
      duration: "10 min",
      category: "Stretching",
      image: "/workouts/neck-exercise-thumbnail.jpg",
      thumbnail: "/workouts/neck-exercise-thumbnail.jpg",
      href: "/workouts/neck-exercise"
    },
    {
      title: "Full Body HIIT",
      description: "Complete workout targeting all major muscle groups",
      duration: "35 min",
      category: "HIIT",
      image: "/workouts/full-body-hiit-thumbnail.jpg",
      thumbnail: "/workouts/full-body-hiit-thumbnail.jpg",
      href: "/workouts/full-body-hiit"
    },
    {
      title: "Recovery Stretching",
      description: "Gentle stretches to aid muscle recovery",
      duration: "20 min",
      category: "Stretching",
      image: "/workouts/recovery-stretching-thumbnail.jpg",
      thumbnail: "/workouts/recovery-stretching-thumbnail.jpg",
      href: "/workouts/recovery-stretching"
    }
  ]

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
            {workouts.map((workout) => (
              <AudioCard
                key={workout.title}
                title={workout.title}
                description={workout.description}
                duration={workout.duration}
                image={workout.thumbnail}
                href={workout.href}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hiit" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.filter(workout => workout.category === "HIIT").map((workout) => (
              <AudioCard
                key={workout.title}
                title={workout.title}
                description={workout.description}
                duration={workout.duration}
                image={workout.thumbnail}
                href={workout.href}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="breathwork" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.filter(workout => workout.category === "Breathwork").map((workout) => (
              <AudioCard
                key={workout.title}
                title={workout.title}
                description={workout.description}
                duration={workout.duration}
                image={workout.thumbnail}
                href={workout.href}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="endurance" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.filter(workout => workout.category === "Endurance").map((workout) => (
              <AudioCard
                key={workout.title}
                title={workout.title}
                description={workout.description}
                duration={workout.duration}
                image={workout.thumbnail}
                href={workout.href}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stretching" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.filter(workout => workout.category === "Stretching").map((workout) => (
              <AudioCard
                key={workout.title}
                title={workout.title}
                description={workout.description}
                duration={workout.duration}
                image={workout.thumbnail}
                href={workout.href}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

