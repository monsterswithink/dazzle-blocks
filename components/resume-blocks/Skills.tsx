"use client"
import { Badge } from "@/components/ui/badge"

interface SkillsProps {
  skills: string[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge key={index} variant="secondary">
          {skill}
        </Badge>
      ))}
    </div>
  )
}
