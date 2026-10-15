import { FileText } from 'lucide-react'

const documents = [
  { name: 'Project Charter', detail: 'Project scope and initial plan' },
  { name: 'Proposal Document', detail: 'Project proposal' },
  { name: 'Checklist Documents', detail: 'Project review and assessment checklists' },
  { name: 'Final Report', detail: 'Main report and supporting documents' },
]

export default function Documents() {
  return (
    <div className="min-h-[65vh] bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Project resources</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Documents</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Project documents will be shared here as viewable links when the files are ready.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2">
          {documents.map((document) => (
            <li key={document.name} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <span className="rounded-xl bg-cyan-500/10 p-3 text-cyan-200"><FileText size={21} /></span>
              <div>
                <h2 className="font-semibold text-white">{document.name}</h2>
                <p className="mt-1 text-sm text-slate-300">{document.detail}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Link not available yet</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
