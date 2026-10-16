import { Download, FileText } from 'lucide-react'
import { documentSections } from '../data/resources'

export default function Documents() {
  return (
    <div className="min-h-[65vh] bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Project resources</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Documents</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Browse and download the project research paper, individual proposals, and thesis drafts.
          </p>
        </header>

        <div className="space-y-10">
          {documentSections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-bold text-white">{section.title}</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {section.files.map((document) => (
                  <li key={document.name} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <span className="rounded-xl bg-cyan-500/10 p-3 text-cyan-200"><FileText size={21} /></span>
                    <div className="min-w-0">
                      <h3 className="break-words font-semibold text-white">{document.name}</h3>
                      <p className="mt-1 text-sm text-slate-300">{document.detail}</p>
                      <a
                        href={document.href}
                        download
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                      >
                        <Download size={16} aria-hidden="true" />
                        Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
