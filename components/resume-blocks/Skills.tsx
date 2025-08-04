"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Minus } from "lucide-react"
import { cn } from "@/lib/utils"

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
        <div key={skill.id} className="border-b pb-4 last:border-b-0 last:pb-0">
          <div>
            <Label htmlFor={`skill-name-${index}`}>Skill Name</Label>
            {isEditing ? (
              <Input
                id={`skill-name-${index}`}
                value={skill.name}
                onChange={(e) => onSkillChange(skill.id, e.target.value, skill.level)}
                className="mb-2"
              />
            ) : (
              <div className="py-2 font-semibold">{skill.name}</div>
            )}
          </div>
          <div>
            <Label htmlFor={`skill-level-${index}`}>Level ({skill.level}/5)</Label>
            {isEditing ? (
              <Slider
                id={`skill-level-${index}`}
                min={1}
                max={5}
                step={1}
                value={[skill.level]}
                onValueChange={(val) => onSkillChange(skill.id, skill.name, val[0])}
                className="w-[60%] my-2"
              />
            ) : (
              <div className="py-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-3 w-3 rounded-full",
                        i < skill.level ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                      )}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          {isEditing && (
            <Button variant="destructive" size="sm" onClick={() => onRemoveSkill(skill.id)} className="mt-2">
              <Minus className="w-4 h-4 mr-2" /> Remove
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}
