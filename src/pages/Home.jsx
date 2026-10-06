import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Droplets, Factory, Fish, Gauge, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import MetricCard from '../components/MetricCard'
import { heroMetrics, problemCards, processComparison } from '../data/researchData'

const workflow = ['RAW FISH', 'AI INSPECTION', 'BOILING + SALTING', 'SMART DRYING', 'FINAL QUALITY', 'SHELF-LIFE']

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.13),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <BrainCircuit size={14} />
              AI + IoT RESEARCH PROJECT
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Smart Maldive Fish Processing
            </h1>
            <h2 className="mt-4 max-w-2xl text-xl font-medium text-slate-300 sm:text-2xl">
              AI-powered quality assessment and IoT-driven process optimization for traditional fish processing.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Transform traditional Maldive fish processing into a digitally monitored, data-driven production workflow using computer vision, gas sensing, IoT telemetry, process optimization and shelf-life prediction.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/research" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Explore Research
                <ArrowRight size={16} />
              </Link>
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10">
                Open Live Dashboard
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Factory size={16} className="text-cyan-300" />
                  Traditional-to-Intelligent Workflow
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Live Demo
                </span>
              </div>
              <div className="space-y-3">
                {workflow.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-800 text-xs font-bold text-cyan-200">
                      {index + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-semibold text-white">
                      {step}
                    </div>
                    {index < workflow.length - 1 && <ArrowRight className="text-slate-500" size={18} />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {heroMetrics.map((metric) => (
              <MetricCard key={metric.label} label={metric.label} value={metric.value} suffix={metric.suffix} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Research problem</p>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Smart Maldive Fish Processing?</h3>
          </div>
          <div className="mb-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-cyan-100 p-3 text-cyan-700">
                  {index === 0 && <Fish size={20} />}
                  {index === 1 && <Gauge size={20} />}
                  {index === 2 && <Droplets size={20} />}
                  {index === 3 && <ShieldCheck size={20} />}
                </div>
                <h4 className="text-lg font-semibold text-slate-900">{problem}</h4>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">System transformation</p>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">From Traditional Processing to Intelligent Production</h3>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-slate-500">Traditional Process</th>
                    <th className="px-4 py-2 text-slate-500">Proposed Smart Process</th>
                  </tr>
                </thead>
                <tbody>
                  {processComparison.map((row) => (
                    <tr key={row.traditional} className="rounded-2xl bg-slate-50 text-slate-700">
                      <td className="rounded-l-2xl border border-r-0 border-slate-200 px-4 py-3">{row.traditional}</td>
                      <td className="rounded-r-2xl border border-l-0 border-slate-200 px-4 py-3 text-cyan-700">{row.proposed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
