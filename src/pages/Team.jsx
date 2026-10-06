import { Mail, MapPin } from 'lucide-react'
import { institutionInfo, teamMembers } from '../data/team'

export default function Team() {
  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Research team</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Research Team</h1>
        </div>

        <div className="mb-10 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
          <p className="text-xl font-semibold text-white">{institutionInfo.name}</p>
          <p className="mt-2 text-slate-300">{institutionInfo.department}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80">
              <img src={member.image} alt={member.name} className="h-64 w-full object-cover" />
              <div className="p-5">
                <p className="text-xl font-semibold text-white">{member.name}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cyan-300">{member.role}</p>
                <p className="mt-4 text-slate-300">{member.interests}</p>
                <div className="mt-5 space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><Mail size={15} /> Email: Not provided</div>
                  <div className="flex items-center gap-2"><MapPin size={15} /> LinkedIn: Not provided</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
