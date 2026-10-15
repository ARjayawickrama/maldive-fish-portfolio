import { Mail, MapPin, MessageSquareText } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(formData.get('subject'))
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`,
    )
    window.location.href = `mailto:research@smartmaldive.ai?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Project Collaboration</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-200"><Mail size={18} /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</p>
                <p className="text-white">research@smartmaldive.ai</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-200"><MessageSquareText size={18} /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Institution</p>
                <p className="text-white">Sri Lanka Institute of Information Technology</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-200"><MapPin size={18} /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Department</p>
                <p className="text-white">Department of Information Technology / Faculty of Computing</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Name</span>
                <input name="name" required className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <input name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">Subject</span>
              <input name="subject" required className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white" placeholder="Project collaboration" />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">Message</span>
              <textarea name="message" required rows="5" className="w-full rounded-xl border border-white/10 bg-slate-800 px-3 py-3 text-white" placeholder="Tell us about your research interest..." />
            </label>
            <p className="mt-4 text-xs text-slate-400">Your default email application will open with your message ready to send.</p>
            <button type="submit" className="mt-5 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
