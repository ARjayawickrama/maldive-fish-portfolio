export default function BatchTable({ batches, selectedId, onSelect }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-900/80">
      <table className="min-w-full text-left text-sm text-slate-200">
        <thead className="border-b border-white/10 bg-slate-950/60 text-xs uppercase tracking-[0.18em] text-slate-400">
          <tr>
            <th className="px-4 py-3">Batch ID</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Grade</th>
            <th className="px-4 py-3">Boil</th>
            <th className="px-4 py-3">Drying</th>
            <th className="px-4 py-3">Final</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((batch) => (
            <tr
              key={batch.id}
              onClick={() => onSelect(batch)}
              className={`cursor-pointer border-b border-white/5 transition ${selectedId === batch.id ? 'bg-cyan-500/10' : 'hover:bg-white/5'}`}
            >
              <td className="px-4 py-3 font-medium text-white">{batch.id}</td>
              <td className="px-4 py-3">{batch.date}</td>
              <td className="px-4 py-3">{batch.rawGrade}</td>
              <td className="px-4 py-3">{batch.boilingTime} min</td>
              <td className="px-4 py-3">{batch.dryingDuration} days</td>
              <td className="px-4 py-3">{batch.finalGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
