import { memo } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock } from 'react-icons/fi'

const BlogCard = memo(function BlogCard({ blog, index = 0, variant = 'default' }) {
  const isFeatured = variant === 'featured'

  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="blog-card group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/95 shadow-sm ring-1 ring-slate-200/80 backdrop-blur-sm transition-all duration-400 ease-out hover:shadow-xl hover:ring-red-200/70 hover:-translate-y-1"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Image — fixed aspect for consistent height */}
      <div className="blog-card-image relative h-44 shrink-0 overflow-hidden bg-slate-100 sm:h-48">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-brand-primary transition-transform duration-400 group-hover:scale-x-100" />
        <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 backdrop-blur-sm">
          {blog.category}
        </span>
        {isFeatured && (
          <span className="absolute right-4 top-4 rounded-md bg-amber-400/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content — flex-1 so all cards same total height in grid */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <FiClock className="h-3 w-3" />
            {blog.readTime}
          </span>
          <span className="text-slate-300">·</span>
          <span>{blog.date}</span>
        </div>
        <h3 className="font-semibold text-slate-900 leading-snug transition-colors duration-300 group-hover:text-brand-primary text-base sm:text-lg line-clamp-2">
          {blog.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">
          {blog.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src={blog.authorAvatar}
              alt={blog.author}
              className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200/80"
              loading="lazy"
              decoding="async"
            />
            <span className="text-xs font-medium text-slate-600">{blog.author}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary transition-all duration-300 group-hover:gap-2">
            Read more
            <FiArrowRight className="h-3.5 w-3.5 shrink-0" />
          </span>
        </div>
      </div>
    </Link>
  )
})

export default BlogCard
