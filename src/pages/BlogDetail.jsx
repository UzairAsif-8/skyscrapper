import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  FiArrowLeft,
  FiClock,
  FiCalendar,
  FiShare2,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiArrowRight,
} from 'react-icons/fi'
import { blogs, getBlogById } from '../data/blogs'

export default function BlogDetail() {
  const { blogId } = useParams()
  const blog = getBlogById(blogId)

  const related = useMemo(() => {
    if (!blog) return []
    return blogs
      .filter((b) => b.id !== blog.id)
      .slice(0, 3)
  }, [blog])

  const paragraphs = useMemo(() => {
    if (!blog) return []
    return blog.content.split('\n\n').filter((p) => p.trim().length > 0)
  }, [blog])

  if (!blog) return <Navigate to="/blogs" replace />

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-[60%] h-[400px] w-[400px] rounded-full bg-red-100/30 blur-3xl" />
        <div className="absolute -left-32 top-[30%] h-[350px] w-[350px] rounded-full bg-rose-100/20 blur-3xl" />
      </div>

      <section className="relative">
        <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden sm:h-[50vh] sm:min-h-[380px] lg:h-[60vh]">
          <img
            src={blog.image}
            alt={blog.title}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-10 sm:px-6 lg:px-12">
            <div className="section-max-width">
              <Link
                to="/blogs"
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/25 no-underline"
              >
                <FiArrowLeft className="h-3.5 w-3.5" />
                Back to Blog
              </Link>

              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-gradient-to-r from-brand-primary to-red-500 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/30">
                  {blog.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/70">
                  <FiClock className="h-3.5 w-3.5" />
                  {blog.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/70">
                  <FiCalendar className="h-3.5 w-3.5" />
                  {blog.date}
                </span>
              </div>

              <h1 className="max-w-3xl text-xl font-extrabold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                {blog.title.split(' ').map((word, i, arr) =>
                  i >= arr.length - 3 ? (
                    <span key={i} className="hero-gradient-text">
                      {word}{' '}
                    </span>
                  ) : (
                    word + ' '
                  ),
                )}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-padding pt-0">
        <div className="section-max-width">
          <div className="relative -mt-6 sm:-mt-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
              <article className="min-w-0 flex-1">
                <div className="mb-8 flex flex-wrap items-center gap-4 rounded-2xl border border-white/40 bg-white/60 p-4 shadow-brand-soft backdrop-blur-xl sm:p-5">
                  <img
                    src={blog.authorAvatar}
                    alt={blog.author}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {blog.author}
                    </p>
                    <p className="text-xs text-slate-400">
                      Published on {blog.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="mr-1 hidden text-xs text-slate-400 sm:block">
                      Share
                    </span>
                    {[FiTwitter, FiFacebook, FiLinkedin].map((Icon, i) => (
                      <button
                        key={i}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/60 bg-white/80 text-slate-500 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="blog-content rounded-3xl border border-white/40 bg-white/50 p-6 shadow-brand-soft backdrop-blur-xl sm:p-8 lg:p-10">
                  {paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="mb-5 text-[15px] leading-[1.85] text-slate-600 last:mb-0"
                    >
                      {para.split(/(\*\*.*?\*\*)/).map((segment, j) =>
                        segment.startsWith('**') && segment.endsWith('**') ? (
                          <strong key={j} className="font-semibold text-slate-800">
                            {segment.slice(2, -2)}
                          </strong>
                        ) : (
                          segment
                        ),
                      )}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {['Plumbing', blog.category, 'Tips', 'Home'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200/60 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-500 backdrop-blur-sm transition-all duration-300 hover:border-red-300 hover:text-brand-primary"
                      >
                        #{tag}
                      </span>
                    ),
                  )}
                </div>
              </article>

              <aside className="w-full shrink-0 lg:w-80">
                <div className="sticky top-28 space-y-6">
                  <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-brand-soft backdrop-blur-xl">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {related.map((r) => (
                        <Link
                          key={r.id}
                          to={`/blogs/${r.id}`}
                          className="group flex gap-3 rounded-2xl p-2 transition-all duration-300 hover:bg-red-50/50 no-underline"
                        >
                          <img
                            src={r.image}
                            alt={r.title}
                            className="h-16 w-16 shrink-0 rounded-xl object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="min-w-0 flex-1">
                            <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-brand-primary">
                              {r.title}
                            </h4>
                            <span className="mt-1 text-[11px] text-slate-400">
                              {r.readTime}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-brand-primary via-red-600 to-red-500 p-6 text-white shadow-xl shadow-red-600/15">
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-xl" />
                    <h3 className="relative text-lg font-bold">
                      Need Expert Help?
                    </h3>
                    <p className="relative mt-2 text-sm text-red-100/80">
                      Our licensed plumbers are ready to help with any project.
                    </p>
                    <Link
                      to="/contact"
                      className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-brand-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl no-underline"
                    >
                      Get a Free Quote
                      <FiArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-brand-soft backdrop-blur-xl">
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-400">
                      Share This Article
                    </h3>
                    <div className="flex gap-2">
                      {[
                        { icon: FiTwitter, label: 'Twitter', bg: 'hover:bg-red-500' },
                        { icon: FiFacebook, label: 'Facebook', bg: 'hover:bg-red-600' },
                        { icon: FiLinkedin, label: 'LinkedIn', bg: 'hover:bg-red-700' },
                        { icon: FiShare2, label: 'Copy', bg: 'hover:bg-slate-700' },
                      ].map(({ icon: Icon, label, bg }) => (
                        <button
                          key={label}
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/60 bg-white/80 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-lg ${bg}`}
                          aria-label={`Share on ${label}`}
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-padding pt-4 pb-12">
        <div className="section-max-width">
          <div className="section-divider mb-12" />
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            More Articles You&apos;ll Love
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Link
                key={r.id}
                to={`/blogs/${r.id}`}
                className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-brand-soft backdrop-blur-xl transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-brand-xl no-underline"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-brand-primary backdrop-blur-md">
                    {r.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-base font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-primary">
                    {r.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <img
                      src={r.authorAvatar}
                      alt={r.author}
                      className="h-5 w-5 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{r.author}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{r.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
