"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Pie, Cell } from "recharts"
import { useRoom } from "@velt/react"
import { useEffect, useState } from "react"

// Dummy data for demonstration
const dummyAnalyticsData = {
  views: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
  ],
  clicks: [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 150 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 180 },
    { name: "May", value: 250 },
  ],
  sources: [
    { name: "LinkedIn", value: 400, color: "#0077B5" },
    { name: "GitHub", value: 300, color: "#6e5494" },
    { name: "Direct", value: 200, color: "#4CAF50" },
    { name: "Other", value: 100, color: "#FFC107" },
  ],
}

export function ProfileSnapshotCard() {
  const { room } = useRoom()
  const [analyticsData, setAnalyticsData] = useState(dummyAnalyticsData)

  useEffect(() => {
    if (room) {
      // Example of fetching analytics data using Velt's view analytics
      // This is a simplified example. In a real app, you'd integrate with your backend
      // that processes Velt analytics events.
      const fetchVeltAnalytics = async () => {
        // Velt's view analytics typically involves setting up webhooks
        // to capture view events and then processing them on your backend.
        // For this demo, we'll just simulate fetching data.
        console.log("Fetching Velt view analytics (simulated)...")
        // Velt.getAnalytics().then(data => {
        //   // Process Velt analytics data here
        //   // For now, we'll just use dummy data
        // });
      }

      fetchVeltAnalytics()
    }
  }, [room])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart className="h-5 w-5" />
          Resume Analytics Snapshot
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Views Over Time</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData.views}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" name="Views" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Clicks Over Time</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.clicks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" name="Clicks" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Traffic Sources</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData.sources}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {analyticsData.sources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
