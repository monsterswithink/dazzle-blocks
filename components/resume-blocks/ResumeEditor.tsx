"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { EditableText } from "./EditableText"
import { CollapsibleSection } from "./CollapsibleSection"
import { useToast } from "@/components/ui/use-toast"
import { useRoom } from "@velt/react"
import { Velt } from "velt"
import { FloatingToolbar } from "@/components/resume-tools/FloatingToolbar"
import { PresenceAvatars } from "@/components/resume-tools/PresenceAvatars"
import { SharePopover } from "@/components/resume-tools/SharePopover"
import { ProfileVideoButton } from "@/components/resume-tools/ProfileVideoButton"
import { supabase } from "@/lib/supabase" // Import supabase client

interface ResumeEditorProps {
  initialResumeData: any // Define a more specific type if possible
  resumeId: string
}

export function ResumeEditor({ initialResumeData, resumeId }: ResumeEditorProps) {
  const [resumeData, setResumeData] = useState(initialResumeData)
  const { toast } = useToast()
  const { room } = useRoom()

  // Initialize Velt for the entire document
  useEffect(() => {
    if (room) {
      Velt.init({
        documentId: resumeId,
        // Other Velt configurations can go here
      })
    }
  }, [room, resumeId])

  // Sync local state with Velt's live state
  useEffect(() => {
    if (room) {
      const unsubscribe = room.subscribe(
        (liveState) => {
          // Only update if the liveState is different from current local state
          // This prevents infinite loops and unnecessary re-renders
          if (JSON.stringify(liveState) !== JSON.stringify(resumeData)) {
            setResumeData(liveState)
          }
        },
        (error) => {
          console.error("Error subscribing to Velt live state:", error)
          toast({
            title: "Collaboration Error",
            description: "Failed to sync live changes. Please refresh.",
            variant: "destructive",
          })
        },
      )

      // Set initial state in Velt if it's empty
      if (Object.keys(room.getLiveState()).length === 0) {
        room.updateLiveState(initialResumeData)
      }

      return () => unsubscribe()
    }
  }, [room, resumeData, initialResumeData, toast])

  const handleUpdate = useCallback(
    (path: string, content: string) => {
      setResumeData((prevData: any) => {
        const newData = { ...prevData }
        const pathParts = path.split(".")
        let current: any = newData

        for (let i = 0; i < pathParts.length - 1; i++) {
          const part = pathParts[i]
          if (!current[part]) {
            current[part] = {}
          }
          current = current[part]
        }
        current[pathParts[pathParts.length - 1]] = content

        // Update Velt's live state
        if (room) {
          room.updateLiveState(newData)
        }
        return newData
      })
    },
    [room],
  )

  const handleSave = useCallback(async () => {
    try {
      const { error } = await supabase.from("resumes").update({ content: resumeData }).eq("id", resumeId)

      if (error) {
        throw error
      }

      toast({
        title: "Resume Saved!",
        description: "Your resume has been successfully saved.",
      })
    } catch (error: any) {
      console.error("Error saving resume:", error)
      toast({
        title: "Save Error",
        description: `Failed to save resume: ${error.message || "Unknown error"}`,
        variant: "destructive",
      })
    }
  }, [resumeData, resumeId, toast])

  if (!room) {
    return (
      <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center gap-4 py-10">
        <p className="text-lg text-gray-600">Loading collaboration room...</p>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-4xl space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Edit Your Resume</h1>
        <div className="flex items-center gap-2">
          <PresenceAvatars />
          <SharePopover resumeId={resumeId} />
          <ProfileVideoButton />
          <Button onClick={handleSave}>Save Resume</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              value={resumeData.personal?.name || ""}
              onChange={(e) => handleUpdate("personal.name", e.target.value)}
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label htmlFor="title" className="mb-1 block text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              value={resumeData.personal?.title || ""}
              onChange={(e) => handleUpdate("personal.title", e.target.value)}
              placeholder="e.g., Software Engineer"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={resumeData.personal?.email || ""}
              onChange={(e) => handleUpdate("personal.email", e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium">
              Phone
            </label>
            <Input
              id="phone"
              type="tel"
              value={resumeData.personal?.phone || ""}
              onChange={(e) => handleUpdate("personal.phone", e.target.value)}
              placeholder="(123) 456-7890"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="mb-1 block text-sm font-medium">
              LinkedIn Profile URL
            </label>
            <Input
              id="linkedin"
              value={resumeData.personal?.linkedin || ""}
              onChange={(e) => handleUpdate("personal.linkedin", e.target.value)}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
        </CardContent>
      </Card>

      <CollapsibleSection title="Summary">
        <EditableText
          editorId="summary-editor"
          initialContent={resumeData.summary || ""}
          onUpdate={(content) => handleUpdate("summary", content)}
          placeholder="Write a brief summary of your professional experience and goals."
          className="prose prose-sm w-full max-w-none rounded-md border p-3 focus-within:ring-2 focus-within:ring-blue-500"
        />
      </CollapsibleSection>

      <CollapsibleSection title="Experience">
        {resumeData.experience?.map((exp: any, index: number) => (
          <Card key={index} className="mb-4">
            <CardContent className="space-y-3 p-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Title</label>
                <Input
                  value={exp.title || ""}
                  onChange={(e) => handleUpdate(`experience.${index}.title`, e.target.value)}
                  placeholder="Job Title"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Company</label>
                <Input
                  value={exp.company || ""}
                  onChange={(e) => handleUpdate(`experience.${index}.company`, e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Location</label>
                <Input
                  value={exp.location || ""}
                  onChange={(e) => handleUpdate(`experience.${index}.location`, e.target.value)}
                  placeholder="City, State"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Start Date</label>
                  <Input
                    type="text"
                    value={exp.startDate || ""}
                    onChange={(e) => handleUpdate(`experience.${index}.startDate`, e.target.value)}
                    placeholder="e.g., Jan 2020"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">End Date</label>
                  <Input
                    type="text"
                    value={exp.endDate || ""}
                    onChange={(e) => handleUpdate(`experience.${index}.endDate`, e.target.value)}
                    placeholder="e.g., Dec 2022 or Present"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Description</label>
                <EditableText
                  editorId={`experience-${index}-description-editor`}
                  initialContent={exp.description || ""}
                  onUpdate={(content) => handleUpdate(`experience.${index}.description`, content)}
                  placeholder="Describe your responsibilities and achievements."
                  className="prose prose-sm w-full max-w-none rounded-md border p-3 focus-within:ring-2 focus-within:ring-blue-500"
                />
              </div>
            </CardContent>
          </Card>
        ))}
        <Button
          variant="outline"
          onClick={() =>
            setResumeData((prev: any) => ({
              ...prev,
              experience: [
                ...(prev.experience || []),
                {
                  title: "",
                  company: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ],
            }))
          }
        >
          Add Experience
        </Button>
      </CollapsibleSection>

      <CollapsibleSection title="Education">
        {resumeData.education?.map((edu: any, index: number) => (
          <Card key={index} className="mb-4">
            <CardContent className="space-y-3 p-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Degree</label>
                <Input
                  value={edu.degree || ""}
                  onChange={(e) => handleUpdate(`education.${index}.degree`, e.target.value)}
                  placeholder="e.g., Bachelor of Science"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">University</label>
                <Input
                  value={edu.university || ""}
                  onChange={(e) => handleUpdate(`education.${index}.university`, e.target.value)}
                  placeholder="University Name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Location</label>
                <Input
                  value={edu.location || ""}
                  onChange={(e) => handleUpdate(`education.${index}.location`, e.target.value)}
                  placeholder="City, State"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Start Date</label>
                  <Input
                    type="text"
                    value={edu.startDate || ""}
                    onChange={(e) => handleUpdate(`education.${index}.startDate`, e.target.value)}
                    placeholder="e.g., Sep 2016"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">End Date</label>
                  <Input
                    type="text"
                    value={edu.endDate || ""}
                    onChange={(e) => handleUpdate(`education.${index}.endDate`, e.target.value)}
                    placeholder="e.g., May 2020"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Description</label>
                <EditableText
                  editorId={`education-${index}-description-editor`}
                  initialContent={edu.description || ""}
                  onUpdate={(content) => handleUpdate(`education.${index}.description`, content)}
                  placeholder="List relevant coursework, honors, or activities."
                  className="prose prose-sm w-full max-w-none rounded-md border p-3 focus-within:ring-2 focus-within:ring-blue-500"
                />
              </div>
            </CardContent>
          </Card>
        ))}
        <Button
          variant="outline"
          onClick={() =>
            setResumeData((prev: any) => ({
              ...prev,
              education: [
                ...(prev.education || []),
                {
                  degree: "",
                  university: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ],
            }))
          }
        >
          Add Education
        </Button>
      </CollapsibleSection>

      <CollapsibleSection title="Skills">
        <div>
          <label htmlFor="skills" className="mb-1 block text-sm font-medium">
            Skills (comma-separated)
          </label>
          <Textarea
            id="skills"
            value={resumeData.skills?.join(", ") || ""}
            onChange={(e) =>
              handleUpdate(
                "skills",
                e.target.value.split(",").map((s) => s.trim()),
              )
            }
            placeholder="e.g., JavaScript, React, Node.js, SQL"
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Projects">
        {resumeData.projects?.map((project: any, index: number) => (
          <Card key={index} className="mb-4">
            <CardContent className="space-y-3 p-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Project Title</label>
                <Input
                  value={project.title || ""}
                  onChange={(e) => handleUpdate(`projects.${index}.title`, e.target.value)}
                  placeholder="Project Name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Start Date</label>
                  <Input
                    type="text"
                    value={project.startDate || ""}
                    onChange={(e) => handleUpdate(`projects.${index}.startDate`, e.target.value)}
                    placeholder="e.g., Mar 2021"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">End Date</label>
                  <Input
                    type="text"
                    value={project.endDate || ""}
                    onChange={(e) => handleUpdate(`projects.${index}.endDate`, e.target.value)}
                    placeholder="e.g., Jun 2021 or Present"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Description</label>
                <EditableText
                  editorId={`project-${index}-description-editor`}
                  initialContent={project.description || ""}
                  onUpdate={(content) => handleUpdate(`projects.${index}.description`, content)}
                  placeholder="Describe your project and your role."
                  className="prose prose-sm w-full max-w-none rounded-md border p-3 focus-within:ring-2 focus-within:ring-blue-500"
                />
              </div>
            </CardContent>
          </Card>
        ))}
        <Button
          variant="outline"
          onClick={() =>
            setResumeData((prev: any) => ({
              ...prev,
              projects: [...(prev.projects || []), { title: "", startDate: "", endDate: "", description: "" }],
            }))
          }
        >
          Add Project
        </Button>
      </CollapsibleSection>

      <CollapsibleSection title="Awards">
        {resumeData.awards?.map((award: any, index: number) => (
          <Card key={index} className="mb-4">
            <CardContent className="space-y-3 p-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Award Title</label>
                <Input
                  value={award.title || ""}
                  onChange={(e) => handleUpdate(`awards.${index}.title`, e.target.value)}
                  placeholder="Award Name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Issuer</label>
                <Input
                  value={award.issuer || ""}
                  onChange={(e) => handleUpdate(`awards.${index}.issuer`, e.target.value)}
                  placeholder="Issuing Organization"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Date</label>
                <Input
                  type="text"
                  value={award.date || ""}
                  onChange={(e) => handleUpdate(`awards.${index}.date`, e.target.value)}
                  placeholder="e.g., Jan 2023"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Description</label>
                <EditableText
                  editorId={`award-${index}-description-editor`}
                  initialContent={award.description || ""}
                  onUpdate={(content) => handleUpdate(`awards.${index}.description`, content)}
                  placeholder="Describe the award and its significance."
                  className="prose prose-sm w-full max-w-none rounded-md border p-3 focus-within:ring-2 focus-within:ring-blue-500"
                />
              </div>
            </CardContent>
          </Card>
        ))}
        <Button
          variant="outline"
          onClick={() =>
            setResumeData((prev: any) => ({
              ...prev,
              awards: [...(prev.awards || []), { title: "", issuer: "", date: "", description: "" }],
            }))
          }
        >
          Add Award
        </Button>
      </CollapsibleSection>

      <FloatingToolbar />
    </div>
  )
}
