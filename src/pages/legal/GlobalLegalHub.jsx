import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function GlobalLegalHub() {
  useEffect(() => {
    document.title = 'Legal Hub — Minor Group of Technologies'
    window.scrollTo(0, 0)
  }, [])

  const lastUpdated = 'March 1, 2026'

  // State for active tab
  const [activeTab, setActiveTab] = useState('privacy')

  // Tab data
  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: '', region: 'Global' },
    { id: 'terms', label: 'Terms of Service', icon: '', region: 'Global' },
    { id: 'cookies', label: 'Cookie Policy', icon: '', region: 'Global' },
    { id: 'gdpr', label: 'GDPR (EU)', icon: '', region: 'Europe' },
    { id: 'ccpa', label: 'CCPA (California)', icon: '', region: 'USA' },
    { id: 'disclaimer', label: 'Disclaimer', icon: '', region: 'Global' },
    { id: 'refund', label: 'Refund Policy', icon: '', region: 'Global' },
  ]

  return (
    <div className="legal-page">
      {/* HERO SECTION */}
      <section className="legal-hero shell">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Legal Hub</span></nav>
        <p className="page-kicker">Global Compliance Center</p>
        <h1 className="page-title">Legal Hub</h1>
        <p className="page-lead">One Place for All Legal Information</p>
        <p className="legal-date">Last Updated: {lastUpdated}</p>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Region Selector Banner */}
          <div className="bg-sky-900 rounded-none p-6 mb-10 text-white ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                  
                </div>
                <div>
                  <h2 className="text-xl font-bold">Global Compliance</h2>
                  <p className="text-sky-100 text-sm">Serving users worldwide with region-specific policies</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs"> GDPR</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs"> CCPA</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs"> Global</span>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="bg-sky-50 rounded-none p-2 mb-8 border border-sky-100 overflow-x-auto">
            <div className="legal-topic-buttons flex flex-wrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={activeTab === tab.id}
                  className={`px-4 py-2.5 rounded-none text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-sky-600 text-white '
                      : 'text-sky-700 hover:bg-sky-100'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-sky-200 text-sky-800'
                  }`}>
                    {tab.region}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT AREA - All Policies in One Place */}
          <div className="bg-white rounded-none border border-sky-100 p-6 md:p-8 ">
            
            {/* ===== PRIVACY POLICY ===== */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-900">Privacy Policy</h2>
                    <p className="text-sm text-sky-500">How we collect, use, and protect your data</p>
                  </div>
                </div>

                <div className="prose max-w-none text-sky-700 space-y-4">
                  <p><span className="font-semibold">Last Updated:</span> {lastUpdated}</p>
                  
                  <h3 className="text-lg font-semibold text-sky-900 mt-4">1. Information We Collect</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-semibold">Personal Information:</span> Name, email, phone, WhatsApp number</li>
                    <li><span className="font-semibold">Project Information:</span> Business details, requirements, communications</li>
                    <li><span className="font-semibold">Technical Data:</span> IP address, browser type, pages visited</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">2. How We Use Your Information</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>To provide and improve our services</li>
                    <li>To communicate with you about your projects</li>
                    <li>To send marketing communications (with consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">3. Data Sharing</h3>
                  <p>We do not sell your personal information. We may share with:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Service providers who assist in our operations</li>
                    <li>Legal authorities when required by law</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">4. Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to protect your data.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">5. Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information. Contact us at <a href="mailto:saimpkf@gmail.com" className="text-sky-600 underline">saimpkf@gmail.com</a></p>
                </div>
              </div>
            )}

            {/* ===== TERMS OF SERVICE ===== */}
            {activeTab === 'terms' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-900">Terms of Service</h2>
                    <p className="text-sm text-sky-500">Agreement for using our services</p>
                  </div>
                </div>

                <div className="prose max-w-none text-sky-700 space-y-4">
                  <p><span className="font-semibold">Last Updated:</span> {lastUpdated}</p>
                  
                  <h3 className="text-lg font-semibold text-sky-900 mt-4">1. Acceptance of Terms</h3>
                  <p>By accessing our website or using our services, you agree to be bound by these Terms.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">2. Services</h3>
                  <p>We provide software development services including:</p>
                  <ul className="list-disc pl-5">
                    <li>TAM System Development</li>
                    <li>SaaS MVP Development</li>
                    <li>Business Dashboards</li>
                    <li>Company Websites</li>
                    <li>Automation & Integration</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">3. Intellectual Property</h3>
                  <p>You retain ownership of your content. We retain ownership of our pre-existing IP. Custom code developed for you is yours upon full payment.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">4. Payment Terms</h3>
                  <p>Payment terms are outlined in individual project agreements. Late payments may result in project suspension.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">5. Limitation of Liability</h3>
                  <p>We are not liable for indirect damages. Our liability is limited to the amount paid for services.</p>
                </div>
              </div>
            )}

            {/* ===== COOKIE POLICY ===== */}
            {activeTab === 'cookies' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-900">Cookie Policy</h2>
                    <p className="text-sm text-sky-500">How we use cookies and tracking</p>
                  </div>
                </div>

                <div className="prose max-w-none text-sky-700 space-y-4">
                  <h3 className="text-lg font-semibold text-sky-900">What Are Cookies?</h3>
                  <p>Cookies are small text files stored on your device to improve website functionality.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Types of Cookies We Use</h3>
                  <div className="grid gap-3">
                    <div className="bg-sky-50 p-3 rounded-none">
                      <span className="font-semibold"> Essential:</span> Required for site operation
                    </div>
                    <div className="bg-sky-50 p-3 rounded-none">
                      <span className="font-semibold"> Analytics:</span> Google Analytics to understand usage
                    </div>
                    <div className="bg-sky-50 p-3 rounded-none">
                      <span className="font-semibold"> Functional:</span> Remember your preferences
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Managing Cookies</h3>
                  <p>You can disable cookies through your browser settings. Note: This may affect website functionality.</p>
                </div>
              </div>
            )}

            {/* ===== GDPR (EU) ===== */}
            {activeTab === 'gdpr' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-900">GDPR Compliance</h2>
                    <p className="text-sm text-sky-500">For European Union Residents</p>
                  </div>
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-none p-4 mb-4">
                  <p className="text-sm text-sky-800 flex items-start gap-2">
                    <span><span className="font-semibold">EU Users:</span> This section applies to individuals in the European Economic Area</span>
                  </p>
                </div>

                <div className="prose max-w-none text-sky-700 space-y-4">
                  <h3 className="text-lg font-semibold text-sky-900">Your GDPR Rights</h3>
                  <ul className="list-disc pl-5">
                    <li><span className="font-semibold">Right to Access:</span> Request copies of your data</li>
                    <li><span className="font-semibold">Right to Rectification:</span> Correct inaccurate data</li>
                    <li><span className="font-semibold">Right to Erasure:</span> Request deletion of your data</li>
                    <li><span className="font-semibold">Right to Restrict Processing:</span> Limit how we use your data</li>
                    <li><span className="font-semibold">Right to Data Portability:</span> Receive your data in portable format</li>
                    <li><span className="font-semibold">Right to Object:</span> Object to data processing</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Legal Basis for Processing</h3>
                  <ul className="list-disc pl-5">
                    <li>Consent (for marketing)</li>
                    <li>Contract (for project delivery)</li>
                    <li>Legal obligation</li>
                    <li>Legitimate interests</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Data Transfers</h3>
                  <p>As a Pakistan-based company, we use Standard Contractual Clauses for international data transfers.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Contact for GDPR Requests</h3>
                  <p>Email: <a href="mailto:saimpkf@gmail.com" className="text-sky-600 underline">saimpkf@gmail.com</a> (Subject: GDPR Request)</p>
                </div>
              </div>
            )}

            {/* ===== CCPA (California) ===== */}
            {activeTab === 'ccpa' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-900">CCPA Compliance</h2>
                    <p className="text-sm text-sky-500">For California Residents</p>
                  </div>
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-none p-4 mb-4">
                  <p className="text-sm text-sky-800 flex items-start gap-2">
                    <span><span className="font-semibold">California Residents:</span> Your privacy rights under CCPA</span>
                  </p>
                </div>

                <div className="prose max-w-none text-sky-700 space-y-4">
                  <h3 className="text-lg font-semibold text-sky-900">Your CCPA Rights</h3>
                  <ul className="list-disc pl-5">
                    <li><span className="font-semibold">Right to Know:</span> What personal information we collect</li>
                    <li><span className="font-semibold">Right to Delete:</span> Request deletion of your data</li>
                    <li><span className="font-semibold">Right to Opt-Out:</span> We do NOT sell your data</li>
                    <li><span className="font-semibold">Right to Non-Discrimination:</span> No penalty for exercising rights</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Categories Collected (Last 12 Months)</h3>
                  <ul className="list-disc pl-5">
                    <li>Identifiers (name, email, phone)</li>
                    <li>Commercial information (project details)</li>
                    <li>Internet activity (website visits)</li>
                    <li>Professional information (business details)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Do We Sell Personal Information?</h3>
                  <p className="font-bold text-sky-600">NO - We do not and will not sell your personal information.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Submit CCPA Request</h3>
                  <p>Email: <a href="mailto:saimpkf@gmail.com" className="text-sky-600 underline">saimpkf@gmail.com</a> (Subject: CCPA Request)</p>
                </div>
              </div>
            )}

            {/* ===== DISCLAIMER ===== */}
            {activeTab === 'disclaimer' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-900">Disclaimer</h2>
                    <p className="text-sm text-sky-500">Important legal notices</p>
                  </div>
                </div>

                <div className="prose max-w-none text-sky-700 space-y-4">
                  <h3 className="text-lg font-semibold text-sky-900">General Information</h3>
                  <p>The information provided is for general informational purposes only. We make no warranties about accuracy or completeness.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Professional Advice</h3>
                  <p>Our services are technical in nature and should not be considered legal, financial, or business advice. Consult appropriate professionals.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">External Links</h3>
                  <p>We are not responsible for content on external websites linked from our site.</p>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">No Warranties</h3>
                  <p>Services are provided "as is" without warranties of any kind.</p>
                </div>
              </div>
            )}

            {/* ===== REFUND POLICY ===== */}
            {activeTab === 'refund' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-900">Refund Policy</h2>
                    <p className="text-sm text-sky-500">Our commitment to fair refunds</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  <div className="bg-sky-50 p-3 rounded-none text-center">
                    <div className="text-xl">⏱</div>
                    <div className="text-sm font-semibold">3 Days</div>
                    <div className="text-xs">Full refund window</div>
                  </div>
                  <div className="bg-sky-50 p-3 rounded-none text-center">
                    <div className="text-xl"></div>
                    <div className="text-sm font-semibold">5-10 Days</div>
                    <div className="text-xs">Processing time</div>
                  </div>
                  <div className="bg-sky-50 p-3 rounded-none text-center">
                    <div className="text-xl">⭐</div>
                    <div className="text-sm font-semibold">Fair</div>
                    <div className="text-xs">Pro-rata refunds</div>
                  </div>
                </div>

                <div className="prose max-w-none text-sky-700 space-y-4">
                  <h3 className="text-lg font-semibold text-sky-900">Refund Scenarios</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-sky-100">
                      <thead className="bg-sky-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs">Scenario</th>
                          <th className="px-4 py-2 text-left text-xs">Refund</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-sky-100">
                        <tr><td className="px-4 py-2 text-sm">Before work starts (within 3 days)</td><td className="px-4 py-2 text-sm">100%</td></tr>
                        <tr><td className="px-4 py-2 text-sm">During discovery phase</td><td className="px-4 py-2 text-sm">75%</td></tr>
                        <tr><td className="px-4 py-2 text-sm">During design phase</td><td className="px-4 py-2 text-sm">50%</td></tr>
                        <tr><td className="px-4 py-2 text-sm">During development</td><td className="px-4 py-2 text-sm">Partial (work not done)</td></tr>
                        <tr><td className="px-4 py-2 text-sm">After delivery</td><td className="px-4 py-2 text-sm">No refund</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">Non-Refundable Items</h3>
                  <ul className="list-disc pl-5">
                    <li>Domain registrations</li>
                    <li>Third-party licenses</li>
                    <li>Hours already worked</li>
                    <li>Setup fees (after work begins)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-sky-900 mt-4">How to Request a Refund</h3>
                  <p>Email <a href="mailto:saimpkf@gmail.com" className="text-sky-600 underline">saimpkf@gmail.com</a> with subject "REFUND REQUEST" and your project details.</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Section - Common for all tabs */}
          <div className="mt-8 bg-sky-900 rounded-none p-6 text-white">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span></span> Questions About Legal Matters?
            </h3>
            <p className="text-sm text-sky-200 mb-4">Contact us for any legal or privacy-related inquiries:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:saimpkf@gmail.com" className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-none hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                saimpkf@gmail.com
              </a>
              <a href="tel:+923131471263" className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-none hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +92 313 1471263
              </a>
            </div>
            <p className="text-xs text-sky-300 mt-4">We typically respond within 24-48 hours.</p>
          </div>

          {/* Download/Print Option */}
          <div className="mt-6 text-center">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-800"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Save this page as PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}