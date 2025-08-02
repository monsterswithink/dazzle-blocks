"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Video, StopCircle, PlayCircle, Loader2 } from "lucide-react"
import { useRoom } from "@veltdev/react"
import { useToast } from "@/components/ui/use-toast"

export function ProfileVideoButton() {
  const { room } = useRoom()
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaybackAvailable, setIsPlaybackAvailable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (room) {
      // Check if a recording exists for this document
      const checkRecording = async () => {
        setIsLoading(true)
        try {
          const recordings = await getRecordings()
          const hasRecording = recordings.some((rec) => rec.documentId === room.documentId)
          setIsPlaybackAvailable(hasRecording)
        } catch (error) {
          console.error("Error checking recordings:", error)
          toast({
            title: "Recording Error",
            description: "Failed to check for existing recordings.",
            variant: "destructive",
          })
        } finally {
          setIsLoading(false)
        }
      }
      checkRecording()

      // Listen for recording events
      const unsubscribeRecording = onRecordingStatusChange((status) => {
        if (status === "recording") {
          setIsRecording(true)
          toast({
            title: "Recording Started",
            description: "Your screen and audio are now being recorded.",
          })
        } else if (status === "stopped") {
          setIsRecording(false)
          setIsPlaybackAvailable(true) // A new recording is now available
          toast({
            title: "Recording Stopped",
            description: "Your recording has ended and is being processed.",
          })
        }
      })

      return () => {
        unsubscribeRecording()
      }
    }
  }, [room, toast])

  const handleRecord = async () => {
    if (!room) {
      toast({
        title: "Error",
        description: "Collaboration room not initialized.",
        variant: "destructive",
      })
      return
    }

    if (isRecording) {
      setIsLoading(true)
      try {
        await stopRecording()
        // Status change listener will handle setIsRecording(false)
      } catch (error) {
        console.error("Error stopping recording:", error)
        toast({
          title: "Recording Error",
          description: "Failed to stop recording.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsLoading(true)
      try {
        await startRecording()
        // Status change listener will handle setIsRecording(true)
      } catch (error) {
        console.error("Error starting recording:", error)
        toast({
          title: "Recording Error",
          description: "Failed to start recording. Check browser permissions.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handlePlayback = async () => {
    if (!room) {
      toast({
        title: "Error",
        description: "Collaboration room not initialized.",
        variant: "destructive",
      })
      return
    }
    setIsLoading(true)
    try {
      // This will open the Velt playback UI for the current document
      await playRecording()
    } catch (error) {
      console.error("Error playing recording:", error)
      toast({
        title: "Playback Error",
        description: "Failed to play recording. No recording found or an error occurred.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      <Button onClick={handleRecord} disabled={isLoading} variant={isRecording ? "destructive" : "default"}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : isRecording ? (
          <StopCircle className="mr-2 h-4 w-4" />
        ) : (
          <Video className="mr-2 h-4 w-4" />
        )}
        {isRecording ? "Stop Recording" : "Record Video"}
      </Button>
      {isPlaybackAvailable && (
        <Button onClick={handlePlayback} disabled={isLoading || isRecording} variant="outline">
          {isLoading && !isRecording ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <PlayCircle className="mr-2 h-4 w-4" />
          )}
          Play Recording
        </Button>
      )}
    </div>
  )
}
