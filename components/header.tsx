"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          SoundMind
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/meditations" className="text-sm font-medium hover:text-primary">
            Meditations
          </Link>
          <Link href="/workouts" className="text-sm font-medium hover:text-primary">
            Workouts
          </Link>
          <Link href="/talks" className="text-sm font-medium hover:text-primary">
            Knowledge Talks
          </Link>
          <Link href="/focus" className="text-sm font-medium hover:text-primary">
            Focus Sounds
          </Link>
          <Link href="/take-a-break" className="text-sm font-medium hover:text-primary">
            Take a Break
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button>Sign In</Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 flex flex-col p-6 md:hidden transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="font-bold text-xl">
            SoundMind
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex flex-col space-y-6">
          <Link href="/meditations" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
            Meditations
          </Link>
          <Link href="/workouts" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
            Workouts
          </Link>
          <Link href="/talks" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
            Knowledge Talks
          </Link>
          <Link href="/focus" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
            Focus Sounds
          </Link>
          <Link href="/take-a-break" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
            Take a Break
          </Link>
        </nav>

        <div className="mt-auto">
          <Button className="w-full">Sign In</Button>
        </div>
      </div>
    </header>
  )
}

