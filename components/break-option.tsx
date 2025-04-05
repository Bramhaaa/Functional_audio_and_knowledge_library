import Link from "next/link"
import Image from "next/image"

interface BreakOptionProps {
  title: string
  duration: string
  description: string
  icon: string
  href: string
}

export default function BreakOption({ title, duration, description, icon, href }: BreakOptionProps) {
  return (
    <Link href={href} className="group">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4">
          <Image src={icon || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <h3 className="text-2xl font-semibold mb-1">{title}</h3>
        <div className="text-sm text-gray-500 mb-2">{duration}</div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

