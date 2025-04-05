"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<{
    title: string
    artist: string
    duration: number
    src: string
  } | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(600) // Default 10 minutes
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // For demo purposes, let's set a sample track
  useEffect(() => {
    setCurrentTrack({
      title: "Morning Mindfulness",
      artist: "PARA",
      duration: 600, // 10 minutes in seconds
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Sample audio file
    })
  }, [])

  useEffect(() => {
    // Create audio element
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.volume = volume / 100

      // Add event listeners
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate)
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata)
      audioRef.current.addEventListener("ended", handleEnded)
    }

    // Set source if we have a track
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.src
      audioRef.current.load()
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate)
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata)
        audioRef.current.removeEventListener("ended", handleEnded)
        audioRef.current.pause()
      }
    }
  }, [currentTrack])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    if (audioRef.current) {
      audioRef.current.volume = volumeValue / 100
    }
  }

  const handleTimeChange = (newTime: number[]) => {
    const timeValue = newTime[0]
    setCurrentTime(timeValue)
    if (audioRef.current) {
      audioRef.current.currentTime = timeValue
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // If no track is playing, don't show the player
  if (!currentTrack) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-10 shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-sky-100 rounded-md flex items-center justify-center">
              <Play className="h-6 w-6 text-sky-600" />
            </div>
            <div>
              <h4 className="font-medium">{currentTrack.title}</h4>
              <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="flex items-center justify-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-500">
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button
                onClick={togglePlayPause}
                size="icon"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-full"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                onValueChange={handleTimeChange}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 w-32">
            <Button variant="ghost" size="icon" onClick={toggleMute}>
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} className="w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

