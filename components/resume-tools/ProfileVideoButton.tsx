"use client"

import { useState, useEffect } from "react"
import { Button } from "@/ui/button"
import { Video, PlayCircle, Loader2 } from "lucide-react"
import { useVeltClient } from "@veltdev/react"
import { toast } from "sonner"
import { VeltRecorderTool } from "@veltdev/react"

export function ProfileVideoButton() {
  const { client: veltClient } = useVeltClient()
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaybackAvailable, setIsPlaybackAvailable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (veltClient) {
      // Initialize the Velt Recorder
      const recorder = veltClient.recorder

      // Check if a recording exists for this document
      const checkRecording = async () => {
        setIsLoading(true)
        try {
          const recordings = await recorder.getRecordings()
          const hasRecording = recordings.some((rec) => rec.documentId === veltClient.documentId)
          setIsPlaybackAvailable(hasRecording)
        } catch (error) {
          console.error("Error checking recordings:", error)
          toast.error("Failed to check for existing recordings.")
        } finally {
          setIsLoading(false)
        }
      }
      checkRecording()

      // Listen for recording events
      const unsubscribeRecording = recorder.onRecordingStatusChange((status) => {
        if (status === "recording") {
          setIsRecording(true)
          toast("Your screen and audio are now being recorded.")
        } else if (status === "stopped") {
          setIsRecording(false)
          setIsPlaybackAvailable(true) // A new recording is now available
          toast("Your recording has ended and is being processed.")
        }
      })

      return () => {
        unsubscribeRecording()
      }
    }
  }, [veltClient])

  const handleRecordVideo = () => {
    if (veltClient) {
      veltClient.recordVideo()
    } else {
      toast.error("Velt client not initialized. Cannot record video.")
    }
  }

  const handlePlayback = async () => {
    if (veltClient) {
      setIsLoading(true)
      try {
        const recorder = veltClient.recorder
        // This will open the Velt playback UI for the current document
        await recorder.playRecording()
      } catch (error) {
        console.error("Error playing recording:", error)
        toast.error("Failed to play recording. No recording found or an error occurred.")
      } finally {
        setIsLoading(false)
      }
    } else {
      toast.error("Velt client not initialized.")
    }
  }

  return (
    <VeltRecorderTool>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={handleRecordVideo}>
          <Video className="w-4 h-4 mr-2" /> Record Video
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
    </VeltRecorderTool>
  )
}
