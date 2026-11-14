import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowRight, Check, LoaderCircle } from 'lucide-react'
import { company } from '../data/company.js'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mykdvoav'
const emptyForm = { fullName: '', whatsapp: '', phone: '', email: '', service: '', message: '' }
const serviceOptions = [
  { value: '', label: 'Choose a service' },
  { value: 'TAM Development', label: 'Travel agency systems' },
  { value: 'SaaS MVP', label: 'SaaS & MVP development' },
  { value: 'Business Dashboard', label: 'Business dashboards' },
  { value: 'Company Website', label: 'Company websites' },
  { value: 'Automation & Integration', label: 'Automation & integrations' },
]

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const feedbackRef = useRef(null)

  useEffect(() => { if (status === 'success' || status === 'error') feedbackRef.current?.focus() }, [status])

  const handleChange = (event) => setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'submitting') return
    setErrorMsg('')
    setStatus('submitting')
    if (!formData.service) { setStatus('error'); setErrorMsg('Please select a service.'); return }
    if (!formData.message.trim()) { setStatus('error'); setErrorMsg('Please write a short message about your project.'); return }
    const subject = `New Project Inquiry — ${formData.service} — ${formData.fullName}`
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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
      if (response.ok) { setStatus('success'); setFormData(emptyForm); return }
      let data = null
      try { data = await response.json() } catch { data = null }
      setStatus('error')
      setErrorMsg(data?.error || 'Something went wrong. Please try again.')
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again or contact us directly.')
    }
  }

  return <div className="page-shell contact-page">
    <section className="page-hero shell">
      <p className="page-kicker">New conversations welcome</p>
      <h1 className="page-title">What’s on<br />your mind?</h1>
      <p className="page-lead">Tell us what you’re working on. We’ll take it from there.</p>
    </section>

    <section className="content-section shell contact-layout">
      <aside>
        <h2 className="section-heading-text">A good place<br />to begin.</h2>
        <p className="contact-note">Share the idea, the problem, or the part you haven’t quite figured out yet. A little context helps us make the first conversation useful.</p>
        <dl className="contact-details">
          <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email} <ArrowUpRight size={16} aria-hidden="true" /></a></dd></div>
          <div><dt>Phone</dt><dd><a href={`tel:${company.phone}`}>{company.phoneDisplay}</a></dd></div>
          <div><dt>Based in Pakistan</dt><dd>Monday to Saturday, 9am to 6pm PKT</dd></div>
        </dl>
        <p className="contact-note">We typically respond within 24–48 business hours.</p>
      </aside>

      {status === 'success' ? <div className="form-success" role="status" tabIndex={-1} ref={feedbackRef}>
        <Check size={36} aria-hidden="true" />
        <h2>Message received.</h2>
        <p>Thanks for sharing your project. We’ll review your request and get back to you within 24–48 business hours.</p>
        <button className="inline-action" onClick={() => setStatus('idle')}>Send another request <ArrowRight size={20} aria-hidden="true" /></button>
      </div> : <form className="agency-form" action={FORMSPREE_ENDPOINT} method="post" onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
        <h2>Tell us a little about it.</h2>
        <p className="form-note">Fields marked * are required.</p>
        <div className="form-grid">
          <div className="field"><label className="field-label" htmlFor="contact-name">Your name *</label><input id="contact-name" name="fullName" type="text" autoComplete="name" required value={formData.fullName} onChange={handleChange} placeholder="Full name" /></div>
          <div className="field"><label className="field-label" htmlFor="contact-email">Email address *</label><input id="contact-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" /></div>
          <div className="field"><label className="field-label" htmlFor="contact-whatsapp">WhatsApp number *</label><input id="contact-whatsapp" name="whatsapp" type="tel" autoComplete="tel" required value={formData.whatsapp} onChange={handleChange} placeholder="Include country code" /></div>
          <div className="field"><label className="field-label" htmlFor="contact-phone">Phone number <span>(optional)</span></label><input id="contact-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="If different from WhatsApp" /></div>
          <div className="field full-width"><label className="field-label" htmlFor="contact-service">What can we help with? *</label><select id="contact-service" name="service" required value={formData.service} onChange={handleChange}>{serviceOptions.map(option => <option key={option.value} value={option.value} disabled={option.value === ''}>{option.label}</option>)}</select></div>
          <div className="field full-width"><label className="field-label" htmlFor="contact-message">A little about your project *</label><textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="The idea, the goals, and what you need a hand with." /></div>
        </div>
        {status === 'error' && <div className="form-error" role="alert" tabIndex={-1} ref={feedbackRef}><p>{errorMsg}</p><a href={`mailto:${company.email}`}>You can also email us directly.</a></div>}
        <button className="submit-button" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? <>Sending <LoaderCircle size={20} aria-hidden="true" className="animate-spin" /></> : <>Send project request <ArrowUpRight size={20} aria-hidden="true" /></>}</button>
        <p className="form-note">By submitting, you agree to be contacted about your project inquiry.</p>
      </form>}
    </section>
  </div>
}



