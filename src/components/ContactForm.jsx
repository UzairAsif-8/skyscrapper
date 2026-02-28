import { useState } from 'react'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { sendQuoteRequest } from '../utils/emailService.js'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  serviceNeeded: '',
  description: '',
  urgency: 'Soon',
  preferredDate: '',
}

const serviceOptions = [
  'Drain Cleaning',
  'Leak Repair',
  'Water Heater Installation',
  'Pipe Repair',
  'Toilet Installation',
  'Sewer Line Repair',
  'Commercial Plumbing',
  'Residential Plumbing',
  'Water Filtration Systems',
  'Fixture Installation',
  'Maintenance Services',
]

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      await sendQuoteRequest({
        full_name: form.fullName,
        phone: form.phone,
        email: form.email,
        address: form.address,
        service_needed: form.serviceNeeded,
        description: form.description,
        urgency: form.urgency,
        preferred_date: form.preferredDate,
        source: compact ? 'Homepage Compact Form' : 'Contact Page',
      })

      setStatus({
        type: 'success',
        message: 'Thank you — your request has been submitted. Our team will contact you shortly.',
      })
      setForm(initialForm)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error?.message || 'We were unable to send your request. Please try again or call us directly.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/40 bg-white/50 backdrop-blur-2xl p-5 shadow-brand-xl sm:p-7 lg:p-9"
    >
      <div className="pointer-events-none absolute -left-16 -top-10 h-44 w-44 rounded-full bg-red-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-16 h-44 w-44 rounded-full bg-red-400/20 blur-3xl" />

      <div className="relative space-y-2">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {compact ? 'Request a visit' : 'Request a plumbing quote'}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Share a few details about your plumbing issue. We'll respond with clear next steps — often within minutes during business hours.
        </p>
      </div>

      <div className="relative mt-7 grid gap-5 sm:grid-cols-2">
        <div className="input-floating-label sm:col-span-2">
          <input id="fullName" name="fullName" type="text" required placeholder="Full name" value={form.fullName} onChange={handleChange} />
          <label htmlFor="fullName">Full name</label>
        </div>

        <div className="input-floating-label">
          <input id="phone" name="phone" type="tel" required placeholder="Phone number" value={form.phone} onChange={handleChange} />
          <label htmlFor="phone">Phone number</label>
        </div>

        <div className="input-floating-label">
          <input id="email" name="email" type="email" required placeholder="Email address" value={form.email} onChange={handleChange} />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="input-floating-label sm:col-span-2">
          <input id="address" name="address" type="text" placeholder="Service address" value={form.address} onChange={handleChange} />
          <label htmlFor="address">Service address</label>
        </div>

        <div className="input-floating-label sm:col-span-2">
          <select id="serviceNeeded" name="serviceNeeded" required value={form.serviceNeeded} onChange={handleChange}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <label htmlFor="serviceNeeded">Service needed</label>
        </div>

        <div className="input-floating-label sm:col-span-2">
          <textarea id="description" name="description" rows={compact ? 3 : 4} required placeholder="Describe the issue" value={form.description} onChange={handleChange} />
          <label htmlFor="description">Describe the issue</label>
          <p className="helper-text">Where is the issue, how long has it been happening, and any extra details.</p>
        </div>

        <div className="input-floating-label">
          <select id="urgency" name="urgency" value={form.urgency} onChange={handleChange}>
            <option value="Within 24 hours">Within 24 hours</option>
            <option value="Soon">Soon</option>
            <option value="Flexible">Flexible</option>
          </select>
          <label htmlFor="urgency">Urgency level</label>
        </div>

        <div className="input-floating-label">
          <input id="preferredDate" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} />
          <label htmlFor="preferredDate">Preferred date</label>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="btn-glow ripple-button inline-flex items-center gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-70"
        >
          <FiSend className="text-xl" />
          <span>{submitting ? 'Sending request…' : 'Submit request'}</span>
        </button>
        <p className="text-[11px] text-slate-400">
          By submitting, you consent to being contacted about your service request.
        </p>
      </div>

      {status.type && (
        <div
          className={`mt-5 flex items-start gap-2 rounded-2xl px-4 py-3 text-xs ${
            status.type === 'success'
              ? 'bg-emerald-50/80 text-emerald-700 ring-1 ring-emerald-200/80'
              : 'bg-rose-50/80 text-rose-700 ring-1 ring-rose-200/80'
          }`}
        >
          {status.type === 'success' ? (
            <FiCheckCircle className="mt-0.5 text-sm" />
          ) : (
            <FiAlertCircle className="mt-0.5 text-sm" />
          )}
          <p>{status.message}</p>
        </div>
      )}
    </form>
  )
}