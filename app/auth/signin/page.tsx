'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LinkedinIcon } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Sign in to your account to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button onClick={() => signIn('linkedin', { callbackUrl: 'http://localhost:3000/profile' })}>
            <LinkedinIcon className="mr-2 h-5 w-5" />
            Sign in with LinkedIn
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
