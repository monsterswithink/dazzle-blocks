import Link from "next/link"
import { Button } from "@ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ui/card"
import { Eye, Edit, Linkedin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">LinkedIn Resume Sync</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sync your LinkedIn profile to create a beautiful, collaborative resume that stays up-to-date automatically
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-blue-600" />
                Get Started
              </CardTitle>
              <CardDescription>Connect your LinkedIn to create your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/profile">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Sign in with LinkedIn
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="h-5 w-5" />
                Resume Editor
              </CardTitle>
              <CardDescription>Try the editor with sample data</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/editor">Preview Editor</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Linkedin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">1. Connect LinkedIn</h3>
              <p className="text-gray-600 text-sm">Sign in with your LinkedIn account</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">2. Auto-Sync Profile</h3>
              <p className="text-gray-600 text-sm">Your LinkedIn data is enriched and formatted</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Edit className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">3. Share & Collaborate</h3>
              <p className="text-gray-600 text-sm">Get a shareable URL and collaborate in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
