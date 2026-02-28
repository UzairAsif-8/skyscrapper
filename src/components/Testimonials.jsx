import { useState, useRef, useEffect, memo } from 'react'
import { FiStar } from 'react-icons/fi'
import useReveal from '../utils/useReveal.js'

const testimonials = [
  {
    name: 'Michael Rivera',
    role: 'Homeowner, East Ridge',
    rating: 5,
    text: '"Sky Scrapper treated our home like it was their own. The technician walked us through every option and left the space cleaner than he found it."',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    name: 'Danielle Hart',
    role: 'Property Manager',
    rating: 5,
    text: '"They balance premium service with practical recommendations. My residents rave about how respectful and tidy the crews are."',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    name: 'James Lee',
    role: 'Restaurant Owner',
    rating: 5,
    text: '"We can\'t afford downtime. Sky Scrapper\'s commercial team is proactive, fast, and crystal clear in communication—exactly what we need."',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Interior Designer',
    rating: 5,
    text: '"I recommend Sky Scrapper to every client. They understand aesthetics matters—even when it comes to plumbing. Impeccable attention to detail."',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=80',
  },
  {
    name: 'Robert Chen',
    role: 'Commercial Property Owner',
    rating: 5,
    text: '"Managing 12 units means constant maintenance. Sky Scrapper keeps everything running smoothly with transparent billing and zero surprises."',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&q=80',
  },
]

const duplicated = [...testimonials, ...testimonials]

function ReviewCard({ t }) {
  return (
    <div className="review-card group relative shrink-0 w-[320px] sm:w-[380px] overflow-hidden rounded-3xl border border-slate-100/80 bg-gradient-to-br from-white/80 via-red-50/30 to-slate-50/50 backdrop-blur-xl p-6 sm:p-7 shadow-brand-soft transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-brand-xl">
      <div className="pointer-events-none absolute -left-8 -top-4 h-32 w-32 rounded-full bg-red-400/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-4 -right-8 h-32 w-32 rounded-full bg-red-400/8 blur-2xl" />

      <div className="relative space-y-4">
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: t.rating }).map((_, i) => (
            <FiStar key={i} className="text-sm fill-amber-400" />
          ))}
        </div>

        <p className="text-sm sm:text-[15px] font-medium leading-relaxed text-slate-700">
          {t.text}
        </p>

        <div className="flex items-center gap-3 pt-1">
          <img
            src={t.avatar}
            alt={t.name}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-white"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">{t.name}</p>
            <p className="text-[11px] text-slate-500">{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const sectionRef = useReveal()
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const style = track.style
    if (paused) {
      style.animationPlayState = 'paused'
    } else {
      style.animationPlayState = 'running'
    }
  }, [paused])

  return (
    <section className="section-padding overflow-hidden">
      <div ref={sectionRef} className="reveal space-y-10">
        <div className="section-max-width">
          <div className="max-w-2xl space-y-2">
            <span className="badge-soft">Client stories</span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              A calm, white-glove experience, even on stressful days.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Don't take our word for it — hear from the homeowners and businesses we serve every day.
            </p>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="reviews-marquee flex gap-5 w-max"
          >
            {duplicated.map((t, i) => (
              <ReviewCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Testimonials)
