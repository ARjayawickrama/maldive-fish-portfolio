export default function QualityBadge({ label, tone = 'normal' }) {
  const styles = {
    normal: 'border-cyan-500/25 bg-cyan-500/10 text-cyan-200',
    warning: 'border-amber-500/25 bg-amber-500/10 text-amber-200',
    danger: 'border-red-500/25 bg-red-500/10 text-red-200',
    success: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-200',
  }

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${styles[tone]}`}>
      {label}
    </span>
  )
}
