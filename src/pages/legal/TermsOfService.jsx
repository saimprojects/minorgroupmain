import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const lastUpdated = 'March 1, 2026'

  return (
    <div className="legal-page">
      {/* HERO SECTION */}
      <section className="legal-hero shell">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/legal">Legal</Link><span aria-hidden="true">/</span><span aria-current="page">Terms of Service</span></nav>
        <p className="page-kicker">Legal Agreement</p>
        <h1 className="page-title">Terms of Service</h1>
        
        <p className="legal-date">Last Updated: {lastUpdated}</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated Badge */}
          <div className="bg-sky-50 rounded-none p-4 mb-8 border border-sky-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-sky-800">
                <span className="font-semibold">Effective Date:</span> {lastUpdated}
              </p>
              <p className="text-xs text-sky-600">Please read these terms carefully before using our services.</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-sky max-w-none mb-8">
            <p className="text-sky-700 text-lg leading-relaxed">
              Welcome to <span className="font-semibold text-sky-900">Minor Group of Technologies</span>. By accessing our website 
              or using our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, 
              please do not use our website or services.
            </p>
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
                'Acceptance of Terms',
                'Description of Services',
                'Intellectual Property Rights',
                'User Responsibilities',
                'Project Engagement Terms',
                'Payment Terms',
                'Cancellation and Refunds',
                'Confidentiality',
                'Limitation of Liability',
                'Indemnification',
                'Termination',
                'Governing Law',
                'Changes to Terms',
                'Contact Information'
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

          {/* Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">1</span>
                Acceptance of Terms
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>By accessing or using our website and services, you confirm that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You are at least 18 years of age and have the legal capacity to enter into a binding agreement</li>
                  <li>You are authorized to act on behalf of your business or organization</li>
                  <li>You will comply with all applicable laws and regulations</li>
                  <li>You have read, understood, and agree to be bound by these Terms</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">2</span>
                Description of Services
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Minor Group of Technologies provides software development services including but not limited to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>SaaS platform development</li>
                  <li>Business dashboard and management systems</li>
                  <li>Company website development</li>
                  <li>Automation and system integration</li>
                  <li>TAM (Travel Agency Management) system</li>
                </ul>
                <p className="mt-3">Specific project scope, deliverables, and timelines will be outlined in a separate project agreement or statement of work.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">3</span>
                Intellectual Property Rights
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p className="font-semibold text-sky-900">Our Intellectual Property:</p>
                <p>All content on our website, including but not limited to logos, text, graphics, software, and designs, is the property of Minor Group of Technologies and protected by intellectual property laws.</p>
                
                <p className="font-semibold text-sky-900 mt-4">Your Intellectual Property:</p>
                <p>You retain all rights to any content, data, or intellectual property you provide to us. By submitting materials, you grant us permission to use such materials solely for the purpose of providing our services to you.</p>
                
                <p className="font-semibold text-sky-900 mt-4">Deliverables:</p>
                <p>Upon full payment, you will receive ownership of the custom code and deliverables created specifically for your project, unless otherwise agreed in writing.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">4</span>
                User Responsibilities
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to our communications in a timely manner</li>
                  <li>Provide necessary access, content, and approvals during project development</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">5</span>
                Project Engagement Terms
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Each project engagement will be governed by a separate agreement that includes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Project scope and specifications</li>
                  <li>Timeline and milestones</li>
                  <li>Payment terms and schedule</li>
                  <li>Deliverables and acceptance criteria</li>
                  <li>Revision and change request process</li>
                </ul>
                <div className="bg-sky-50 p-4 rounded-none mt-3">
                  <p className="text-sm">
                    <span className="font-semibold">Note:</span> In the absence of a separate agreement, these Terms of Service shall govern the relationship.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">6</span>
                Payment Terms
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Payment terms are as follows:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Payment schedules will be outlined in the project agreement</li>
                  <li>Invoices are due within the timeframe specified on the invoice</li>
                  <li>Late payments may incur interest or result in project suspension</li>
                  <li>All fees are non-refundable except as explicitly stated in our Refund Policy</li>
                  <li>Prices are in PKR or USD as agreed upon</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">7</span>
                Cancellation and Refunds
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Cancellation and refund policies:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You may cancel a project within 3 business days of the initial deposit for a full refund</li>
                  <li>After work has commenced, refunds are limited to work not yet completed</li>
                  <li>For subscription-based services, cancellations will take effect at the end of the current billing period</li>
                  <li>Refunds are processed within 10-15 business days of approval</li>
                </ul>
                <p className="mt-3">Please refer to our <Link to="/refund" className="text-sky-600 underline">Refund Policy</Link> for detailed information.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">8</span>
                Confidentiality
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Both parties agree to maintain the confidentiality of:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Business strategies and processes</li>
                  <li>Technical specifications and source code</li>
                  <li>Client and customer data</li>
                  <li>Financial information</li>
                  <li>Any information marked as confidential</li>
                </ul>
                <p>This obligation survives the termination of our agreement.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">9</span>
                Limitation of Liability
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Our services are provided "as is" without warranties of any kind</li>
                  <li>We are not liable for any indirect, incidental, or consequential damages</li>
                  <li>Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim</li>
                  <li>We are not responsible for any third-party services or integrations</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">10</span>
                Indemnification
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>You agree to indemnify and hold Minor Group of Technologies harmless from any claims, damages, or expenses arising from:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your use of our services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content you provide</li>
                </ul>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">11</span>
                Termination
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We may terminate or suspend access to our services immediately, without prior notice, for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Breach of these Terms</li>
                  <li>Non-payment of fees</li>
                  <li>Fraudulent or illegal activities</li>
                  <li>Request by law enforcement or government agency</li>
                </ul>
                <p>Upon termination, your right to use our services will cease immediately.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">12</span>
                Governing Law
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>These Terms shall be governed by the laws of Pakistan, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of Pakistan.</p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">13</span>
                Changes to Terms
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Posting the updated Terms on this page</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending an email notification for material changes</li>
                </ul>
                <p>Your continued use of our services after such modifications constitutes acceptance of the updated Terms.</p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">14</span>
                Contact Information
              </h2>
              <div className="ml-11 space-y-6 text-sky-700">
                <p>If you have any questions about these Terms, please contact us:</p>
                
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
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
                to="/privacy" 
                className="inline-flex items-center gap-1 text-sm border border-sky-300 text-sky-700 px-4 py-2 rounded-none hover:bg-sky-100 transition-colors"
              >
                View Privacy Policy
              </Link>
              <Link 
                to="/" 
                className="inline-flex items-center gap-1 text-sm border border-sky-300 text-sky-700 px-4 py-2 rounded-none hover:bg-sky-100 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Download/Save Option */}
          <div className="mt-6 text-center">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-xs text-sky-600 hover:text-sky-800"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Terms as PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

