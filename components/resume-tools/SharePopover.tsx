"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Share2, Check } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface SharePopoverProps {
  resumeId: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function SharePopover({ resumeId, isOpen, onOpenChange }: SharePopoverProps) {
  const [copied, setCopied] = useState(false)
  const shareLink = `${window.location.origin}/resume/${resumeId}/view`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    toast.success("Link copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="w-4 h-4 mr-2" /> Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Share Resume</h4>
            <p className="text-sm text-muted-foreground">Anyone with this link can view your resume.</p>
          </div>
          <div className="flex space-x-2">
            <Input value={shareLink} readOnly className="flex-1" />
            <Button onClick={handleCopy} size="sm">
              {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
