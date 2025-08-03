"use client"

import { ReactNode, useEffect } from "react"
import { VeltProvider as BaseVeltProvider, useSetDocumentId } from "@veltdev/react"

interface Props {
  children: ReactNode
  documentId: string
}

function DocumentIdInitializer({ documentId }: { documentId: string }) {
  const setDocumentId = useSetDocumentId()

  useEffect(() => {
    setDocumentId(documentId)
  }, [documentId, setDocumentId])

  return null
}

export function VeltProvider({ children, documentId }: Props) {
  return (
    <BaseVeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_PUBLIC_KEY!}>
      <DocumentIdInitializer documentId={documentId} />
      {children}
    </BaseVeltProvider>
  )
}
