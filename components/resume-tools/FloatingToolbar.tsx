"use client"

import { useState, useEffect } from "react"
import { Button } from "@/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/ui/dropdown-menu"
import { Palette, Share, Edit3, Linkedin, Check, Zap, Loader2 } from "lucide-react"
import type { ResumeTheme } from "@/types/profile"
import { SharePopover } from "@/resume-tools/SharePopover"
import { toast } from "@/hooks/use-toast"

// Fake pricing modal (replace with real modal in future)
function showPricingModal(feature: string) {
  toast({ title: "Upgrade Required", description: `Unlock ${feature} with Super Dazzle upgrade!` })
}

interface FloatingToolbarProps {
  isEditMode: boolean
  onToggleEdit: () => void
  onThemeChange: (theme: ResumeTheme) => void
  onLinkedInSync: () => void
  currentTheme: ResumeTheme
  isSuperDazzleActive?: boolean
  onSuperDazzleToggle?: () => void
  syncCount?: number // Number of syncs left today
}

export function FloatingToolbar({
  isEditMode,
  onToggleEdit,
  onThemeChange,
  onLinkedInSync,
  currentTheme,
  isSuperDazzleActive = false,
  onSuperDazzleToggle,
  syncCount = 3,
}: FloatingToolbarProps) {
  const [themes, setThemes] = useState<ResumeTheme[]>([])
  const [loadingDazzle, setLoadingDazzle] = useState(false)
  const [isDazzleActive, setIsDazzleActive] = useState(isSuperDazzleActive)
  const [syncsLeft, setSyncsLeft] = useState(syncCount)

  useEffect(() => {
    // Load available themes from /public/themes/theme-*.json
    const loadThemes = async () => {
      const themeNames = ["modern", "classic", "minimal", "creative", "product", "developer", "industrial", "data", "manager", "creative"]
      const loaded: ResumeTheme[] = []
      await Promise.all(
        themeNames.map(async (name) => {
          try {
            const res = await fetch(`/themes/theme-${name}.json`)
            if (res.ok) {
              loaded.push(await res.json())
            }
          } catch {}
        })
      )
      setThemes(loaded)
    }
    loadThemes()
  }, [])

  const handleDazzle = () => {
    // If not active, show pricing modal
    if (!isDazzleActive) {
      showPricingModal("Super Dazzle")
      return
    }
    // If active, show loader briefly and simulate ML action
    setLoadingDazzle(true)
    setTimeout(() => {
      setLoadingDazzle(false)
      toast({ title: "Super Dazzle!", description: "Candidate-to-role ML matching complete." })
    }, 2000)
  }

  const handleEditMode = () => {
    // If Edit Mode is premium, gate with modal
    if (!isDazzleActive) {
      showPricingModal("Edit Mode")
      return
    }
    onToggleEdit()
  }

  const handleSync = () => {
    if (syncsLeft <= 0) {
      showPricingModal("More LinkedIn Syncs")
      return
    }
    setSyncsLeft(syncsLeft - 1)
    onLinkedInSync()
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-full shadow-xl flex items-center gap-2 px-4 py-2 floating-toolbar">
        {/* Super Dazzle */}
        <Button
          variant={isDazzleActive ? "default" : "ghost"}
          size="sm"
          className="rounded-full"
          onClick={handleDazzle}
          aria-label="Super Dazzle"
        >
          {loadingDazzle ? (
            <Loader2 className="h-4 w-4 animate-spin text-yellow-500" />
          ) : (
            <Zap className={`h-4 w-4 ${isDazzleActive ? "text-yellow-500" : ""}`} />
          )}
        </Button>

        {/* Theme Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="rounded-full" aria-label="Theme">
              <Palette className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="mb-2">
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.name}
                onClick={() => onThemeChange(theme)}
                className="flex items-center gap-2"
              >
                <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: theme.colors.primary }} />
                {theme.name}
                {currentTheme.name === theme.name && <Check className="h-3 w-3 ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Edit Mode */}
        <Button
          variant={isEditMode ? "default" : "ghost"}
          size="sm"
          className="rounded-full"
          onClick={handleEditMode}
          aria-label="Edit Mode"
        >
          <Edit3 className="h-4 w-4" />
        </Button>

        {/* Sync LinkedIn */}
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full"
          onClick={handleSync}
          aria-label="Sync LinkedIn"
          disabled={syncsLeft <= 0}
        >
          <Linkedin className="h-4 w-4 text-blue-600" />
          <span className="ml-1 text-xs text-blue-700 font-semibold">{syncsLeft}/3</span>
        </Button>

        {/* Share popover */}
        <SharePopover>
          <Button variant="ghost" size="sm" className="rounded-full" aria-label="Share">
            <Share className="h-4 w-4" />
          </Button>
        </SharePopover>
      </div>
    </div>
  )
}
