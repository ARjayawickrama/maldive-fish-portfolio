import { useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { calculateBoilingTime, calculateProcessStatus, calculateSaltConcentration, calculateShelfLife } from '../utils/calculations'

const freshnessOptions = ['Very Fresh', 'Fresh', 'Spoiled']

export default function ProcessOptimization() {
  const [form, setForm] = useState({ batchMass: 15, thickness: 4.5, freshness: 'Fresh' })
  const [shelfForm, setShelfForm] = useState({ temperature: 28, waterActivity: 0.68, degIndex: 72 })

  const result = useMemo(() => {
    const boilingTime = calculateBoilingTime(form)
    const salt = calculateSaltConcentration(form.freshness)
    const processStatus = calculateProcessStatus({
      boilingTime,
      batchMass: form.batchMass,
      thickness: form.thickness,
    })

    return {
      boilingTime,
      salt,
      processStatus,
      coreTemp: '92°C–96°C',
      brine: '12%–15%',
    }
  }, [form])

  const shelfLife = useMemo(() => calculateShelfLife(shelfForm), [shelfForm])

  const chartData = [
    { name: 'Low', value: 12 },
    { name: 'Target', value: 14 },
    { name: 'High', value: 15 },
  ]

  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Optimization</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Intelligent Boiling & Salt Distribution Optimization</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <h3 className="mb-6 text-xl font-semibold text-white">Process calculator</h3>
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Batch Mass (kg)</span>
                <input
                  type="number"
                  min="5"
                  max="40"
                  value={form.batchMass}
                  onChange={(event) => setForm((prev) => ({ ...prev, batchMass: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white outline-none ring-0"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Fish Thickness (cm)</span>
                <input
                  type="number"
                  min="1"
                  max="12"
                  step="0.1"
                  value={form.thickness}
                  onChange={(event) => setForm((prev) => ({ ...prev, thickness: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white outline-none ring-0"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Freshness Grade</span>
                <select
                  value={form.freshness}
                  onChange={(event) => setForm((prev) => ({ ...prev, freshness: event.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white outline-none ring-0"
                >
                  {freshnessOptions.map((option) => (
                    <option value={option} key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Recommended boiling time</p>
              <p className="mt-2 text-4xl font-bold text-white">{result.boilingTime.toFixed(1)} min</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Salt concentration</p>
                <p className="mt-2 text-2xl font-bold text-white">{result.salt.toFixed(1)}%</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Core temp</p>
                <p className="mt-2 text-2xl font-bold text-white">{result.coreTemp}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Process status</p>
                <p className="mt-2 text-2xl font-bold text-white">{result.processStatus}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Research equation</p>
              <p className="mt-3 text-base leading-7 text-slate-200">
                t<sub>b</sub> = α × (d<sub>m</sub> / d<sub>0</sub>)^1.4 × (M<sub>batch</sub> / M<sub>0</sub>)^0.3 + δ(Y<sub>raw</sub>)
              </p>
              <p className="mt-3 text-sm text-slate-300">Where d<sub>0</sub> = 4.5 cm, M<sub>0</sub> = 15 kg, α = 40 minutes, δ = 0 for Very Fresh and +3.5 min for Fresh.</p>
            </div>

            <div className="h-52 w-full rounded-2xl border border-white/10 bg-slate-950 p-4">
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Shelf-life prediction</p>
          <h3 className="text-2xl font-semibold text-white">Predictive Shelf-Life Engine</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Storage Temperature (°C)</span>
                <input
                  type="number"
                  value={shelfForm.temperature}
                  onChange={(event) => setShelfForm((prev) => ({ ...prev, temperature: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Water Activity</span>
                <input
                  type="number"
                  step="0.01"
                  value={shelfForm.waterActivity}
                  onChange={(event) => setShelfForm((prev) => ({ ...prev, waterActivity: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Final MQ-135 Degradation Index</span>
                <input
                  type="number"
                  value={shelfForm.degIndex}
                  onChange={(event) => setShelfForm((prev) => ({ ...prev, degIndex: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white"
                />
              </label>
            </div>
            <div className="rounded-[2rem] border border-cyan-500/20 bg-cyan-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Estimated Shelf Life</p>
              <p className="mt-3 text-4xl font-bold text-white">{shelfLife} Days</p>
              <div className="mt-5 space-y-2 text-sm text-slate-200">
                <p>Baseline shelf life: 180 days</p>
                <p>Activation energy: 42.5 kJ/mol</p>
                <p>β: 0.65</p>
              </div>
              <p className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
                This research prototype provides an estimated analytical prediction and should not replace laboratory food-safety testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
