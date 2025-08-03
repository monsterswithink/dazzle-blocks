"use client"

import { useEffect, useRef, useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import CollaborationCursor from "@tiptap/extension-collaboration-cursor"
import { createVeltTipTapStore } from "@veltdev/tiptap-crdt"
import { supabase } from "@/lib/supabase"

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
  const [veltStore, setVeltStore] = useState<any>(null)
  const [user, setUser] = useState<{ name: string; color: string }>({
    name: "Anonymous",
    color: "#3b82f6", // 💙 Tailwind blue-500 fallback
  })

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()

      if (data?.user) {
        setUser({
          name: data.user.email ?? "Unnamed",
          color: "#16a34a", // 💚 Tailwind green-600
        })
      }
    }

    fetchUser()
  }, [])

  useEffect(() => {
    const initializeStore = async () => {
      if (!editorId) return

      const store = await createVeltTipTapStore({
        documentId: editorId,
      })

      setVeltStore(store)
    }

    initializeStore()
  }, [editorId])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: false }),
      Link.configure({ autolink: true }),
      ...(veltStore
        ? [
            veltStore.getCollabExtension(),
            CollaborationCursor.configure({
              provider: veltStore.getStore().getProvider(),
              user,
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
        "data-placeholder": placeholder || "",
      },
    },
  })

  useEffect(() => {
    if (editor && initialContent && editor.getHTML() !== initialContent) {
      editor.commands.setContent(initialContent, false, { preserveCursor: true })
    }
  }, [editor, initialContent])

  if (!editor) return null

  return (
    <WrapperTag className={className} ref={editorRef}>
      <EditorContent editor={editor} />
    </WrapperTag>
  )
}