import { useMemo, useState } from 'react'
import { CalendarDays, ClipboardList } from 'lucide-react'

const milestones = [
  { name: 'Project Proposal', type: 'Proposal' },
  { name: 'Progress Presentation - 1', type: 'Progress presentation' },
  { name: 'Progress Presentation - 2', type: 'Progress presentation' },
  { name: 'Final Assessment', type: 'Final assessment' },
  { name: 'Viva', type: 'Final assessment' },
]

const filters = ['All assessments', 'Proposal', 'Progress presentation', 'Final assessment']

export default function Milestones() {
  const [filter, setFilter] = useState(filters[0])
  const visibleMilestones = useMemo(
    () => filter === filters[0] ? milestones : milestones.filter((milestone) => milestone.type === filter),
    [filter],
  )

  return (
    <div className="min-h-[65vh] bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Project schedule</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Milestones</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Assessment milestones are listed below. Dates and allocated marks have not been provided yet and will be added when confirmed.
          </p>
        </header>

        <label className="mb-5 flex max-w-sm flex-col gap-2 text-sm font-medium text-slate-200">
          Choose an assessment
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
          >
            {filters.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
          <div className="grid grid-cols-[1fr_1fr] gap-4 border-b border-white/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 sm:grid-cols-[1.5fr_1fr_1fr]">
            <span>Assessment</span>
            <span className="hidden sm:block">Date</span>
            <span>Marks</span>
          </div>
          <ul className="divide-y divide-white/10">
            {visibleMilestones.map((milestone) => (
              <li key={milestone.name} className="grid grid-cols-[1fr_1fr] items-center gap-4 px-5 py-5 text-sm sm:grid-cols-[1.5fr_1fr_1fr]">
                <span className="flex items-center gap-3 font-medium text-white">
                  <ClipboardList size={18} className="shrink-0 text-cyan-300" />
                  {milestone.name}
                </span>
                <span className="hidden items-center gap-2 text-slate-300 sm:flex"><CalendarDays size={16} /> To be announced</span>
                <span className="text-slate-300 sm:hidden">Date: To be announced</span>
                <span className="text-slate-300">To be announced</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-slate-400">Marks allocation will be published with the confirmed assessment schedule.</p>
      </div>
    </div>
  )
}
