import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"

interface AudioCardProps {
  title: string
  description: string
  duration: string
  image: string
  href: string
}

export default function AudioCard({ title, description, duration, image, href }: AudioCardProps) {
  return (
    <Link href={href} className="group">
      <div className="rounded-xl overflow-hidden border transition-all hover:shadow-md">
        <div className="relative aspect-video">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover" 
            unoptimized={image.startsWith('http')}
            priority={image.startsWith('http')}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white rounded-full p-3">
              <Play className="h-6 w-6 fill-primary text-primary" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {duration}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  )
}

