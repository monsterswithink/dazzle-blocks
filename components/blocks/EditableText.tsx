"use client"

import type * as React from "react"
import { Input } from "@/ui/input"
import { cn } from "@/lib/utils"

interface EditableTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isEditing: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function EditableText({ isEditing, value, onChange, className, ...props }: EditableTextProps) {
  if (isEditing) {
    return <Input value={value} onChange={onChange} className={cn("w-full", className)} {...props} />
  }

  return <div className={cn("py-2", className)}>{value}</div>
}
