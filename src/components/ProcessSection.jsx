import { memo } from 'react'
import { FiFileText, FiSearch, FiTool, FiCheckCircle } from 'react-icons/fi'
import useReveal from '../utils/useReveal.js'

const steps = [
  {
    icon: FiFileText,
    step: 'Step 1',
    title: 'Request service',
    description: "Share what you're experiencing—photos and video welcome. We'll provide clear next steps and a time window.",
  },
  {
    icon: FiSearch,
    step: 'Step 2',
    title: 'On-site inspection',
    description: 'A licensed technician performs a detailed assessment, explains findings in plain language, and presents options.',
  },
  {
    icon: FiTool,
    step: 'Step 3',
    title: 'Precision repair',
    description: 'We complete the work with premium materials, protect your home, and keep you updated at each stage.',
  },
  {
    icon: FiCheckCircle,
    step: 'Step 4',
    title: 'Clean handoff',
    description: 'We walk you through the finished work, answer questions, and provide documentation for your records.',
  },
]

function ProcessSection() {
  const ref = useReveal()

  return (
    <section className="section-padding">
      <div ref={ref} className="reveal section-max-width space-y-10">
        <div className="max-w-2xl space-y-3">
          <span className="badge-soft">A calm, predictable process</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            From first call to final walkthrough, we keep things simple and clear.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-red-300/50 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="group relative flex flex-col gap-3 rounded-3xl border border-slate-100/80 bg-white/70 backdrop-blur-lg p-6 shadow-brand-soft transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-brand-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-400 text-white shadow-lg shadow-red-500/30 transition-transform duration-300 group-hover:scale-110">
                    <step.icon className="text-lg" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-700 shadow-md ring-1 ring-slate-100">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(ProcessSection)
