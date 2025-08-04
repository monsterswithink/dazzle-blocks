"use client"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Share2, Check } from "lucide-react"
import { toast } from "sonner"

interface SharePopoverProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  resumeId: string
}

export function SharePopover({ isOpen, onOpenChange, resumeId }: SharePopoverProps) {
  const [copied, setCopied] = useState(false)
  const shareLink = `${window.location.origin}/resume/${resumeId}/view`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    toast.success("Share link copied to clipboard!")
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
            <p className="text-sm text-gray-500 dark:text-gray-400">Anyone with this link can view your resume.</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="share-link">Shareable link</Label>
            <div className="flex space-x-2">
              <Input id="share-link" defaultValue={shareLink} readOnly />
              <Button size="sm" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
