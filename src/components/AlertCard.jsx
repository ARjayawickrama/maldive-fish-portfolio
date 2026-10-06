export default function AlertCard({ level = 'info', title, detail }) {
  const styles = {
    ok: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
    info: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-200',
    warning: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
    danger: 'border-red-500/30 bg-red-500/10 text-red-200',
  }

  return (
    <div className={`rounded-2xl border p-4 ${styles[level]}`}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em]">{level}</p>
      <p className="text-base font-semibold">{title}</p>
      <p className="mt-2 text-sm opacity-90">{detail}</p>
    </div>
  )
}
