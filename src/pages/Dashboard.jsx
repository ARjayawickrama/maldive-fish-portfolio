import { useMemo, useState } from 'react'
import { AlertTriangle, ArrowUpRight, CheckCircle2, Gauge, Layers3, ShieldCheck } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import AlertCard from '../components/AlertCard'
import BatchTable from '../components/BatchTable'
import DashboardSidebar from '../components/DashboardSidebar'
import QualityBadge from '../components/QualityBadge'
import { activityTimeline, batchHistory, dashboardAlerts, sensorTrendData } from '../data/dashboardData'

export default function Dashboard() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [selectedBatch, setSelectedBatch] = useState(batchHistory[0])
  const [showModal, setShowModal] = useState(false)

  const filteredBatches = useMemo(() => {
    if (statusFilter === 'All') return batchHistory
    return batchHistory.filter((batch) => batch.status === statusFilter)
  }, [statusFilter])

  const chartData = sensorTrendData.map((entry) => ({
    ...entry,
    value: entry.humidity,
  }))

  return (
    <div className="bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Smart processing dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Live Operational Overview</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Processing', 'Completed', 'Rejected'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setStatusFilter(option)}
                className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  statusFilter === option ? 'bg-cyan-400 text-slate-950' : 'border border-white/10 bg-white/5 text-slate-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <DashboardSidebar />

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {[
                ['Current Batch', selectedBatch.id],
                ['Fish Quality', selectedBatch.rawGrade],
                ['Boiling Status', `${selectedBatch.boilingTime} min`],
                ['Drying Status', `${selectedBatch.avgHumidity}% RH`],
                ['Final Grade', selectedBatch.finalGrade],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Batch selector</p>
                  <p className="text-2xl font-bold text-white">{selectedBatch.id}</p>
                </div>
                <QualityBadge label={selectedBatch.finalPrediction} tone={selectedBatch.finalPrediction.includes('HIGH') ? 'success' : selectedBatch.finalPrediction.includes('MEDIUM') ? 'warning' : 'danger'} />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Status</p>
                  <p className="mt-2 text-lg font-semibold text-white">{selectedBatch.status}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Raw Grade</p>
                  <p className="mt-2 text-lg font-semibold text-white">{selectedBatch.rawGrade}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">MQ-135</p>
                  <p className="mt-2 text-lg font-semibold text-white">{selectedBatch.mq135} ADC</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Boiling</p>
                  <p className="mt-2 text-lg font-semibold text-white">{selectedBatch.boilingTime} min</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" onClick={() => setShowModal(true)} className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
                  View traceability
                  <ArrowUpRight size={15} />
                </button>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Gauge size={15} />
                  Demo / Simulated Data
                </span>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Batch traceability</h3>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">Live</span>
                </div>
                <BatchTable batches={filteredBatches} selectedId={selectedBatch.id} onSelect={(batch) => setSelectedBatch(batch)} />
              </div>

              <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
                <h3 className="text-xl font-semibold text-white">Alert center</h3>
                {dashboardAlerts.map((alert) => (
                  <AlertCard key={alert.title} level={alert.level === 'ok' ? 'ok' : alert.level} title={alert.title} detail={alert.detail} />
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
                <h3 className="mb-4 text-xl font-semibold text-white">Drying performance</h3>
                <div className="h-64">
                  <ResponsiveContainer>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="time" stroke="#cbd5e1" />
                      <YAxis stroke="#cbd5e1" />
                      <Tooltip />
                      <Line type="monotone" dataKey="humidity" stroke="#22d3ee" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
                <h3 className="mb-4 text-xl font-semibold text-white">Quality overview</h3>
                <div className="h-64">
                  <ResponsiveContainer>
                    <BarChart data={[{ name: 'Fresh', value: 69 }, { name: 'Medium', value: 24 }, { name: 'Low', value: 7 }]}> 
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="name" stroke="#cbd5e1" />
                      <YAxis stroke="#cbd5e1" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#34d399" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
              <h3 className="mb-4 text-xl font-semibold text-white">Activity timeline</h3>
              <div className="space-y-3">
                {activityTimeline.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200">
                    <CheckCircle2 size={18} className="mt-0.5 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Batch traceability</p>
                <h2 className="mt-2 text-2xl font-bold text-white">{selectedBatch.id}</h2>
              </div>
              <button type="button" onClick={() => setShowModal(false)} className="rounded-full border border-white/10 px-3 py-1 text-sm text-white">Close</button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Date', selectedBatch.date],
                ['Raw fish grade', selectedBatch.rawGrade],
                ['Fish weight', `${selectedBatch.fishWeight} kg`],
                ['Boiling time', `${selectedBatch.boilingTime} min`],
                ['Salt concentration', `${selectedBatch.salt}%`],
                ['Drying duration', `${selectedBatch.dryingDuration} days`],
                ['Average humidity', `${selectedBatch.avgHumidity}%`],
                ['Average temperature', `${selectedBatch.avgTemperature}°C`],
                ['Final grade', selectedBatch.finalGrade],
                ['Estimated shelf life', `${selectedBatch.estimatedShelfLife} days`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
