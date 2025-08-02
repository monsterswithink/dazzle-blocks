"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bold, Italic, Underline, Link, List, ListOrdered, Heading1, Heading2, Heading3, Code } from "lucide-react"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TiptapLink from "@tiptap/extension-link" // Renamed to avoid conflict with Lucide Link

type FloatingToolbarProps = {}

export function FloatingToolbar() {
  // This component needs to interact with the currently active Tiptap editor.
  // Velt's `initEditor` function makes the editor instance globally accessible
  // via `Velt.getActiveEditor()`.
  // This is a simplified example. In a real application, you might pass the editor
  // instance down via context or use a more robust state management for toolbars.

  // For demonstration, we'll create a dummy editor to show the toolbar functionality.
  // In a real scenario, this toolbar would connect to the `editor` instance
  // from `EditableText` component via Velt's active editor mechanism.
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      TiptapLink.configure({
        openOnClick: false, // Prevent opening link when clicking in editor
        autolink: true,
      }),
    ],
    content: "<p>This is a dummy editor for toolbar demo.</p>",
    editable: false, // Make it non-editable for this demo
  })

  if (!editor) {
    return null
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-md border bg-white p-2 shadow-lg z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Heading1 className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
            <Heading1 className="mr-2 h-4 w-4" />
            Heading 1
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
            <Heading2 className="mr-2 h-4 w-4" />
            Heading 2
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
            <Heading3 className="mr-2 h-4 w-4" />
            Heading 3
          </DropdownMenuItem>
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
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <Underline className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={setLink} className={editor.isActive("link") ? "is-active" : ""}>
        <Link className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <Code className="h-4 w-4" />
      </Button>
    </div>
  )
}
