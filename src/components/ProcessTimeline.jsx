import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function ProcessTimeline({ stages }) {
  const [selected, setSelected] = useState(stages[0])

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-4 md:grid-cols-2">
        {stages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => setSelected(stage)}
            className={`group rounded-2xl border p-4 text-left transition ${
              selected.id === stage.id
                ? 'border-cyan-400/60 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                : 'border-white/10 bg-slate-900/50 hover:border-cyan-300/40 hover:bg-slate-800/80'
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{stage.number}</span>
              <CheckCircle2 size={16} className="text-cyan-200" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{stage.title}</h3>
            <p className="mb-3 text-sm leading-6 text-slate-300">{stage.description}</p>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>{stage.technology}</span>
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </div>
          </button>
        ))}
      </div>

      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl shadow-cyan-500/5"
      >
        <div className={`mb-5 h-2 w-24 rounded-full bg-gradient-to-r ${selected.accent}`} />
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">{selected.number}</p>
        <h3 className="mb-4 text-2xl font-semibold text-white">{selected.title}</h3>
        <p className="mb-6 text-base leading-7 text-slate-300">{selected.description}</p>

        <div className="space-y-4">
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Technology</p>
            <p className="mt-2 text-lg font-medium text-white">{selected.technology}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Key metric</p>
            <p className="mt-2 text-lg font-medium text-slate-100">{selected.metric}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
