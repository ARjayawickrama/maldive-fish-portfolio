import { motion } from 'framer-motion'

export default function ArchitectureDiagram() {
  const flow = [
    'CAMERA',
    'MQ-135',
    'AI RAW FISH INSPECTION',
    'PROCESS CONTROL UNIT',
    'BOILING + SALTING',
    'ESP32 IOT NODE',
    'DHT22 + AIRFLOW + MQ-135',
    'MQTT BROKER',
    'DRYING MONITORING',
    'RESNET-18 + VOC ANALYSIS',
    'SHELF-LIFE ENGINE',
    'CENTRAL DASHBOARD',
  ]

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-500/10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {flow.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            className="relative flex min-h-[70px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-100"
          >
            {item}
            {index < flow.length - 1 && (
              <div className="absolute -right-3 top-1/2 h-px w-6 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
