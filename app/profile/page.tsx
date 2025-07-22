"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { ResumeService } from "@/lib/resume-service"
import { ProfileSnapshotCard } from "@/components/ProfileSnapshotCard"

export default function ProfilePage() {
  const { data: session } = useSession()
  const [profile, setProfile] = useState<any>(null)
  const [resumeId, setResumeId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)

  useEffect(() => {
    async function fetchAndEnrich() {
      setLoading(true)
      if (!session?.accessToken) {
        setLoading(false)
        return
      }

      // 1. Fetch LinkedIn profile for vanityName/id
      const res = await fetch("/api/profile", {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      })
      const linkedInProfile = await res.json()
      const vanityName = linkedInProfile.vanityName || linkedInProfile.id

      // 2. Try to fetch resume from Supabase
      let resume = await ResumeService.getResumeByPublicId(vanityName)
      if (!resume) {
        // 3. If not, enrich and save
        setSyncing(true)
        const enr = await fetch(`/api/enrich?vanityName=${vanityName}`)
        const enrichedData = await enr.json()
        await ResumeService.createResumeFromEnrichedData(enrichedData)
        resume = await ResumeService.getResumeByPublicId(vanityName)
        setSyncing(false)
      }

      setProfile(resume?.profile)
      setResumeId(resume?.profile?.public_identifier)
      setLoading(false)
    }
    fetchAndEnrich()
  }, [session])

  const handleViewResume = () => {
    if (resumeId) window.location.assign(`/resume/${resumeId}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ProfileSnapshotCard
        profile={profile}
        syncing={syncing}
        onViewResume={handleViewResume}
        resumeId={resumeId || undefined}
        loading={loading}
      />
    </div>
  )
}
