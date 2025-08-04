"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Minus } from "lucide-react"

interface Skill {
  id: number
  name: string
  level: number
}

interface SkillsProps {
  skills: Skill[]
  isEditing: boolean
  onSkillChange: (id: number, newName: string, newLevel: number) => void
  onRemoveSkill: (id: number) => void
}

export function Skills({ skills, isEditing, onSkillChange, onRemoveSkill }: SkillsProps) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div
          key={skill.id}
          className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end border-b pb-4 last:border-b-0 last:pb-0"
        >
          <div className="col-span-1 md:col-span-2">
            <Label htmlFor={`skill-name-${index}`}>Skill Name</Label>
            <Input
              id={`skill-name-${index}`}
              value={skill.name}
              onChange={(e) => onSkillChange(skill.id, e.target.value, skill.level)}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor={`skill-level-${index}`}>Level</Label>
            <Select
              value={String(skill.level)}
              onValueChange={(value) => onSkillChange(skill.id, skill.name, Number.parseInt(value))}
              disabled={!isEditing}
            >
              <SelectTrigger id={`skill-level-${index}`}>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Beginner</SelectItem>
                <SelectItem value="2">Intermediate</SelectItem>
                <SelectItem value="3">Advanced</SelectItem>
                <SelectItem value="4">Expert</SelectItem>
                <SelectItem value="5">Master</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {isEditing && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onRemoveSkill(skill.id)}
              className="col-span-full md:col-span-1 md:col-start-3 mt-2 md:mt-0"
            >
              <Minus className="w-4 h-4 mr-2" /> Remove
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}
