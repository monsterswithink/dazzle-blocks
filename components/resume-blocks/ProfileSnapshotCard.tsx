"use client"
import { useEffect, useMemo, useState } from "react"
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Line,
  Bar,
  Pie,
  Cell,
} from "recharts"
import {
  useVeltClient,
  useUniqueViewsByDate,
  useUniqueViewsByUser,
  VeltViewAnalytics,
  useSetDocumentId,
  useIdentify,
} from "@veltdev/react"

/* In your _app.tsx or root layout:
––––––––––––––––––––––––––––––––––––––––––––––––––––––––————
<VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_KEY!}>
  <AuthBoundary /* your auth logic */>
    <ResumeEditor documentId={resumeId} />
  </AuthBoundary>
</VeltProvider>

export function AuthBoundary({ children }) {
  const { user } = useSession()  // supabase auth example
  useIdentify(user.id) // identifies Velt user
  return children
}

function ResumeEditor({ documentId }) {
  useSetDocumentId(documentId)
  // keep your Tiptap + CRDT logic here (e.g. createVeltTipTapStore, etc.)
  return <ProfileSnapshotCard />
}
––––––––––––––––––––––––––––––––––––––––––––––––––––––––————
*/

interface AnalyticsByDate {
  date: string
  count: number
}
interface AnalyticsByUser {
  profileUrl?: string
  name?: string
  count: number
}

export function ProfileSnapshotCard() {
  const { client } = useVeltClient()
  const viewsByDate = useUniqueViewsByDate()
  const viewsByUser = useUniqueViewsByUser()
  const [chartReady, setChartReady] = useState(false)

  useEffect(() => {
    if (client) setChartReady(true)
  }, [client])

  const dates: AnalyticsByDate[] =
    chartReady && viewsByDate
      ? viewsByDate.map((v) => ({
          date: v.date, // YYYY-MM-DD or humanized
          count: v.count,
        }))
      : []

  const users: AnalyticsByUser[] =
    chartReady && viewsByUser
      ? viewsByUser.map((v) => ({
          name: v.name ?? v.userId,
          count: v.count,
          profileUrl: v.photoUrl || undefined,
        }))
      : []

  return (
    <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow">
      <h2 className="mb-4 text-xl font-semibold flex items-center gap-2">
        Resume Analytics Snapshot
        <VeltViewAnalytics />
      </h2>

      <h3 className="mt-2 font-semibold">👁️ Views Over Time</h3>
      <div className="h-40 w-full">
        <ResponsiveContainer>
          <LineChart data={dates}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#3b82f6" name="Unique Views" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h3 className="mt-6 font-semibold">👥 Unique Viewers</h3>
      <div className="grid grid-cols-2 gap-2 my-2">
        {users.slice(0, 4).map((u) => (
          <div key={u.name} className="flex items-center gap-2">
            <img src={u.profileUrl || "/avatar-placeholder.png"} alt="" className="w-8 h-8 rounded-full" />
            <span>{u.name} ({u.count})</span>
          </div>
        ))}
      </div>

      <h3 className="mt-6 font-semibold">Traffic Sources (guess via clicks)</h3>
      <div className="mt-2 flex justify-center h-36">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={[{ name: "LinkedIn", value: 150 }, { name: "GitHub", value: 100 }, { name: "Direct", value: 70 }, { name: "Other", value: 30 }]}
              dataKey="value"
              nameKey="name"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
            >
              {[{ color: "#0077B5" }, { color: "#6e5494" }, { color: "#4CAF50" }, { color: "#FFC107" }].map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={() => {
          client.getViewsElement()?.resetData?.()
        }}
        className="mt-4 py-1 px-3 bg-blue-100 text-blue-700 rounded"
      >
        Clear My Views
      </button>
    </div>
  )
}
