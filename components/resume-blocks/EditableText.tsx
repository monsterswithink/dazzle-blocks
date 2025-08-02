"use client"

import { useEffect, useRef } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import { useRoom } from "@veltdev/react"
import Velt from "velt"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

interface EditableTextProps {
  initialContent: string
  onUpdate: (content: string) => void
  placeholder?: string
  className?: string
  tag?: keyof JSX.IntrinsicElements // Allow specifying the HTML tag (e.g., 'p', 'h1')
  editorId: string // Unique ID for Velt collaboration
}

export function EditableText({
  initialContent,
  onUpdate,
  placeholder,
  className,
  tag: WrapperTag = "p", // Default to 'p' if no tag is provided
  editorId,
}: EditableTextProps) {
  const { room } = useRoom()
  const editorRef = useRef<HTMLDivElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        // Disable history as Velt handles collaborative state
        history: false,
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "ProseMirror min-h-[1em] focus:outline-none", // Apply ProseMirror class
        "data-placeholder": placeholder, // For placeholder styling
      },
    },
  })

  useEffect(() => {
    if (editor && room) {
      // Initialize Velt for this specific editor instance
      Velt.initEditor(editor, editorId)

      // Clean up Velt editor instance on unmount
      return () => {
        Velt.destroyEditor(editorId)
      }
    }
  }, [editor, room, editorId])

  // Update editor content if initialContent changes externally
  useEffect(() => {
    if (editor && editor.getHTML() !== initialContent) {
      editor.commands.setContent(initialContent, false, { preserveCursor: true })
    }
  }, [editor, initialContent])

  if (!editor) {
    return null
  }

  return (
    <WrapperTag className={className} ref={editorRef}>
      <EditorContent editor={editor} />
    </WrapperTag>
  )
}
