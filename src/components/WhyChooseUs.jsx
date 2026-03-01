import { memo } from 'react'
import { FiShield, FiClock, FiZap, FiUsers, FiDollarSign, FiAward } from 'react-icons/fi'
import useReveal from '../utils/useReveal.js'

const items = [
  {
    icon: FiShield,
    title: 'Licensed, bonded & insured',
    description: 'Every technician is fully vetted, certified, and covered so you can feel confident opening your door.',
    gradient: 'from-red-500 to-red-400',
  },
  {
    icon: FiClock,
    title: 'Fast, punctual arrival',
    description: 'Real-time updates, tight appointment windows, and a team that respects your schedule and your space.',
    gradient: 'from-red-400 to-rose-500',
  },
  {
    icon: FiZap,
    title: 'Precision diagnostics',
    description: 'We use modern tools and camera inspections to fix the root cause instead of treating surface symptoms.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: FiUsers,
    title: 'Dedicated project lead',
    description: 'For complex jobs, you get a single point of contact who owns the outcome from start to finish.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FiDollarSign,
    title: 'Transparent, upfront pricing',
    description: 'No surprise invoices. You approve clear options with line-item detail before any work begins.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: FiAward,
    title: 'Workmanship guarantee',
    description: 'Our work is backed by a written guarantee, detailed documentation, and long-term support.',
    gradient: 'from-rose-500 to-pink-500',
  },
]

function WhyChooseUs() {
  const ref = useReveal()

  return (
    <section className="section-padding">
      <div ref={ref} className="reveal section-max-width space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="badge-soft">Why homeowners trust Skyscraper</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Built like a premium service brand, operated like a trusted neighbor.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            We blend agency-level polish with field-tested experience. Every interaction is
            designed to feel considered and calm.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-100/80 bg-white/70 backdrop-blur-lg p-6 shadow-brand-soft transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:border-red-200/60 hover:shadow-brand-xl"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20" style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />

              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-transform duration-300 ease-out group-hover:scale-110`}>
                  <item.icon className="text-lg" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(WhyChooseUs)
