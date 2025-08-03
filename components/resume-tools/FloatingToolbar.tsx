"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Code,
} from "lucide-react"
import type { Editor } from "@tiptap/react"

interface FloatingToolbarProps {
  editor: Editor | null
}

export function FloatingToolbar({ editor }: FloatingToolbarProps) {
  if (!editor) return null

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href || ""
    const url = window.prompt("Enter URL", previousUrl)

    if (url === null) return // cancelled

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-md border bg-white p-2 shadow-lg z-50 flex items-center gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" aria-label="Heading levels">
            <Heading1 className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {[1, 2, 3].map((level) => (
            <DropdownMenuItem
              key={level}
              onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
              className={editor.isActive("heading", { level }) ? "font-bold" : ""}
            >
              {level === 1 && <Heading1 className="mr-2 h-4 w-4" />}
              {level === 2 && <Heading2 className="mr-2 h-4 w-4" />}
              {level === 3 && <Heading3 className="mr-2 h-4 w-4" />}
              Heading {level}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem onClick={() => editor.chain().focus().setParagraph().run()}>
            <span className="mr-2 h-4 w-4">¶</span>
            Paragraph
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        aria-pressed={editor.isActive("bold")}
        className={editor.isActive("bold") ? "is-active" : ""}
        title="Bold"
      >
        <Bold className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        aria-pressed={editor.isActive("italic")}
        className={editor.isActive("italic") ? "is-active" : ""}
        title="Italic"
      >
        <Italic className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        aria-pressed={editor.isActive("underline")}
        className={editor.isActive("underline") ? "is-active" : ""}
        title="Underline"
      >
        <Underline className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={setLink}
        aria-pressed={editor.isActive("link")}
        className={editor.isActive("link") ? "is-active" : ""}
        title="Link"
      >
        <LinkIcon className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        aria-pressed={editor.isActive("bulletList")}
        className={editor.isActive("bulletList") ? "is-active" : ""}
        title="Bullet List"
      >
        <List className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        aria-pressed={editor.isActive("orderedList")}
        className={editor.isActive("orderedList") ? "is-active" : ""}
        title="Ordered List"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        aria-pressed={editor.isActive("codeBlock")}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
        title="Code Block"
      >
        <Code className="h-4 w-4" />
      </Button>
    </div>
  )
}
