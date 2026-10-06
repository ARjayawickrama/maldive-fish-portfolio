import { useMemo, useState } from 'react'
import { referenceGroups } from '../data/references'

export default function References() {
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('All')

  const filteredGroups = useMemo(() => {
    return referenceGroups.filter((section) => {
      const matchesGroup = group === 'All' || section.group === group
      const text = `${section.group} ${section.items.map((item) => `${item.title} ${item.authors} ${item.year}`).join(' ')}`.toLowerCase()
      const matchesQuery = text.includes(query.toLowerCase())
      return matchesGroup && matchesQuery
    })
  }, [group, query])

  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">References</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Academic References</h1>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 md:flex-row md:items-center md:justify-between">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search references"
            className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none md:max-w-md"
          />
          <select
            value={group}
            onChange={(event) => setGroup(event.target.value)}
            className="rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none"
          >
            <option value="All">All categories</option>
            {referenceGroups.map((section) => (
              <option key={section.group} value={section.group}>{section.group}</option>
            ))}
          </select>
        </div>

        <div className="space-y-8">
          {filteredGroups.map((section) => (
            <div key={section.group} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <h2 className="mb-5 text-2xl font-semibold text-white">{section.group}</h2>
              <ol className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.no} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                    <span className="mr-2 font-semibold text-cyan-300">[{item.no}]</span>
                    <span className="font-medium text-white">{item.title}</span>
                    <p className="mt-1 text-sm text-slate-400">{item.authors} ({item.year})</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
