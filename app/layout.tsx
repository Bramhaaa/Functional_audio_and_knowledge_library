import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import AudioPlayer from "@/components/audio-player"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Audio & Knowledge Library",
  description: "AI-Powered Audio Hub for meditation, workouts, knowledge talks and focus sounds",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <AudioPlayer />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'