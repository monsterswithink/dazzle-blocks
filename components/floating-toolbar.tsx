"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Palette, Share, Edit3, Linkedin, Check } from "lucide-react"
import type { ResumeTheme } from "@/types/profile"
import { SharePopover } from "./share-popover"

interface FloatingToolbarProps {
  isEditMode: boolean
  onToggleEdit: () => void
  onThemeChange: (theme: ResumeTheme) => void
  onLinkedInSync: () => void
  currentTheme: ResumeTheme
}

export function FloatingToolbar({
  isEditMode,
  onToggleEdit,
  onThemeChange,
  onLinkedInSync,
  currentTheme,
}: FloatingToolbarProps) {
  const [themes, setThemes] = useState<ResumeTheme[]>([])

  useEffect(() => {
    // Load available themes
    const loadThemes = async () => {
      try {
        const themeFiles = ["modern", "classic", "minimal", "creative"]
        const loadedThemes = await Promise.all(
          themeFiles.map(async (name) => {
            try {
              const response = await fetch(`/themes/theme-${name}.json`)
              return await response.json()
            } catch {
              return null
            }
          }),
        )
        setThemes(loadedThemes.filter(Boolean))
      } catch (error) {
        console.error("Failed to load themes:", error)
      }
    }
    loadThemes()
  }, [])

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
        {/* Theme Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Palette className="h-4 w-4 mr-2" />
              Theme
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

        <div className="w-px h-6 bg-gray-300" />

        {/* Share Button */}
        <SharePopover>
          <Button variant="ghost" size="sm" className="rounded-full">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </SharePopover>

        <div className="w-px h-6 bg-gray-300" />

        {/* Edit Toggle */}
        <Button variant={isEditMode ? "default" : "ghost"} size="sm" className="rounded-full" onClick={onToggleEdit}>
          <Edit3 className="h-4 w-4 mr-2" />
          {isEditMode ? "View Mode" : "Edit Mode"}
        </Button>

        <div className="w-px h-6 bg-gray-300" />

        {/* LinkedIn Sync */}
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full text-blue-600 hover:text-blue-700"
          onClick={onLinkedInSync}
        >
          <Linkedin className="h-4 w-4 mr-2" />
          Sync LinkedIn
        </Button>
      </div>
    </div>
  )
}
