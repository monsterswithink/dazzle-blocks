"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import type { Profile } from "@/types/profile"
import { Plus, Edit, Save, Trash2 } from "lucide-react"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      if (status === "authenticated") {
        try {
          setLoading(true)
          setError(null)
          const response = await fetch("/api/profile")
          if (response.status === 404) {
            setProfile(null) // Profile not found, user can create one
          } else if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || "Failed to fetch profile.")
          } else {
            const data: Profile = await response.json()
            setProfile(data)
          }
        } catch (err: any) {
          setError(err.message)
          toast.error("Failed to load profile", {
            description: err.message,
          })
        } finally {
          setLoading(false)
        }
      } else if (status === "unauthenticated") {
        router.push("/auth/signin")
      }
    }

    fetchProfile()
  }, [status, router])

  const handleCreateOrUpdateProfile = async () => {
    if (!profile) {
      toast.error("Profile data is empty. Cannot save.")
      return
    }

    setLoading(true)
    setError(null)
    try {
      const method = profile.id ? "PUT" : "POST"
      const response = await fetch("/api/profile", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Failed to ${method === "POST" ? "create" : "update"} profile.`)
      }

      const updatedProfile: Profile = await response.json()
      setProfile(updatedProfile)
      setIsEditing(false)
      toast.success(`Profile ${method === "POST" ? "created" : "updated"} successfully!`)
    } catch (err: any) {
      setError(err.message)
      toast.error(`Failed to ${profile.id ? "update" : "create"} profile`, {
        description: err.message,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProfile = async () => {
    if (!profile?.id) {
      toast.error("No profile to delete.")
      return
    }

    if (!confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/profile?id=${profile.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to delete profile.")
      }

      setProfile(null)
      toast.success("Profile deleted successfully!")
    } catch (err: any) {
      setError(err.message)
      toast.error("Failed to delete profile", {
        description: err.message,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({
      ...prev!,
      personal: {
        ...prev!.personal,
        [name]: value,
      },
    }))
  }

  if (status === "loading" || loading) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
        <div className="space-y-4 text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-gray-900 dark:text-gray-50" />
          <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">Loading profile...</h1>
          <p className="text-gray-500 dark:text-gray-400">Please wait while we load your profile content.</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-red-600">Error Loading Profile</h2>
          <p className="text-gray-700 dark:text-gray-300">{error}</p>
          <Button onClick={() => router.push("/editor")}>Back to Editor</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{profile ? "Your Profile" : "Create Your Profile"}</CardTitle>
          <div className="flex gap-2">
            {profile && (
              <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? <Save className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
                {isEditing ? "Save" : "Edit"}
              </Button>
            )}
            {profile && (
              <Button variant="destructive" size="sm" onClick={handleDeleteProfile} disabled={loading}>
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            )}
            {!profile && (
              <Button
                onClick={() => {
                  setProfile({
                    id: "", // Will be generated by Supabase
                    user_id: session?.user?.id || "",
                    personal: {
                      name: session?.user?.name || "",
                      title: "",
                      email: session?.user?.email || "",
                      phone: "",
                      linkedin: "",
                      github: "",
                    },
                    about: {
                      description: "",
                    },
                    experience: [],
                    education: [],
                    skills: [],
                  })
                  setIsEditing(true)
                }}
              >
                <Plus className="mr-2 h-4 w-4" /> Create Profile
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {profile ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={profile.personal.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={profile.personal.title}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profile.personal.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={profile.personal.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={profile.personal.linkedin}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="github">GitHub</Label>
                <Input
                  id="github"
                  name="github"
                  type="url"
                  value={profile.personal.github}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              {isEditing && (
                <Button onClick={handleCreateOrUpdateProfile} disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No profile found. Click "Create Profile" to get started or "Enrich Profile" to import from LinkedIn.
            </p>
          )}
          <Button onClick={() => router.push("/profile/enriched")} className="w-full">
            Enrich Profile from LinkedIn
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
