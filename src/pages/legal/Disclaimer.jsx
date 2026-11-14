import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Disclaimer() {
  useEffect(() => {
    document.title = 'Disclaimer — Minor Group of Technologies'
    window.scrollTo(0, 0)
  }, [])

  const lastUpdated = 'March 1, 2026'

  return (
    <div className="legal-page">
      {/* HERO SECTION */}
      <section className="legal-hero shell">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/legal">Legal</Link><span aria-hidden="true">/</span><span aria-current="page">Disclaimer</span></nav>
        <p className="page-kicker">Legal Notice</p>
        <h1 className="page-title">Disclaimer</h1>
        
        <p className="legal-date">Last Updated: {lastUpdated}</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated Badge */}
          <div className="bg-sky-50 rounded-none p-4 mb-8 border border-sky-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-sky-800">
                <span className="font-semibold">Effective Date:</span> {lastUpdated}
              </p>
              <p className="text-xs text-sky-600">Please read this disclaimer carefully before using our services.</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-sky max-w-none mb-8">
            <p className="text-sky-700 text-lg leading-relaxed">
              The information provided by <span className="font-semibold text-sky-900">Minor Group of Technologies</span> 
              ("we," "us," or "our") on our website and through our services is for general informational purposes only. 
              All information on the site is provided in good faith, however we make no representation or warranty of any kind, 
              express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
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
                'General Information Disclaimer',
                'Professional Disclaimer',
                'External Links Disclaimer',
                'Testimonials Disclaimer',
                'Errors and Omissions Disclaimer',
                'Fair Use Disclaimer',
                'Views Expressed Disclaimer',
                'No Responsibility Disclaimer',
                '"No Warranties" Disclaimer',
                'Limitation of Liability',
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
                General Information Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>The information contained on our website and provided through our services is for general information purposes only. We assume no responsibility for errors or omissions in the contents of the website.</p>
                <p>In no event shall we be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the website or the contents of the website.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">2</span>
                Professional Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>The website cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.</p>
                <p>Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.</p>
                <div className="bg-sky-50 p-4 rounded-none border border-sky-200 mt-3">
                  <p className="text-sm text-sky-800 flex items-start gap-2">
                    <svg className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><span className="font-semibold">Important:</span> Our software development services are technical in nature and should not be considered legal, financial, or business advice.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">3</span>
                External Links Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
                <p>We are not responsible for the content or practices of any linked third-party sites. These links are provided for your convenience only and do not constitute endorsement.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">4</span>
                Testimonials Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Our website may contain testimonials from users of our services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users and may not necessarily be representative of all users of our services.</p>
                <p>We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">5</span>
                Errors and Omissions Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>While we have made every attempt to ensure that the information contained in our website and services is accurate, we are not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
                <p>All information is provided "as is," with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">6</span>
                Fair Use Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We may use copyrighted material which has not always been specifically authorized by the copyright owner. We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</p>
                <p>We believe this constitutes a "fair use" of any such copyrighted material as provided for in law. If you wish to use copyrighted material from our site for your own purposes that go beyond fair use, you must obtain permission from the copyright owner.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">7</span>
                Views Expressed Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Our website may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including us.</p>
                <p>Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">8</span>
                No Responsibility Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>To the fullest extent permitted by applicable law, we expressly exclude all conditions, warranties and other terms which might otherwise be implied by statute or common law.</p>
                <p>We shall not be liable for any loss or damage whatsoever and howsoever caused arising out of, or in connection with, any use of our website or services.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">9</span>
                "No Warranties" Disclaimer
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>This website and all information, content, materials, and services included on or otherwise made available to you through this website are provided on an "as is" and "as available" basis, unless otherwise specified in writing.</p>
                <p>We make no representations or warranties of any kind, express or implied, as to the operation of this website or the information, content, materials, or services included on or otherwise made available to you through this website.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">10</span>
                Limitation of Liability
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                <p>Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">11</span>
                Contact Us
              </h2>
              <div className="ml-11 space-y-6 text-sky-700">
                <p>If you have any questions about this Disclaimer, please contact us:</p>
                
                <div className="bg-sky-50 rounded-none p-6 border border-sky-100">
                  <h3 className="font-bold text-sky-900 mb-3">Minor Group of Technologies</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:saimpkf@gmail.com" className="text-sky-600 hover:text-sky-800">saimpkf@gmail.com</a>
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
              By using our website and services, you acknowledge that you have read and understood this Disclaimer.
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