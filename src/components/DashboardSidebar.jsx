import { BarChart3, Boxes, Droplets, Gauge, ShieldCheck, Thermometer, TrendingUp } from 'lucide-react'

const items = [
  { label: 'Dashboard', icon: BarChart3 },
  { label: 'Raw Inspection', icon: Gauge },
  { label: 'Boiling', icon: Thermometer },
  { label: 'Drying', icon: Droplets },
  { label: 'Final Quality', icon: ShieldCheck },
  { label: 'Shelf Life', icon: TrendingUp },
  { label: 'Batch History', icon: Boxes },
]

export default function DashboardSidebar({ active = 'Dashboard' }) {
  return (
    <aside className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-3">
      <div className="mb-4 px-3 pt-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Operations</p>
      </div>
      <nav className="space-y-2">
        {items.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
              active === label ? 'bg-cyan-500/10 text-cyan-200' : 'text-slate-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
