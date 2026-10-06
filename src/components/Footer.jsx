import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Research', to: '/research' },
  { label: 'Architecture', to: '/architecture' },
  { label: 'AI Inspection', to: '/ai-inspection' },
  { label: 'IoT Monitoring', to: '/iot-monitoring' },
  { label: 'Results', to: '/results' },
  { label: 'Team', to: '/team' },
  { label: 'References', to: '/references' },
  { label: 'Dashboard', to: '/dashboard' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-slate-950">
              S
            </div>
            <div>
              <p className="text-xl font-semibold text-white">SmartMaldive AI</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">AI + IoT for smarter traditional food processing.</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Explore</p>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition hover:text-cyan-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Sri Lanka Institute of Information Technology</p>
          <p>© 2026 SmartMaldive AI Research Project</p>
        </div>
      </div>
    </footer>
  )
}
