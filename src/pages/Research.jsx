import { motion } from 'framer-motion'
import { ArrowRight, Beaker, Database, Radar, Sparkles } from 'lucide-react'
import ProcessTimeline from '../components/ProcessTimeline'
import { pipelineStages } from '../data/researchData'

export default function Research() {
  const researchPillars = [
    { title: 'AI Quality Inspection', icon: Radar, text: 'Vision-driven freshness assessment for raw fish using object detection and sensor fusion.' },
    { title: 'Thermal Process Control', icon: Beaker, text: 'Boiling and salting are optimized through empirical formulas and real-time thermal response.' },
    { title: 'Drying Telemetry', icon: Database, text: 'ESP32 nodes monitor RH, airflow and VOC signals to stabilize the drying environment.' },
    { title: 'Predictive Analytics', icon: Sparkles, text: 'Shelf-life modeling and grade prediction transform processing into a measurable production loop.' },
  ]

  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Research overview</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Smart Processing Research</h1>
        </div>

        <div className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {researchPillars.map(({ title, icon: Icon, text }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300">
                <Icon size={22} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Research pipeline</p>
              <h2 className="text-3xl font-bold text-white">Processing Stages</h2>
            </div>
            <div className="hidden rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-200 md:block">
              8-stage end-to-end workflow
            </div>
          </div>
          <ProcessTimeline stages={pipelineStages} />
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Research gap</p>
          <h2 className="mb-6 text-3xl font-bold text-white">What Makes This Research Different?</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-slate-400">Existing systems</th>
                  <th className="px-4 py-3 text-slate-400">Proposed system</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Raw fish only', 'All processing stages'],
                  ['Laboratory focused', 'Vision + gas sensing + IoT'],
                  ['Single-stage', 'Real-time monitoring'],
                  ['No end-to-end traceability', 'Edge AI'],
                  ['Limited real-time deployment', 'End-to-end traceability'],
                ].map(([existing, proposed]) => (
                  <tr key={existing} className="border-t border-white/10">
                    <td className="px-4 py-3 text-slate-300">{existing}</td>
                    <td className="px-4 py-3 text-cyan-200">{proposed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
