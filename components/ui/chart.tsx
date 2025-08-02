"use client"

import * as React from "react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell,
} from "recharts"

import { cn } from "@/lib/utils"

// Define common props for charts
interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[]
  width?: string | number
  height?: string | number
}

// Bar Chart Component
interface BarChartProps extends ChartProps {
  dataKey: string
  barKey: string
  fill?: string
}

const ChartBar = React.forwardRef<HTMLDivElement, BarChartProps>(
  ({ data, dataKey, barKey, fill = "#8884d8", width = "100%", height = 300, className, ...props }, ref) => (
    <div ref={ref} className={cn("w-full h-full", className)} {...props}>
      <ResponsiveContainer width={width} height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={barKey} fill={fill} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ),
)
ChartBar.displayName = "ChartBar"

// Line Chart Component
interface LineChartProps extends ChartProps {
  dataKey: string
  lineKey: string
  stroke?: string
}

const ChartLine = React.forwardRef<HTMLDivElement, LineChartProps>(
  ({ data, dataKey, lineKey, stroke = "#8884d8", width = "100%", height = 300, className, ...props }, ref) => (
    <div ref={ref} className={cn("w-full h-full", className)} {...props}>
      <ResponsiveContainer width={width} height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={lineKey} stroke={stroke} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ),
)
ChartLine.displayName = "ChartLine"

// Pie Chart Component
interface PieChartProps extends ChartProps {
  dataKey: string
  nameKey: string
  colors?: string[]
}

const ChartPie = React.forwardRef<HTMLDivElement, PieChartProps>(
  (
    {
      data,
      dataKey,
      nameKey,
      colors = ["#8884d8", "#82ca9d", "#ffc658", "#a4de6c", "#d0ed57"],
      width = "100%",
      height = 300,
      className,
      ...props
    },
    ref,
  ) => (
    <div ref={ref} className={cn("w-full h-full", className)} {...props}>
      <ResponsiveContainer width={width} height={height}>
        <PieChart>
          <Pie data={data} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  ),
)
ChartPie.displayName = "ChartPie"

export { ChartBar, ChartLine, ChartPie }
