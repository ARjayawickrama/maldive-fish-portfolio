import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, MoonStar, SunMedium, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Research', to: '/research' },
  { label: 'Architecture', to: '/architecture' },
  { label: 'AI Inspection', to: '/ai-inspection' },
  { label: 'IoT Monitoring', to: '/iot-monitoring' },
  { label: 'Results', to: '/results' },
  { label: 'Team', to: '/team' },
  { label: 'References', to: '/references' },
]

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const isLight = theme === 'light'

  return (
    <header className={isLight ? 'sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl' : 'sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl'}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="SmartMaldive AI home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">
            S
          </div>
          <div>
            <p className={isLight ? 'text-lg font-semibold tracking-tight text-slate-900' : 'text-lg font-semibold tracking-tight text-white'}>SmartMaldive AI</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-cyan-500' : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))}
            className={isLight ? 'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900' : 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:text-white'}
            aria-label="Toggle color theme"
          >
            {isLight ? <MoonStar size={16} /> : <SunMedium size={16} />}
            {isLight ? 'Dark mode' : 'Light mode'}
          </button>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-500/20"
          >
            Live Dashboard
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))}
            className={isLight ? 'inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-100 p-2 text-slate-700' : 'inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200'}
            aria-label="Toggle color theme"
          >
            {isLight ? <MoonStar size={18} /> : <SunMedium size={18} />}
          </button>

          <button
            type="button"
            className={isLight ? 'inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-100 p-2 text-slate-700' : 'inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200'}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={isLight ? 'border-t border-slate-200 bg-white/95 lg:hidden' : 'border-t border-white/10 bg-slate-950/95 lg:hidden'}>
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-cyan-500/10 text-cyan-600' : isLight ? 'text-slate-700 hover:bg-slate-100 hover:text-slate-900' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700"
            >
              Live Dashboard
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
