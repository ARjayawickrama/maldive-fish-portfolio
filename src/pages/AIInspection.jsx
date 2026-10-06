import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ChartCard from '../components/ChartCard'

const detectionMetrics = [
  { name: 'Precision', value: 94.1 },
  { name: 'Recall', value: 93.7 },
  { name: 'F1', value: 93.9 },
  { name: 'mAP@0.5', value: 95.8 },
]

const gradeRules = [
  { title: 'Very Fresh', details: 'MQ-135 ADC ≤ 90', tone: 'success' },
  { title: 'Fresh / Acceptable', details: 'MQ-135 ADC 91–150', tone: 'normal' },
  { title: 'Spoiled / Rejected', details: 'MQ-135 ADC > 150', tone: 'danger' },
]

export default function AIInspection() {
  const [image, setImage] = useState(null)
  const [result, setResult] = useState({
    className: 'Fresh',
    confidence: 92.4,
    mq135: 124,
    decision: 'Acceptable for processing',
    box: 'x: 118, y: 94, w: 162, h: 108',
  })

  const handleUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImage(url)

    const mq135 = 126 + Math.round(Math.random() * 20)
    const className = mq135 <= 90 ? 'Very Fresh' : mq135 <= 150 ? 'Fresh' : 'Spoiled'
    const confidence = 90 + Math.random() * 8

    setResult({
      className,
      confidence: Number(confidence.toFixed(1)),
      mq135,
      decision: className === 'Spoiled' ? 'Reject batch for quality concerns' : 'Acceptable for processing',
      box: `x: ${112 + Math.round(Math.random() * 20)}, y: ${90 + Math.round(Math.random() * 24)}, w: ${150 + Math.round(Math.random() * 25)}, h: ${100 + Math.round(Math.random() * 18)}`,
    })
  }

  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">AI inspection</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AI-Powered Raw Fish Quality Assessment</h1>
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {gradeRules.map((rule) => (
            <div key={rule.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{rule.title}</p>
              <p className="text-lg font-medium text-white">{rule.details}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
            <label className="mb-4 block text-sm font-medium text-slate-200">Upload fish image for AI inspection demo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="block w-full rounded-2xl border border-dashed border-cyan-500/30 bg-slate-800 px-4 py-3 text-sm text-slate-200 file:mr-3 file:rounded-full file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-slate-950"
            />
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
              {image ? (
                <img src={image} alt="Uploaded fish sample" className="h-[320px] w-full object-cover" />
              ) : (
                <div className="flex h-[320px] items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),transparent_45%),rgba(15,23,42,1)] text-slate-400">
                  AI inference simulation preview
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">AI inference simulation</h3>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">Demo / Simulated</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Detected class</p>
                <p className="mt-2 text-2xl font-bold text-white">{result.className}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Confidence</p>
                <p className="mt-2 text-2xl font-bold text-white">{result.confidence}%</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Bounding box</p>
                <p className="mt-2 text-sm font-medium text-white">{result.box}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">MQ-135 reading</p>
                <p className="mt-2 text-2xl font-bold text-white">{result.mq135} ADC</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Final decision</p>
              <p className="mt-2 text-lg font-medium text-white">{result.decision}</p>
            </div>
          </div>
        </div>

        <ChartCard title="YOLO11s Performance Summary">
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <BarChart data={detectionMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#cbd5e1" />
                <YAxis domain={[80, 100]} stroke="#cbd5e1" />
                <Tooltip />
                <Bar dataKey="value" fill="#22d3ee" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Precision</p>
              <p className="mt-2 text-2xl font-bold text-white">94.1%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Recall</p>
              <p className="mt-2 text-2xl font-bold text-white">93.7%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">F1</p>
              <p className="mt-2 text-2xl font-bold text-white">93.9%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Latency</p>
              <p className="mt-2 text-2xl font-bold text-white">16.2 ms</p>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  )
}
