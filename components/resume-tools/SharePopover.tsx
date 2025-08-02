"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Share2, Check, Copy } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface SharePopoverProps {
  resumeId: string
}

export function SharePopover({ resumeId }: SharePopoverProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const shareLink = `${window.location.origin}/resume/${resumeId}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    toast({
      title: "Link Copied!",
      description: "The shareable link has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Share Resume</h4>
            <p className="text-sm text-muted-foreground">Anyone with this link can view and collaborate.</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="share-link">Shareable link</Label>
            <div className="flex space-x-2">
              <Input id="share-link" defaultValue={shareLink} readOnly />
              <Button size="sm" onClick={copyToClipboard}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
