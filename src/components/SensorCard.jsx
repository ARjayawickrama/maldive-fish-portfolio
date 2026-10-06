import { motion } from 'framer-motion'
import { Activity, Droplets, Gauge, Thermometer, Wind } from 'lucide-react'

const icons = {
  temperature: Thermometer,
  humidity: Droplets,
  airflow: Wind,
  voc: Activity,
  mq135: Gauge,
}

export default function SensorCard({ title, value, unit, status, tone = 'normal' }) {
  const Icon = icons[title.toLowerCase().replace(/\s+/g, '')] || Activity

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-lg shadow-cyan-500/5"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`rounded-xl p-2 ${tone === 'danger' ? 'bg-red-500/10 text-red-300' : 'bg-cyan-500/10 text-cyan-300'}`}>
            <Icon size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{title}</p>
          </div>
        </div>
        <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${
          status === 'alert' ? 'bg-red-500/10 text-red-300' : 'bg-emerald-500/10 text-emerald-300'
        }`}>
          {status === 'alert' ? 'Alert' : 'Stable'}
        </span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-white">{value}</span>
        <span className="mb-1 text-sm text-slate-400">{unit}</span>
      </div>
    </motion.div>
  )
}
