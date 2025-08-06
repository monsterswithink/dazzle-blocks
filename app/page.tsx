import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome to Resume Editor</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            A collaborative resume editor powered by Next.js and Velt.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link href="/auth/signin">
            <Button className="w-full">
              <LinkedinIcon className="mr-2 h-5 w-5" />
              Sign in with LinkedIn
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
