"use client"

import * as React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/ui/accordion"

export function GenericAccordion({
  items,
  titleKey = "title",
  subtitleKey = "company",
  defaultOpen = false,
  printExpand = false,
}: {
  items: any[],
  titleKey?: string,
  subtitleKey?: string,
  defaultOpen?: boolean,
  printExpand?: boolean,
}) {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>(() =>
    defaultOpen ? items.map((_, i) => i) : []
  )

  React.useEffect(() => {
    if (printExpand) {
      setOpenIndexes(items.map((_, i) => i))
    }
  }, [printExpand, items.length])

  return (
    <Accordion
      type="multiple"
      value={openIndexes.map(String)}
      onValueChange={(values: string[]) =>
        setOpenIndexes(values.map(Number))
      }
      className={printExpand ? "print:block" : ""}
    >
      {items.map((item, i) => (
        <AccordionItem key={i} value={String(i)}>
          <AccordionTrigger>
            <div>
              <div className="font-semibold">{item[titleKey] || `Item ${i + 1}`}</div>
              {subtitleKey && item[subtitleKey] && (
                <div className="text-xs text-muted-foreground">{item[subtitleKey]}</div>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(item).map(([k, v]) => (
                <React.Fragment key={k}>
                  <dt className="font-medium">{k}</dt>
                  <dd className="truncate text-sm">{typeof v === "object" && v !== null ? JSON.stringify(v) : String(v)}</dd>
                </React.Fragment>
              ))}
            </dl>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}