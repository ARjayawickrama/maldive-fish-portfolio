import { motion } from 'framer-motion'

export default function ChartCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-cyan-500/5"
    >
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      {children}
    </motion.div>
  )
}
