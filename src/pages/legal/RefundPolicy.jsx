import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const lastUpdated = 'March 1, 2026'

  // Refund scenarios
  const refundScenarios = [
    {
      title: 'Before Work Commences',
      timeline: 'Within 3 business days of deposit',
      refund: '100% refund',
      description: 'If you change your mind before any work has begun, you are eligible for a full refund of your deposit.',
      icon: ''
    },
    {
      title: 'During Discovery Phase',
      timeline: 'After work has started, before design phase',
      refund: '75% refund',
      description: 'If we have begun requirements gathering but no design work has been started.',
      icon: ''
    },
    {
      title: 'During Design Phase',
      timeline: 'After design work has begun',
      refund: '50% refund',
      description: 'If design concepts have been presented and work has started on the visual direction.',
      icon: ''
    },
    {
      title: 'During Development',
      timeline: 'After development has started',
      refund: 'Partial (work not yet completed)',
      description: 'Refund calculated based on percentage of work not yet delivered.',
      icon: ''
    },
    {
      title: 'After Delivery',
      timeline: 'Project completed and delivered',
      refund: 'No refund',
      description: 'Once the project is completed and delivered according to specifications.',
      icon: ''
    }
  ]

  return (
    <div className="legal-page">
      {/* HERO SECTION */}
      <section className="legal-hero shell">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/legal">Legal</Link><span aria-hidden="true">/</span><span aria-current="page">Refund Policy</span></nav>
        <p className="page-kicker">Money-Back Guarantee</p>
        <h1 className="page-title">Refund Policy</h1>
        
        <p className="legal-date">Last Updated: {lastUpdated}</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated Badge */}
          <div className="bg-sky-50 rounded-none p-4 mb-8 border border-sky-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-sky-800">
                <span className="font-semibold">Effective Date:</span> {lastUpdated}
              </p>
              <p className="text-xs text-sky-600">Our commitment to fair and transparent refunds.</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-sky max-w-none mb-8">
            <p className="text-sky-700 text-lg leading-relaxed">
              At <span className="font-semibold text-sky-900">Minor Group of Technologies</span>, we want you to be completely satisfied 
              with our services. This Refund Policy outlines the terms and conditions under which refunds may be issued for our 
              software development services.
            </p>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid sm:grid-cols-3 gap-4 my-8">
            {[
              { label: 'Money-Back Period', value: '3 Days', icon: '⏱', desc: 'Full refund within 3 days' },
              { label: 'Processing Time', value: '5-10 Days', icon: '', desc: 'Refund processing time' },
              { label: 'Satisfaction', value: '100%', icon: '⭐', desc: 'We want you happy' },
            ].map((item, index) => (
              <div key={index} className="bg-sky-50 rounded-none p-4 text-center border border-sky-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-lg font-bold text-sky-900">{item.value}</div>
                <div className="text-xs text-sky-600">{item.label}</div>
                <div className="text-xs text-sky-400 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Table of Contents */}
          <div className="bg-sky-50 rounded-none p-6 my-8 border border-sky-100">
            <h2 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Contents
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                'Introduction',
                'Refund Scenarios',
                'Subscription Services',
                'Custom Development Projects',
                'SaaS Product Refunds',
                'Non-Refundable Items',
                'Refund Request Process',
                'Refund Timeline',
                'Late or Missing Refunds',
                'Chargebacks',
                'Cancellation Policy',
                'Contact Us'
              ].map((item, index) => (
                <a 
                  key={index}
                  href={`#section-${index+1}`}
                  className="text-sky-600 hover:text-sky-800 hover:underline flex items-center gap-1"
                >
                  <span className="text-sky-400">{index+1}.</span> {item}
                </a>
              ))}
            </div>
          </div>

          {/* Refund Scenarios Table */}
          <div className="my-10">
            <h2 className="text-2xl font-bold text-sky-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">2</span>
              Refund Scenarios at a Glance
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-sky-100 rounded-none">
                <thead>
                  <tr className="bg-sky-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Scenario</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Timeline</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Refund Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100">
                  {refundScenarios.map((scenario, index) => (
                    <tr key={index} className="hover:bg-sky-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{scenario.icon}</span>
                          <span className="text-sm font-medium text-sky-900">{scenario.title}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-sky-700">{scenario.timeline}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          scenario.refund.includes('100%') ? 'bg-sky-100 text-sky-700' :
                          scenario.refund.includes('75%') ? 'bg-sky-100 text-sky-700' :
                          scenario.refund.includes('50%') ? 'bg-sky-100 text-sky-700' :
                          scenario.refund.includes('Partial') ? 'bg-sky-100 text-sky-700' :
                          'bg-sky-100 text-sky-700'
                        }`}>
                          {scenario.refund}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-sky-600">{scenario.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Section 1 - Already covered in intro */}
            
            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">3</span>
                Subscription Services
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>For subscription-based services (including SaaS products):</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Monthly Subscriptions:</span> Refunds are not issued for partial months. You may cancel at any time, and access will continue until the end of your current billing period.</li>
                  <li><span className="font-semibold">Annual Subscriptions:</span> If you cancel within 14 days of purchase, you may receive a pro-rata refund for unused months, minus a 10% processing fee.</li>
                  <li><span className="font-semibold">Free Trials:</span> No payment is collected during free trials, so no refund applies.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">4</span>
                Custom Development Projects
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>For custom software development projects, refunds are calculated based on work completed:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Work completed is measured against the project scope and timeline</li>
                  <li>Hours already logged by our team are non-refundable</li>
                  <li>Third-party costs (licenses, APIs, hosting) already paid are non-refundable</li>
                  <li>Refunds are calculated as: (Total project cost - (hours worked × hourly rate) - third-party costs)</li>
                </ul>
                <div className="bg-sky-50 p-4 rounded-none mt-3">
                  <p className="text-sm">
                    <span className="font-semibold">Example:</span> If your project costs $5,000, we've completed 20 hours of work at $75/hour ($1,500), and paid $200 in third-party fees, your refund would be $3,300.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">5</span>
                SaaS Product Refunds
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>For our SaaS products (including TAM - Travel Agency Management):</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Monthly Plans:</span> No refunds for partial months. You can cancel anytime.</li>
                  <li><span className="font-semibold">Annual Plans:</span> 14-day money-back guarantee from the purchase date.</li>
                  <li><span className="font-semibold">Setup Fees:</span> One-time setup fees are non-refundable after work has begun.</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">6</span>
                Non-Refundable Items
              </h2>
              <div className="ml-11">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Domain registration fees',
                    'SSL certificate purchases',
                    'Third-party software licenses',
                    'API access fees',
                    'Hosting setup costs',
                    'Hours already worked',
                    'Consultation calls conducted',
                    'Deposits for started projects (partial)'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-sky-700 bg-sky-50 p-3 rounded-none">
                      <svg className="w-4 h-4 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">7</span>
                Refund Request Process
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>To request a refund, please follow these steps:</p>
                <ol className="list-decimal pl-5 space-y-3">
                  <li className="pl-2">
                    <span className="font-semibold">Email us</span> at <a href="mailto:Contact@minorgroup.site" className="text-sky-600 underline">Contact@minorgroup.site</a> with the subject line "REFUND REQUEST - [Your Project Name]"
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Include</span> your full name, project details, and reason for refund
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Our team</span> will acknowledge your request within 2 business days
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">We may schedule</span> a brief call to understand your concerns
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Refund decision</span> will be communicated within 5 business days
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">8</span>
                Refund Timeline
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Once your refund is approved:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Refunds are processed within 5-10 business days</li>
                  <li>Credits will appear on your original payment method</li>
                  <li>Bank processing times may add 3-5 additional business days</li>
                  <li>You will receive a confirmation email once the refund is processed</li>
                </ul>
                <div className="bg-sky-50 p-4 rounded-none border border-sky-200 mt-3">
                  <p className="text-sm text-sky-800 flex items-start gap-2">
                    <svg className="w-5 h-5 text-sky-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><span className="font-semibold">Note:</span> International payments may take longer to process due to banking regulations.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">9</span>
                Late or Missing Refunds
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>If you haven't received a refund after the stated timeline:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Check your bank account again</li>
                  <li>Contact your credit card company or bank (processing times vary)</li>
                  <li>If you've done both and still haven't received your refund, please contact us at <a href="mailto:Contact@minorgroup.site" className="text-sky-600 underline">Contact@minorgroup.site</a></li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">10</span>
                Chargebacks
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>If you dispute a charge with your bank or credit card company (a "chargeback") instead of following our refund process:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>We will immediately suspend your account and access to services</li>
                  <li>We will provide all documentation to your bank to defend the charge</li>
                  <li>If the chargeback is found in your favor, we will honor the decision</li>
                  <li>If the chargeback is found in our favor, you may be liable for additional fees</li>
                </ul>
                <p className="mt-2">We strongly encourage contacting us first to resolve any issues directly.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">11</span>
                Cancellation Policy
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p><span className="font-semibold">For projects:</span> You may cancel a project at any time by providing written notice. Refunds will be calculated based on work completed up to the cancellation date.</p>
                <p><span className="font-semibold">For subscriptions:</span> You may cancel your subscription at any time through your account dashboard or by contacting us. Access will continue until the end of your current billing period.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">12</span>
                Contact Us
              </h2>
              <div className="ml-11 space-y-6 text-sky-700">
                <p>If you have any questions about our Refund Policy, please contact us:</p>
                
                <div className="bg-sky-50 rounded-none p-6 border border-sky-100">
                  <h3 className="font-bold text-sky-900 mb-3">Minor Group of Technologies</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:Contact@minorgroup.site" className="text-sky-600 hover:text-sky-800">Contact@minorgroup.site</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+19175085593" className="text-sky-600 hover:text-sky-800">+1 (917) 508-5593</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Pakistan (Headquarters)</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Acknowledgment Section */}
          <div className="mt-12 p-6 bg-sky-50 rounded-none border border-sky-100 text-center">
            <p className="text-sm text-sky-700">
              By making a payment for our services, you acknowledge that you have read, understood, and agree to this Refund Policy.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-1 text-sm bg-sky-600 text-white px-4 py-2 rounded-none hover:bg-sky-700 transition-colors"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                to="/terms" 
                className="inline-flex items-center gap-1 text-sm border border-sky-300 text-sky-700 px-4 py-2 rounded-none hover:bg-sky-100 transition-colors"
              >
                View Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

