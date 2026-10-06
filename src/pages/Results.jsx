import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ChartCard from '../components/ChartCard'
import { qualityDistribution, sensorTrendData } from '../data/dashboardData'

const beforeAfterData = [
  { name: 'Boiling Time', before: 58.4, after: 42.1 },
  { name: 'Energy', before: 3.82, after: 2.94 },
  { name: 'Salt Variation', before: 18.6, after: 5.2 },
  { name: 'Flaking Loss', before: 6.8, after: 1.1 },
]

const modelPerformance = [
  { name: 'YOLO11s', value: 95.8 },
  { name: 'ResNet-18', value: 94.0 },
  { name: 'Drying Stability', value: 96.4 },
  { name: 'MQTT Reliability', value: 99.6 },
]

const COLORS = ['#22d3ee', '#34d399', '#fbbf24']

export default function Results() {
  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Results & analytics</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Research Results Dashboard</h1>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Raw fish mAP@0.5', '95.8%'],
            ['Latency', '16.2 ms'],
            ['FPS', '61.7'],
            ['Final accuracy', '94.0%'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard title="Before vs After Process Performance">
            <div className="h-72">
              <ResponsiveContainer>
                <BarChart data={beforeAfterData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="before" fill="#94a3b8" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="after" fill="#22d3ee" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="AI Classification Distribution">
            <div className="h-72">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={qualityDistribution} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={4}>
                    {qualityDistribution.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="IoT Humidity Timeline">
            <div className="h-72">
              <ResponsiveContainer>
                <LineChart data={sensorTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Line type="monotone" dataKey="humidity" stroke="#34d399" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Model Performance Benchmarks">
            <div className="h-72">
              <ResponsiveContainer>
                <BarChart data={modelPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#a78bfa" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">Experimental Results</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Dataset</p>
              <ul className="mt-3 space-y-2 text-slate-200">
                <li>20 full-scale production batches</li>
                <li>15 kg raw tuna per batch</li>
                <li>4-month experimental period</li>
                <li>Commercial processing facility in southern Sri Lanka</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Research finding</p>
              <p className="mt-3 text-slate-200">
                The proposed system demonstrated improvements across raw grading, thermal processing, drying stability, and final product assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
