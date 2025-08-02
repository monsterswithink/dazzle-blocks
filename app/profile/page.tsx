import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProfileSnapshotCard } from "@/components/resume-blocks/ProfileSnapshotCard"

export default async function ProfilePage() {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }

  const user = session.user

  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user?.image || "/placeholder-user.png"} alt={user?.name || "User Avatar"} />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">{user?.name || "User Profile"}</CardTitle>
          {user?.email && <p className="text-gray-600">{user.email}</p>}
          {(user as any)?.vanityUrl && (
            <p className="text-gray-500">
              LinkedIn Vanity URL:{" "}
              <a
                href={`https://linkedin.com/in/${(user as any).vanityUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                linkedin.com/in/{(user as any).vanityUrl}
              </a>
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <Button asChild size="lg">
              <Link href="/editor">Start/Edit Resume</Link>
            </Button>
            {(user as any)?.vanityUrl && (
              <Button asChild variant="outline" size="lg">
                <Link href="/profile/enriched">View Enriched Profile Data</Link>
              </Button>
            )}
            <Button asChild variant="destructive" size="lg">
              <Link href="/api/auth/signout">Sign Out</Link>
            </Button>
          </div>
          <ProfileSnapshotCard />
        </CardContent>
      </Card>
    </main>
  )
}
