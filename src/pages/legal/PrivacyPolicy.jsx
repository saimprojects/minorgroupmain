import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const lastUpdated = 'March 1, 2026'

  return (
    <div className="legal-page">
      {/* HERO SECTION */}
      <section className="legal-hero shell">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/legal">Legal</Link><span aria-hidden="true">/</span><span aria-current="page">Privacy Policy</span></nav>
        <p className="page-kicker">Legal</p>
        <h1 className="page-title">Privacy Policy</h1>
        
        <p className="legal-date">Last Updated: {lastUpdated}</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated Badge */}
          <div className="bg-sky-50 rounded-none p-4 mb-8 border border-sky-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-sky-800">
                <span className="font-semibold">Effective Date:</span> {lastUpdated}
              </p>
              <p className="text-xs text-sky-600">This policy describes how we collect, use, and handle your information.</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-sky max-w-none">
            <p className="text-sky-700 text-lg leading-relaxed">
              At <span className="font-semibold text-sky-900">Minor Group of Technologies</span>, we take your privacy seriously. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site.
            </p>
          </div>

          {/* Table of Contents - Optional but user-friendly */}
          <div className="bg-sky-50 rounded-none p-6 my-8 border border-sky-100">
            <h2 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Contents
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                'Information We Collect',
                'How We Use Your Information',
                'Disclosure of Your Information',
                'Cookies and Tracking Technologies',
                'Data Security',
                'Your Data Protection Rights',
                'Third-Party Websites',
                'Children\'s Privacy',
                'Changes to This Privacy Policy',
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

          {/* Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">1</span>
                Information We Collect
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fill out a contact form</li>
                  <li>Request a consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Use our services</li>
                  <li>Communicate with us via email, phone, or WhatsApp</li>
                </ul>
                <p className="mt-3">The personal information we may collect includes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Name and Contact Data:</span> Your full name, email address, phone number, WhatsApp number</li>
                  <li><span className="font-semibold">Project Information:</span> Details about your business and project requirements</li>
                  <li><span className="font-semibold">Communication Data:</span> Records of our conversations and correspondence</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">2</span>
                How We Use Your Information
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process your project requests and deliver services</li>
                  <li>Send you updates, marketing communications, and promotional materials</li>
                  <li>Improve our website, services, and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized transactions</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">3</span>
                Disclosure of Your Information
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We may share your information in the following situations:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">With your consent:</span> We may disclose your information for any purpose with your explicit consent.</li>
                  <li><span className="font-semibold">Service Providers:</span> We may share your data with trusted third-party vendors who assist us in operating our website and conducting our business.</li>
                  <li><span className="font-semibold">Legal Requirements:</span> If required by law or in response to valid requests by public authorities.</li>
                  <li><span className="font-semibold">Business Transfers:</span> In connection with any merger, sale of company assets, or acquisition.</li>
                </ul>
                <p className="mt-3 text-sm bg-sky-50 p-4 rounded-none">
                  <span className="font-semibold">Note:</span> We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">4</span>
                Cookies and Tracking Technologies
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.</p>
                <p>We use the following types of cookies:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Essential Cookies:</span> Required for the website to function properly.</li>
                  <li><span className="font-semibold">Analytics Cookies:</span> Help us understand how visitors interact with our website.</li>
                  <li><span className="font-semibold">Preference Cookies:</span> Remember your settings and preferences.</li>
                </ul>
                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">5</span>
                Data Security
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
                <div className="bg-sky-50 p-4 rounded-none">
                  <p className="font-semibold text-sky-900">Our security practices include:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security assessments</li>
                    <li>Limited access to personal information</li>
                    <li>Secure socket layer (SSL) technology</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">6</span>
                Your Data Protection Rights
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Right to Access:</span> Request copies of your personal data.</li>
                  <li><span className="font-semibold">Right to Rectification:</span> Request correction of inaccurate information.</li>
                  <li><span className="font-semibold">Right to Erasure:</span> Request deletion of your personal data.</li>
                  <li><span className="font-semibold">Right to Restrict Processing:</span> Request limitation of how we use your data.</li>
                  <li><span className="font-semibold">Right to Data Portability:</span> Request transfer of your data to another organization.</li>
                  <li><span className="font-semibold">Right to Object:</span> Object to our use of your data.</li>
                </ul>
                <p>To exercise any of these rights, please contact us using the information provided below.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">7</span>
                Third-Party Websites
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">8</span>
                Children's Privacy
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">9</span>
                Changes to This Privacy Policy
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">10</span>
                Contact Us
              </h2>
              <div className="ml-11 space-y-6 text-sky-700">
                <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                
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

                <p className="text-sm italic text-sky-600">
                  We aim to respond to all privacy-related inquiries within 5-7 business days.
                </p>
              </div>
            </section>
          </div>

          {/* Acknowledgment Section */}
          <div className="mt-12 p-6 bg-sky-50 rounded-none border border-sky-100 text-center">
            <p className="text-sm text-sky-700">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            <div className="mt-4 flex justify-center gap-3">
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
                to="/" 
                className="inline-flex items-center gap-1 text-sm border border-sky-300 text-sky-700 px-4 py-2 rounded-none hover:bg-sky-100 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

