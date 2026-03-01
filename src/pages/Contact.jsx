import { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mykdvoav'

const COMPANY_PHONE = '+923131471263'
const WHATSAPP_LINK = 'https://wa.me/923131471263'

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
    bgColor: 'bg-sky-500',
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
    bgColor: 'bg-sky-500',
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
    bgColor: 'bg-green-500',
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
    bgColor: 'bg-sky-500',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Monday – Saturday (9AM-6PM)',
    bgColor: 'bg-sky-500',
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

  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setStatus('submitting')

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
          _replyto: formData.email,
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
    'w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-sky-900 text-sm placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-sky-300'

  return (
    <div className="pt-16">
      {/* HERO SECTION - ENHANCED */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-sky-200 mb-6">
              <span className="hover:text-white transition-colors">Home</span>
              <span>/</span>
              <span className="text-white">Contact</span>
            </div>

            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-6 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
              Get In Touch
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your <span className="text-sky-200">Next System</span>
            </h1>
            
            <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
              Fill the form below and our team will respond within 24–48 hours.
            </p>

            {/* Quick Actions - Enhanced */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold bg-white text-sky-900 hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp Us ({COMPANY_PHONE})
              </a>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - ENHANCED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Details - Enhanced */}
            <div className="lg:col-span-1">
              <SectionTitle label="Contact Info" title="Reach Out Directly" align="left" light={false} />

              <div className="space-y-5 mt-8">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-sky-100 hover:border-sky-300">
                    <div className={`w-12 h-12 rounded-xl ${detail.bgColor} text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      {detail.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-0.5">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.label === 'WhatsApp' ? '_blank' : undefined}
                          rel={detail.label === 'WhatsApp' ? 'noreferrer' : undefined}
                          className="text-sm text-sky-900 font-medium hover:text-sky-600 transition-colors break-all"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-sky-900 font-medium">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time Card - Enhanced */}
              <div className="mt-8 bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg">Response Time</h4>
                </div>
                <p className="text-sky-100 text-sm leading-relaxed">
                  We typically respond to all project inquiries within <span className="font-semibold text-white">24–48 business hours</span>. 
                  For urgent matters, WhatsApp us at <span className="font-semibold text-white">{COMPANY_PHONE}</span>.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-sky-200">Usually replies within an hour on WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Contact Form - Enhanced */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-sky-100 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-sky-900 mb-2">Send a Project Request</h2>
                <p className="text-sky-600 text-sm mb-8">Fill out the form below and we'll get back to you shortly.</p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sky-900 mb-3">Request Sent Successfully!</h3>
                    <p className="text-sky-600 mb-6 max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your request and respond within 24–48 hours.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')} 
                      className="text-sm text-sky-600 hover:text-sky-800 underline transition-colors"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-sky-500 uppercase tracking-wider mb-2">
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
                        <label className="block text-xs font-semibold text-sky-500 uppercase tracking-wider mb-2">
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

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-sky-500 uppercase tracking-wider mb-2">
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
                        <label className="block text-xs font-semibold text-sky-500 uppercase tracking-wider mb-2">
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
                      <label className="block text-xs font-semibold text-sky-500 uppercase tracking-wider mb-2">
                        Select Service <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`${inputClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%230A1929%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] pr-10`}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sky-500 uppercase tracking-wider mb-2">
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
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                          {errorMsg || (
                            <>
                              Something went wrong. Please try again or email us directly at{' '}
                              <a href="mailto:saimpkf@gmail.com" className="underline font-medium hover:text-red-800">
                                saimpkf@gmail.com
                              </a>
                            </>
                          )}
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-gradient-to-r from-sky-600 to-sky-700 text-white py-4 rounded-xl font-semibold text-sm hover:from-sky-700 hover:to-sky-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Project Request'
                      )}
                    </button>

                    <p className="text-xs text-sky-400 text-center">
                      By submitting this form, you agree to be contacted by our team regarding your project inquiry.
                    </p>
                  </form>
                )}
              </div>

              {/* WhatsApp note */}
              <p className="mt-4 text-xs text-sky-500 text-center flex items-center justify-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Prefer WhatsApp? Message us at{' '}
                <a className="underline font-medium text-sky-600 hover:text-sky-800" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  {COMPANY_PHONE}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION - OPTIONAL (can be added if needed) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-sky-400">
            Serving clients worldwide • Pakistan • UAE • USA • UK
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <span className="text-xs px-3 py-1 bg-sky-50 text-sky-700 rounded-full">🇵🇰 Pakistan</span>
            <span className="text-xs px-3 py-1 bg-sky-50 text-sky-700 rounded-full">🇦🇪 UAE</span>
            <span className="text-xs px-3 py-1 bg-sky-50 text-sky-700 rounded-full">🇺🇸 USA</span>
            <span className="text-xs px-3 py-1 bg-sky-50 text-sky-700 rounded-full">🇬🇧 UK</span>
          </div>
        </div>
      </section>
    </div>
  )
}