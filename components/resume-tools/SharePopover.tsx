"use client"

import { useState } from "react"
import { Button } from "@/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { QRCodeSVG } from "qrcode.react"
import { Share2, Copy, Printer, Download, Check } from "lucide-react"
import { toast } from "sonner"
import html2pdf from "html2pdf.js"

interface SharePopoverProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  resumeId: string
}

export function SharePopover({ isOpen, onOpenChange, resumeId }: SharePopoverProps) {
  const [copied, setCopied] = useState(false)
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/resume/${resumeId}` : ""

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      toast.success("URL copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error("Failed to copy URL")
    }
  }

  const handlePrint = () => {
    window.print()
    toast.success("Print dialog opened")
  }

  const handleDownloadPDF = () => {
    const element = document.querySelector("[data-resume-content]") || document.body
    const opt = {
      margin: 1,
      filename: `resume-${resumeId}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }

    html2pdf().set(opt).from(element).save()
    toast.success("PDF download started")
  }

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96" align="end">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Share Resume</h3>
            <p className="text-sm text-gray-600">Choose how you'd like to share this resume</p>
          </div>

          <div className="grid gap-3">
            {/* QR Code Card */}
            <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={handleCopyUrl}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <QRCodeSVG value={shareUrl} size={32} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-sm">QR Code</CardTitle>
                    <CardDescription className="text-xs">Scan to view resume</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCopyUrl()
                    }}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-center">
                  <QRCodeSVG value={shareUrl} size={120} />
                </div>
              </CardContent>
            </Card>

            {/* Print Card */}
            <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={handlePrint}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Printer className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-sm">Print Resume</CardTitle>
                    <CardDescription className="text-xs">Print optimized version</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* PDF Download Card */}
            <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={handleDownloadPDF}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Download className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-sm">Download PDF</CardTitle>
                    <CardDescription className="text-xs">Save as PDF file</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
