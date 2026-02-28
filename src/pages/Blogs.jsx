import { useState, useEffect, useRef, useMemo } from 'react'
import { blogs } from '../data/blogs'
import BlogCard from '../components/BlogCard'
import useReveal from '../utils/useReveal'

const categories = ['All', ...new Set(blogs.map((b) => b.category))]

export default function Blogs() {
  const sectionRef = useReveal(0.05)
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(0)
  const gridRef = useRef(null)

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? blogs
        : blogs.filter((b) => b.category === activeCategory),
    [activeCategory],
  )

  useEffect(() => {
    setVisibleCount(0)
    const timer = setTimeout(() => setVisibleCount(filtered.length + 2), 80)
    return () => clearTimeout(timer)
  }, [filtered.length])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50/80 to-white">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-red-100/50 blur-3xl animate-float-orb-1" />
        <div className="absolute -right-32 top-[35%] h-[420px] w-[420px] rounded-full bg-rose-100/40 blur-3xl animate-float-orb-2" />
        <div className="absolute bottom-24 left-1/4 h-[380px] w-[380px] rounded-full bg-red-100/35 blur-3xl animate-float-orb-3" />
      </div>

      {/* Hero */}
      <section className="relative section-padding pt-24 sm:pt-28 lg:pt-36 pb-16">
        <div className="section-max-width">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-soft mb-6 inline-flex text-xs sm:text-sm">
              Our Blog
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Insights &{' '}
              <span className="hero-gradient-text">Expert Advice</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Practical plumbing knowledge from professionals who care about
              your home as much as you do.
            </p>
          </div>

          {/* Category pills — refined */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-primary to-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
                    : 'border border-slate-200 bg-white/90 text-slate-600 shadow-sm backdrop-blur-sm hover:border-red-300 hover:text-brand-primary hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section
        ref={sectionRef}
        className="reveal relative section-padding pt-4 sm:pt-6 pb-20"
      >
        <div className="section-max-width" ref={gridRef}>
          {/* Uniform grid — all cards same size */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((blog, i) => (
              <div
                key={blog.id}
                className="blog-stagger-item flex"
                style={{
                  opacity: i < visibleCount ? 1 : 0,
                  transform: i < visibleCount ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                }}
              >
                <BlogCard
                  blog={blog}
                  index={i}
                  variant={blog.featured ? 'featured' : 'default'}
                />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-lg text-slate-500">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative section-padding pt-4 pb-20">
        <div className="section-max-width">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/50 bg-gradient-to-br from-brand-primary via-red-600 to-red-500 p-8 text-center shadow-2xl shadow-red-600/25 sm:p-12 lg:p-16">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl" />
            <h2 className="relative text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Stay Updated with Expert Tips
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-sm text-red-100/90 sm:text-base">
              Get our latest plumbing insights and maintenance guides delivered
              to your inbox.
            </p>
            <div className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-white/25 bg-white/15 px-5 py-3.5 text-sm text-white placeholder:text-red-200/70 backdrop-blur-sm outline-none transition-all duration-300 focus:border-white/50 focus:bg-white/25 focus:ring-2 focus:ring-white/30"
              />
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-primary shadow-lg shadow-red-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
