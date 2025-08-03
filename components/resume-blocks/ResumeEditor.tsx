"use client"

import { useEffect, useRef, useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import CollaborationCursor from "@tiptap/extension-collaboration-cursor"

import {
  createVeltTipTapStore,
  VeltTipTapStore,
} from "@veltdev/tiptap-crdt"

import { useVeltClient, useVeltEventCallback } from "@veltdev/react"

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
  const veltClient = useVeltClient()
  const veltUser = useVeltEventCallback('userUpdate');

  const [veltTiptapStore, setVeltTiptapStore] = useState<VeltTipTapStore | null>(null)

  useEffect(() => {
    if (!veltClient || !veltUser) return

    const store = createVeltTipTapStore({
      client: veltClient,
      user: veltUser,
      docId: editorId,
    })

    setVeltTiptapStore(store)

    return () => {
      store?.destroy()
    }
  }, [veltClient, veltUser, editorId])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: false }),
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
      ...(veltTiptapStore
        ? [
            veltTiptapStore.getCollabExtension(),
            CollaborationCursor.configure({
              provider: veltTiptapStore.getStore().getProvider(),
              user: veltUser,
            }),
          ]
        : []),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => onUpdate(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "ProseMirror min-h-[1em] focus:outline-none",
        "data-placeholder": placeholder || "",
      },
    },
  })

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