import { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mykdvoav'

const COMPANY_PHONE = '+923131471263'
const WHATSAPP_LINK = 'https://wa.me/923131471263' // wa.me requires number without +

const serviceOptions = [
  { value: '', label: 'Select a Service' },
  { value: 'TAM Development', label: 'TAM Development' },
  { value: 'SaaS MVP', label: 'SaaS MVP' },
  { value: 'Business Dashboard', label: 'Business Dashboard' },
  { value: 'Company Website', label: 'Company Website' },
  { value: 'Automation & Integration', label: 'Automation & Integration' },
]

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: 'Email',
    value: 'saimpkf@gmail.com',
    href: 'mailto:saimpkf@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h2l3 7-1.5 1.5a2.5 2.5 0 003.5 3.5L13 15l7 3v-2a2 2 0 00-1-1.73l-4.5-2.57"
        />
      </svg>
    ),
    label: 'Company Phone',
    value: COMPANY_PHONE,
    href: `tel:${COMPANY_PHONE}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01" />
      </svg>
    ),
    label: 'WhatsApp',
    value: COMPANY_PHONE,
    href: WHATSAPP_LINK,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Pakistan',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Monday – Saturday',
  },
]

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Minor Group of Technologies'
  }, [])

  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setStatus('submitting')

    // Basic front-end validation
    if (!formData.service) {
      setStatus('error')
      setErrorMsg('Please select a service.')
      return
    }
    if (!formData.message.trim()) {
      setStatus('error')
      setErrorMsg('Please write a short message about your project.')
      return
    }

    const subject = `New Project Inquiry — ${formData.service} — ${formData.fullName}`

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: subject,
          _replyto: formData.email, // reply directly from inbox
          'Full Name': formData.fullName,
          'WhatsApp Number': formData.whatsapp,
          'Phone Number': formData.phone,
          'Email Address': formData.email,
          'Selected Service': formData.service,
          Message: formData.message.trim(),
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ fullName: '', whatsapp: '', phone: '', email: '', service: '', message: '' })
        return
      }

      // Try reading error details from Formspree
      let data = null
      try {
        data = await res.json()
      } catch {
        data = null
      }

      setStatus('error')
      setErrorMsg(data?.error || 'Something went wrong. Please try again.')
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again or contact us directly.')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200'

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 border border-gray-700 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Let&apos;s Build Your Next System</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill the form below and our team will respond within 24–48 hours.
          </p>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-white text-gray-900 hover:bg-gray-100 transition"
            >
              WhatsApp Us ({COMPANY_PHONE})
            </a>
            <a
              href={`tel:${COMPANY_PHONE}`}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-gray-700 text-white hover:bg-white/10 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <SectionTitle label="Contact Info" title="Reach Out Directly" align="left" />

              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.label === 'WhatsApp' ? '_blank' : undefined}
                          rel={detail.label === 'WhatsApp' ? 'noreferrer' : undefined}
                          className="text-sm text-gray-900 font-medium hover:underline"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-900 font-medium">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-gray-900 rounded-xl p-6 text-white">
                <h4 className="font-bold mb-2">Response Time</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We typically respond to all project inquiries within 24–48 business hours. For urgent matters, WhatsApp
                  us at <span className="text-white font-semibold">{COMPANY_PHONE}</span>.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Project Request</h2>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Request Sent Successfully!</h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for reaching out. Our team will review your request and respond within 24–48 hours.
                    </p>
                    <button onClick={() => setStatus('idle')} className="text-sm text-gray-600 underline hover:text-gray-900">
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                          WhatsApp Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          required
                          placeholder="+92 300 0000000"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 0000000"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Select Service <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`${inputClass} cursor-pointer`}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your project, goals, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                        {errorMsg || (
                          <>
                            Something went wrong. Please try again or email us directly at{' '}
                            <a href="mailto:saimpkf@gmail.com" className="underline font-medium">
                              saimpkf@gmail.com
                            </a>
                            .
                          </>
                        )}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-gray-900 text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Project Request'}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form, you agree to be contacted by our team regarding your project inquiry.
                    </p>
                  </form>
                )}
              </div>

              <p className="mt-4 text-xs text-gray-400">
                Prefer WhatsApp? Message us at <a className="underline" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">{COMPANY_PHONE}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}