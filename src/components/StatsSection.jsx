import { useEffect, useState, useRef, memo } from 'react'

const statsConfig = [
  { label: 'Years of experience', value: 15, suffix: '+', gradient: 'from-red-500 to-red-400' },
  { label: 'Projects completed', value: 4800, suffix: '+', gradient: 'from-emerald-400 to-lime-300' },
  { label: 'Happy customers', value: 2100, suffix: '+', gradient: 'from-red-400 to-rose-300' },
  { label: 'Cities served', value: 6, suffix: '', gradient: 'from-rose-400 to-red-400' },
]

function useCountUp(target, duration = 1600, shouldStart = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let frame
    const start = performance.now()

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(target * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, shouldStart])

  return value
}

function StatsSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const values = statsConfig.map((s) => useCountUp(s.value, 1600, visible))

  return (
    <section ref={sectionRef} className="section-padding pt-4">
      <div className="section-max-width overflow-hidden rounded-3xl border border-slate-100/80 bg-white/70 backdrop-blur-xl p-7 shadow-brand-soft sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md space-y-3">
            <span className="badge-soft">Proof in the numbers</span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              A plumbing partner trusted across the metro.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Quietly solving complex plumbing problems for homeowners, property managers, and
              commercial partners every single day.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-4">
            {statsConfig.map((stat, index) => (
              <div
                key={stat.label}
                className="group flex flex-col items-start rounded-2xl border border-slate-100/60 bg-gradient-to-br from-slate-50/80 to-white/50 px-5 py-4 text-left shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mb-3 inline-flex items-center rounded-full bg-gradient-to-r ${stat.gradient} px-3 py-1.5 text-sm font-bold text-slate-900 shadow-md`}
                >
                  <span>
                    {values[index].toLocaleString()}
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(StatsSection)
