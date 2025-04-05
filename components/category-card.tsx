import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color: string
  count: number
}

export default function CategoryCard({ title, description, icon, href, color, count }: CategoryCardProps) {
  return (
    <Link href={href} className="group">
      <div className="rounded-xl border p-6 h-full transition-all hover:shadow-md bg-white">
        <div className={cn("rounded-full w-12 h-12 flex items-center justify-center mb-4", color)}>{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="text-sm text-muted-foreground">{count} sessions</div>
      </div>
    </Link>
  )
}

