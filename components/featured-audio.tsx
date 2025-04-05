import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"

interface FeaturedAudioProps {
  title: string
  category: string
  duration: string
  image: string
  href: string
}

export default function FeaturedAudio({ title, category, duration, image, href }: FeaturedAudioProps) {
  return (
    <Link href={href} className="group">
      <div className="rounded-xl overflow-hidden border transition-all hover:shadow-md">
        <div className="relative aspect-video">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white rounded-full p-3">
              <Play className="h-6 w-6 fill-primary text-primary" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-sm text-muted-foreground mb-1">
            {category} • {duration}
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

