"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Printer, Download, Copy, Check } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

interface SharePopoverProps {
  children: React.ReactNode
}

export function SharePopover({ children }: SharePopoverProps) {
  const [shareUrl, setShareUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href)
    }
  }, [])

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy URL:", error)
    }
  }

  const handlePrint = () => {
    // Hide the floating toolbar and other UI elements for printing
    const toolbar = document.querySelector("[data-floating-toolbar]")
    const originalDisplay = toolbar ? (toolbar as HTMLElement).style.display : ""

    if (toolbar) {
      ;(toolbar as HTMLElement).style.display = "none"
    }

    // Add print-specific styles
    const printStyles = document.createElement("style")
    printStyles.textContent = `
      @media print {
        body * { visibility: hidden; }
        .resume-container, .resume-container * { visibility: visible; }
        .resume-container { 
          position: absolute; 
          left: 0; 
          top: 0; 
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 20px !important;
          box-shadow: none !important;
        }
        .floating-toolbar { display: none !important; }
      }
    `
    document.head.appendChild(printStyles)

    window.print()

    // Restore original state
    if (toolbar) {
      ;(toolbar as HTMLElement).style.display = originalDisplay
    }
    document.head.removeChild(printStyles)
    setIsOpen(false)
  }

  const handleDownloadPDF = async () => {
    try {
      // Using html2pdf library approach
      const { default: html2pdf } = await import("html2pdf.js")

      const resumeElement = document.querySelector(".resume-container")
      if (!resumeElement) return

      const opt = {
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      }

      html2pdf().set(opt).from(resumeElement).save()
      setIsOpen(false)
    } catch (error) {
      console.error("PDF generation failed:", error)
      // Fallback to print
      handlePrint()
    }
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80 mb-4" align="center">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Share Resume</h3>
            <p className="text-sm text-gray-600 mb-4">Choose how you'd like to share your resume</p>
          </div>

          <div className="grid gap-3">
            {/* QR Code Card */}
            <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <QrCode className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-sm">QR Code</CardTitle>
                    <CardDescription className="text-xs">Scan to view resume</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="bg-white p-2 rounded border">
                    <QRCodeSVG value={shareUrl} size={60} />
                  </div>
                  <div className="flex-1 ml-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={shareUrl}
                        readOnly
                        className="text-xs bg-gray-50 border rounded px-2 py-1 flex-1 truncate"
                      />
                      <Button size="sm" variant="outline" onClick={handleCopyUrl}>
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Print Card */}
            <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={handlePrint}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Printer className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-sm">Print Resume</CardTitle>
                    <CardDescription className="text-xs">Print a physical copy</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Download PDF Card */}
            <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={handleDownloadPDF}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Download className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
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
