import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MetricCard({ value, suffix = '', label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1200
    const start = performance.now()

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount((value * eased).toFixed(1))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.24)] backdrop-blur-xl"
    >
      <div className="mb-2 text-3xl font-bold tracking-tight text-white">
        {count}
        {suffix}
      </div>
      <p className="text-sm text-slate-300">{label}</p>
    </motion.div>
  )
}
