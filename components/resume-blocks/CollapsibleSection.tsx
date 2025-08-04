"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronDown, Plus, Minus } from "lucide-react"

interface CollapsibleSectionProps {
  title: string
  items: any[]
  isEditing: boolean
  onAddItem: () => void
  onRemoveItem: (id: number) => void
  onItemChange: (id: number, field: string, value: string) => void
  renderItem: (
    item: any,
    index: number,
    isEditing: boolean,
    onItemChange: (id: number, field: string, value: string) => void,
  ) => React.ReactNode
}

export function CollapsibleSection({
  title,
  items,
  isEditing,
  onAddItem,
  onRemoveItem,
  onItemChange,
  renderItem,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle {title}</span>
            </Button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent className="space-y-4 p-4 pt-0">
          {items.map((item, index) => (
            <div key={item.id} className="border-b pb-4 last:border-b-0 last:pb-0">
              {renderItem(item, index, isEditing, onItemChange)}
              {isEditing && (
                <Button variant="destructive" size="sm" onClick={() => onRemoveItem(item.id)} className="mt-2">
                  <Minus className="w-4 h-4 mr-2" /> Remove
                </Button>
              )}
            </div>
          ))}
          {isEditing && (
            <Button variant="outline" size="sm" onClick={onAddItem} className="w-full mt-4 bg-transparent">
              <Plus className="w-4 h-4 mr-2" /> Add {title.slice(0, -1)}
            </Button>
          )}
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}
