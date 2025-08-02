'use client'
import { useSession, SessionProvider } from 'next-auth/react'
import {
  VeltProvider,
  useIdentify,
  useSetDocumentId,
  useVeltClient
} from '@veltdev/react'
import { useEffect } from 'react'

function VeltAuthBridge() {
  const { data: session, status } = useSession()
  const identify = useIdentify()

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      identify({
        userId:    session.user.id,                // uniquely identify your user
        organizationId: session.user.organizationId!,
        name:      session.user.name!,
        email:     session.user.email!,
        photoUrl:  session.user.image ?? undefined,
        color:     session.user.color || '#000000',
        textColor: session.user.textColor || '#ffffff'
      })
    }
  }, [status, session, identify])

  return null
}

function VeltDocSetter({ documentId }: { documentId: string }) {
  useSetDocumentId(documentId)
  return null
}