import { motion } from 'framer-motion'
import { ArrowRight, Beaker, Database, Radar, Sparkles, Target } from 'lucide-react'
import ProcessTimeline from '../components/ProcessTimeline'
import { pipelineStages } from '../data/researchData'
import { Link } from 'react-router-dom'

export default function Research() {
  const researchPillars = [
    { title: 'AI Quality Inspection', icon: Radar, text: 'Vision-driven freshness assessment for raw fish using object detection and sensor fusion.' },
    { title: 'Thermal Process Control', icon: Beaker, text: 'Boiling and salting are optimized through empirical formulas and real-time thermal response.' },
    { title: 'Drying Telemetry', icon: Database, text: 'ESP32 nodes monitor RH, airflow and VOC signals to stabilize the drying environment.' },
    { title: 'Predictive Analytics', icon: Sparkles, text: 'Shelf-life modeling and grade prediction transform processing into a measurable production loop.' },
  ]
  const domainSections = [
    { title: 'Literature survey', text: 'Prior work in fish freshness assessment, computer vision, food-process monitoring and shelf-life modelling informs the proposed system.', to: '/references', link: 'View references' },
    { title: 'Research problem', text: 'Traditional Maldive fish processing relies on subjective inspection and limited monitoring, contributing to variation in process control and final product quality.' },
    { title: 'Research objectives', text: 'Develop an integrated workflow for AI-assisted fish assessment, monitored processing, drying analytics and traceable quality evaluation.' },
    { title: 'Research gap', text: 'Many existing approaches address a single stage. This project brings inspection, process monitoring and final quality assessment together in one workflow.' },
  ]
  const technologies = ['YOLO11s', 'ResNet-18', 'MQ-135 gas sensor', 'DHT22 temperature / humidity', 'ESP32', 'MQTT', 'Shelf-life modelling']

  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Project domain</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Smart Maldive Fish Processing</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            An integrated AI and IoT approach to improve quality assessment, process monitoring and traceability across traditional Maldive fish production.
          </p>
        </div>

        <nav aria-label="Domain sections" className="mb-10 flex flex-wrap justify-center gap-3">
          {[
            ['Overview', '#overview'],
            ['Literature survey', '#literature-survey'],
            ['Research gap', '#research-gap'],
            ['Objectives', '#objectives'],
            ['Methodology', '#methodology'],
            ['Technologies', '#technologies'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200">
              {label}
            </a>
          ))}
        </nav>

        <section id="overview" className="mb-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {domainSections.map(({ title, text, to, link }) => (
            <article id={title === 'Research gap' ? 'research-gap' : undefined} key={title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="mb-3 text-lg font-semibold text-white">{title}</h2>
              <p className="text-sm leading-6 text-slate-300">{text}</p>
              {to && <Link to={to} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">{link}<ArrowRight size={15} /></Link>}
            </article>
          ))}
        </section>

        <section id="objectives" className="mb-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-200"><Target size={22} /></div>
            <div>
              <h2 className="text-2xl font-bold text-white">Project objectives</h2>
              <ul className="mt-4 grid gap-3 text-slate-300 sm:grid-cols-2">
                <li>Assess raw fish freshness using computer vision and gas-sensor readings.</li>
                <li>Monitor and optimize boiling, salting and drying conditions.</li>
                <li>Evaluate final product quality using image-based classification.</li>
                <li>Keep a traceable record of batch and process information.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {researchPillars.map(({ title, icon: Icon, text }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300">
                <Icon size={22} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>

        <section id="methodology" className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Research pipeline</p>
              <h2 className="text-3xl font-bold text-white">Processing Stages</h2>
            </div>
            <div className="hidden rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-200 md:block">
              8-stage end-to-end workflow
            </div>
          </div>
          <ProcessTimeline stages={pipelineStages} />
        </section>

        <section id="technologies" className="mt-12 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Technology stack</p>
          <h2 className="mb-6 text-3xl font-bold text-white">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{technology}</span>
            ))}
          </div>
        </section>

        <section id="literature-survey" className="mt-12 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Research gap</p>
          <h2 className="mb-6 text-3xl font-bold text-white">Related Research and System Scope</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-slate-400">Existing systems</th>
                  <th className="px-4 py-3 text-slate-400">Proposed system</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Raw fish only', 'All processing stages'],
                  ['Laboratory focused', 'Vision + gas sensing + IoT'],
                  ['Single-stage', 'Real-time monitoring'],
                  ['No end-to-end traceability', 'Edge AI'],
                  ['Limited real-time deployment', 'End-to-end traceability'],
                ].map(([existing, proposed]) => (
                  <tr key={existing} className="border-t border-white/10">
                    <td className="px-4 py-3 text-slate-300">{existing}</td>
                    <td className="px-4 py-3 text-cyan-200">{proposed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/references" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">Browse the reference list<ArrowRight size={15} /></Link>
        </section>
      </div>
    </div>
  )
}
