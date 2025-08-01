"use client"

import { Progress } from "@/ui/progress"
import { useVeltState } from "@veltdev/react" // Velt SDK hook

interface Skill {
  name: string
  level: number // 0-100
}

interface SkillsChartProps {
  editable?: boolean
  className?: string
}

export function SkillsChart({ editable, className = "" }: SkillsChartProps) {
  // Replace with Velt state (shared across all clients)
  const [skills, setSkills] = useVeltState<Skill[]>("skills", [])

  const handleLevelChange = (i: number, newLevel: number) => {
    if (!editable) return
    const updated = [...skills]
    updated[i].level = newLevel
    setSkills(updated)
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.slice(0, 8).map((skill, i) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
            {editable && (
              <input
                type="range"
                min={0}
                max={100}
                value={skill.level}
                onChange={e => handleLevelChange(i, Number(e.target.value))}
                className="w-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}