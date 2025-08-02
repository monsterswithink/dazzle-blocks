"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function CollapsibleSection({ title, children, defaultOpen = true }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 px-4 pb-4">{children}</CollapsibleContent>
    </Collapsible>
  )
}
