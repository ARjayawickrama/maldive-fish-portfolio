import { motion } from 'framer-motion'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import { architectureSections } from '../data/researchData'

export default function Architecture() {
  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Cyber-physical system</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">End-to-End Cyber-Physical Architecture</h1>
        </div>

        <div className="mb-12">
          <ArchitectureDiagram />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {architectureSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {section.items.map((item) => (
                  <li key={item} className="rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
