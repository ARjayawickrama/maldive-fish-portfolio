import { Presentation } from 'lucide-react'

const presentations = [
  'Proposal Presentation',
  'Progress Presentation - 1',
  'Progress Presentation - 2',
  'Final Presentation',
]

export default function Presentations() {
  return (
    <div className="min-h-[65vh] bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Project resources</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Presentations</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Slides from past and future project presentations will be made available here.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2">
          {presentations.map((presentation) => (
            <li key={presentation} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <span className="rounded-xl bg-cyan-500/10 p-3 text-cyan-200"><Presentation size={21} /></span>
              <div>
                <h2 className="font-semibold text-white">{presentation}</h2>
                <p className="mt-2 text-sm text-slate-400">Slides will be added when available.</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
