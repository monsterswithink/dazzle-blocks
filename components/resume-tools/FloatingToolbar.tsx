"use client"

import type { Editor } from "@tiptap/react"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Strikethrough, List, ListOrdered, Link, Unlink } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface FloatingToolbarProps {
  editor: Editor
}

export function FloatingToolbar({ editor }: FloatingToolbarProps) {
  const [linkUrl, setLinkUrl] = useState("")
  const [isLinkPopoverOpen, setIsLinkPopoverOpen] = useState(false)

  const setLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl, target: "_blank" }).run()
    } else {
      editor.chain().focus().unsetLink().run()
    }
    setLinkUrl("")
    setIsLinkPopoverOpen(false)
  }

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap gap-1 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "bg-gray-200 dark:bg-gray-700" : ""}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "bg-gray-200 dark:bg-gray-700" : ""}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "bg-gray-200 dark:bg-gray-700" : ""}
      >
        <Strikethrough className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "bg-gray-200 dark:bg-gray-700" : ""}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "bg-gray-200 dark:bg-gray-700" : ""}
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Popover open={isLinkPopoverOpen} onOpenChange={setIsLinkPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (editor.isActive("link")) {
                setLinkUrl(editor.getAttributes("link").href)
              } else {
                setLinkUrl("")
              }
              setIsLinkPopoverOpen(true)
            }}
            className={editor.isActive("link") ? "bg-gray-200 dark:bg-gray-700" : ""}
          >
            <Link className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Link URL</h4>
              <p className="text-sm text-muted-foreground">Set the URL for the link.</p>
            </div>
            <div className="grid gap-2">
              <Input
                id="link-url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://example.com"
              />
              <Button onClick={setLink}>Apply Link</Button>
              {editor.isActive("link") && (
                <Button variant="outline" onClick={() => editor.chain().focus().unsetLink().run()}>
                  <Unlink className="h-4 w-4 mr-2" /> Remove Link
                </Button>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
