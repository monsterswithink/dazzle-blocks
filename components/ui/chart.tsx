"use client"

import * as React from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

import { cn } from "@/lib/utils"

const ChartContext = React.createContext<any>({})

function Chart({ children, ...props }: React.ComponentProps<typeof ResponsiveContainer>) {
  return (
    <ChartContext.Provider value={props}>
      <ResponsiveContainer {...props}>{children}</ResponsiveContainer>
    </ChartContext.Provider>
  )
}

function ChartTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none text-muted-foreground">{label}</p>
          {payload.map((item: any) => (
            <div key={item.dataKey} className="flex items-center justify-between gap-4">
              <span className="text-sm" style={{ color: item.color }}>
                {item.name}
              </span>
              <span className="text-sm font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

function ChartLegend({ payload }: any) {
  return (
    <ul className="flex flex-wrap justify-center gap-4 p-2">
      {payload.map((entry: any) => (
        <li key={entry.value} className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-sm text-muted-foreground">{entry.value}</span>
        </li>
      ))}
    </ul>
  )
}

function ChartContainer({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("h-[400px] w-full", className)} {...props}>
      {children}
    </div>
  )
}

export {
  Chart,
  ChartTooltip,
  ChartLegend,
  ChartContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
}
