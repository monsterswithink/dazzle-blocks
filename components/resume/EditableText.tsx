"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"

interface EditableTextProps {
  content: string
  isEditable: boolean
  onUpdate?: (content: string) => void
  className?: string
  placeholder?: string
}

export function EditableText({
  content,
  isEditable,
  onUpdate,
  className = "",
  placeholder = "Click to edit...",
}: EditableTextProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editable: isEditable,
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  if (!isEditable) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: content || placeholder }} />
  }

  return (
    <div className={`${className} ${isEditable ? "border border-dashed border-gray-300 rounded p-2" : ""}`}>
      <EditorContent editor={editor} />
    </div>
  )
}
