"use client"

import { Progress } from "@/ui/progress"

interface SkillsChartProps {
  skills: string[]
  className?: string
}

export function SkillsChart({ skills, className = "" }: SkillsChartProps) {
  // Generate skill levels (in a real app, this would come from data)
  const skillsWithLevels = skills.slice(0, 8).map((skill, index) => ({
    name: skill,
    level: Math.floor(Math.random() * 40) + 60, // Random level between 60-100
  }))

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsWithLevels.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  )
}
