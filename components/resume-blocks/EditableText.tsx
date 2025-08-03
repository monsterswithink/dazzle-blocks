"use client"

import { useRef, useEffect } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import CollaborationCursor from "@tiptap/extension-collaboration-cursor"

import {
  createVeltTipTapStore,
  VeltTipTapStore,
} from "@veltdev/tiptap-crdt"

import type { JSX } from "react/jsx-runtime"

interface EditableTextProps {
  initialContent: string
  onUpdate: (content: string) => void
  placeholder?: string
  className?: string
  tag?: keyof JSX.IntrinsicElements
  editorId: string
}

export function EditableText({
  initialContent,
  onUpdate,
  placeholder,
  className,
  tag: WrapperTag = "p",
  editorId,
}: EditableTextProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const veltTiptapStoreRef = useRef<VeltTipTapStore | null>(null)

  // 👥 You can customize this or fetch it from session
  const veltUser = {
    name: "Anonymous",
    color: "#22C55E",
  }

  useEffect(() => {
    // ⛳ init Velt CRDT store once
    veltTiptapStoreRef.current = createVeltTipTapStore({
      documentId: editorId, // like 'resume-123'
    })

    return () => {
      // 🧹 cleanup
      veltTiptapStoreRef.current?.destroy()
      veltTiptapStoreRef.current = null
    }
  }, [editorId])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: false }),
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
      ...(veltTiptapStoreRef.current
        ? [
            veltTiptapStoreRef.current.getCollabExtension(),
            CollaborationCursor.configure({
              provider: veltTiptapStoreRef.current.getStore().getProvider(),
              user: veltUser,
            }),
          ]
        : []),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "ProseMirror min-h-[1em] focus:outline-none",
        "data-placeholder": placeholder,
      },
    },
  })

  // 🔁 Sync if external `initialContent` changes
  useEffect(() => {
    if (editor && editor.getHTML() !== initialContent) {
      editor.commands.setContent(initialContent, false, {
        preserveCursor: true,
      })
    }
  }, [editor, initialContent])

  if (!editor) return null

  return (
    <WrapperTag className={className} ref={editorRef}>
      <EditorContent editor={editor} />
    </WrapperTag>
  )
}