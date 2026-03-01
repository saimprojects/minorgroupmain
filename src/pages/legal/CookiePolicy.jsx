import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle.jsx'

export default function CookiePolicy() {
  useEffect(() => {
    document.title = 'Cookie Policy — Minor Group of Technologies'
    window.scrollTo(0, 0)
  }, [])

  const lastUpdated = 'March 1, 2026'

  // Cookie preference state (for demo)
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true - cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  })

  const handlePreferenceChange = (type) => {
    if (type === 'essential') return // Essential cannot be changed
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const savePreferences = () => {
    // Here you would save to localStorage or send to backend
    alert('Cookie preferences saved!')
  }

  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-sky-200 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
              <span>/</span>
              <span className="text-white">Cookie Policy</span>
            </div>

            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-4 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
              Your Privacy Matters
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-sky-100">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated Badge */}
          <div className="bg-sky-50 rounded-xl p-4 mb-8 border border-sky-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-sky-800">
                <span className="font-semibold">Effective Date:</span> {lastUpdated}
              </p>
              <p className="text-xs text-sky-600">This policy explains how we use cookies and similar technologies.</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-sky max-w-none mb-8">
            <p className="text-sky-700 text-lg leading-relaxed">
              At <span className="font-semibold text-sky-900">Minor Group of Technologies</span>, we use cookies and similar 
              tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. 
              This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-sky-50 rounded-xl p-6 my-8 border border-sky-100">
            <h2 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Contents
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                'What Are Cookies?',
                'Types of Cookies We Use',
                'Essential Cookies',
                'Analytics Cookies',
                'Functional Cookies',
                'Marketing/Targeting Cookies',
                'Third-Party Cookies',
                'Cookie Consent',
                'Managing Your Cookie Preferences',
                'How to Disable Cookies',
                'Updates to This Policy',
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

          {/* Cookie Preference Center */}
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl p-6 mb-10 border border-sky-200 shadow-md">
            <h2 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Cookie Preference Center
            </h2>
            <p className="text-sm text-sky-700 mb-4">
              You can choose which cookies you want to accept. Essential cookies are required for the website to function properly and cannot be disabled.
            </p>

            <div className="space-y-3 mb-6">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-sky-100">
                <div>
                  <h3 className="font-semibold text-sky-900">Essential Cookies</h3>
                  <p className="text-xs text-sky-600">Required for basic site functionality</p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full mr-3">Always Active</span>
                  <div className="w-10 h-6 bg-sky-500 rounded-full flex items-center justify-end px-1 opacity-50 cursor-not-allowed">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-sky-100">
                <div>
                  <h3 className="font-semibold text-sky-900">Analytics Cookies</h3>
                  <p className="text-xs text-sky-600">Help us understand how visitors use our site</p>
                </div>
                <button 
                  onClick={() => handlePreferenceChange('analytics')}
                  className={`w-10 h-6 rounded-full flex items-center transition-all duration-200 ${
                    cookiePreferences.analytics ? 'bg-sky-500 justify-end' : 'bg-gray-300 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full mx-1 shadow"></div>
                </button>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-sky-100">
                <div>
                  <h3 className="font-semibold text-sky-900">Functional Cookies</h3>
                  <p className="text-xs text-sky-600">Remember your preferences and settings</p>
                </div>
                <button 
                  onClick={() => handlePreferenceChange('functional')}
                  className={`w-10 h-6 rounded-full flex items-center transition-all duration-200 ${
                    cookiePreferences.functional ? 'bg-sky-500 justify-end' : 'bg-gray-300 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full mx-1 shadow"></div>
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-sky-100">
                <div>
                  <h3 className="font-semibold text-sky-900">Marketing Cookies</h3>
                  <p className="text-xs text-sky-600">Used to deliver relevant advertisements</p>
                </div>
                <button 
                  onClick={() => handlePreferenceChange('marketing')}
                  className={`w-10 h-6 rounded-full flex items-center transition-all duration-200 ${
                    cookiePreferences.marketing ? 'bg-sky-500 justify-end' : 'bg-gray-300 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full mx-1 shadow"></div>
                </button>
              </div>
            </div>

            <button
              onClick={savePreferences}
              className="w-full bg-sky-600 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-sky-700 transition-colors"
            >
              Save My Preferences
            </button>
            <p className="text-xs text-sky-400 text-center mt-2">Your preferences will be saved for 6 months</p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">1</span>
                What Are Cookies?
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide valuable information to website owners.</p>
                <p>Cookies can be:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-semibold">Session Cookies:</span> Temporary cookies that expire when you close your browser</li>
                  <li><span className="font-semibold">Persistent Cookies:</span> Remain on your device for a set period or until you delete them</li>
                  <li><span className="font-semibold">First-Party Cookies:</span> Set by the website you are visiting</li>
                  <li><span className="font-semibold">Third-Party Cookies:</span> Set by domains other than the one you are visiting</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">2</span>
                Types of Cookies We Use
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We use the following categories of cookies on our website:</p>
                
                <div className="grid gap-4 mt-4">
                  {/* Essential */}
                  <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                    <h3 className="font-semibold text-sky-900 mb-2">🔐 Essential Cookies</h3>
                    <p className="text-sm text-sky-700">These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
                  </div>

                  {/* Analytics */}
                  <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                    <h3 className="font-semibold text-sky-900 mb-2">📊 Analytics Cookies</h3>
                    <p className="text-sm text-sky-700">These cookies help us understand how visitors interact with our website by collecting anonymous information about pages visited, time spent, and error messages.</p>
                  </div>

                  {/* Functional */}
                  <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                    <h3 className="font-semibold text-sky-900 mb-2">⚙️ Functional Cookies</h3>
                    <p className="text-sm text-sky-700">These cookies remember your preferences and choices to provide enhanced, personalized features.</p>
                  </div>

                  {/* Marketing */}
                  <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                    <h3 className="font-semibold text-sky-900 mb-2">🎯 Marketing Cookies</h3>
                    <p className="text-sm text-sky-700">These cookies track your browsing habits to deliver advertisements relevant to you and measure the effectiveness of advertising campaigns.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">3</span>
                Specific Cookies We Use
              </h2>
              <div className="ml-11">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-sky-100 rounded-xl">
                    <thead>
                      <tr className="bg-sky-50">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Cookie Name</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Provider</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Purpose</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Duration</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-sky-900">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sky-100">
                      {[
                        { name: 'session_id', provider: 'Minor Group', purpose: 'Maintain user session', duration: 'Session', type: 'Essential' },
                        { name: 'csrf_token', provider: 'Minor Group', purpose: 'Security protection', duration: 'Session', type: 'Essential' },
                        { name: '_ga', provider: 'Google Analytics', purpose: 'Distinguish users', duration: '2 years', type: 'Analytics' },
                        { name: '_gid', provider: 'Google Analytics', purpose: 'Distinguish users', duration: '24 hours', type: 'Analytics' },
                        { name: 'preferences', provider: 'Minor Group', purpose: 'Store user preferences', duration: '6 months', type: 'Functional' },
                        { name: '_fbp', provider: 'Meta', purpose: 'Ad delivery', duration: '3 months', type: 'Marketing' },
                      ].map((cookie, index) => (
                        <tr key={index} className="hover:bg-sky-50">
                          <td className="px-4 py-2 text-sm text-sky-800 font-mono">{cookie.name}</td>
                          <td className="px-4 py-2 text-sm text-sky-700">{cookie.provider}</td>
                          <td className="px-4 py-2 text-sm text-sky-700">{cookie.purpose}</td>
                          <td className="px-4 py-2 text-sm text-sky-700">{cookie.duration}</td>
                          <td className="px-4 py-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              cookie.type === 'Essential' ? 'bg-sky-100 text-sky-700' :
                              cookie.type === 'Analytics' ? 'bg-green-100 text-green-700' :
                              cookie.type === 'Functional' ? 'bg-purple-100 text-purple-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {cookie.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-sky-400 mt-2">This list is not exhaustive and may be updated periodically.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">4</span>
                Third-Party Cookies
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Some cookies are placed by third-party services that appear on our pages:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Google Analytics:</span> Helps us analyze website traffic</li>
                  <li><span className="font-semibold">Meta/Facebook Pixel:</span> Enables targeted advertising</li>
                  <li><span className="font-semibold">LinkedIn Insight Tag:</span> Tracks conversions and retargeting</li>
                  <li><span className="font-semibold">Hotjar:</span> Provides heatmaps and user behavior analysis</li>
                </ul>
                <p>These third-party services have their own privacy and cookie policies. We recommend reviewing them for complete information.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">5</span>
                Cookie Consent
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>When you first visit our website, you will be shown a cookie banner asking for your consent to set non-essential cookies. By continuing to use our site after this notice, you consent to our use of cookies in accordance with this policy.</p>
                <p>You can change your cookie preferences at any time using our Cookie Preference Center above or by adjusting your browser settings.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">6</span>
                Managing Your Cookie Preferences
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>Most web browsers allow you to control cookies through their settings preferences. Here's how to manage cookies in popular browsers:</p>
                
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { browser: 'Google Chrome', link: 'https://support.google.com/chrome/answer/95647' },
                    { browser: 'Mozilla Firefox', link: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop' },
                    { browser: 'Safari', link: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                    { browser: 'Microsoft Edge', link: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                  ].map((browser, index) => (
                    <a 
                      key={index}
                      href={browser.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-sky-50 rounded-lg border border-sky-100 hover:bg-sky-100 transition-colors"
                    >
                      <span className="text-sm font-medium text-sky-800">{browser.browser}</span>
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">7</span>
                How to Disable Cookies
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>You can disable cookies by activating the setting on your browser that allows you to refuse all or some cookies. However, if you disable cookies, you may not be able to access all or parts of our website.</p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800 flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><span className="font-semibold">Important:</span> Disabling essential cookies may impact website functionality, such as the ability to log in or complete forms.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">8</span>
                Updates to This Policy
              </h2>
              <div className="ml-11 space-y-4 text-sky-700">
                <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any updates will be posted on this page with a revised "Last Updated" date.</p>
                <p>We encourage you to review this policy periodically to stay informed about our use of cookies.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">9</span>
                Contact Us
              </h2>
              <div className="ml-11 space-y-6 text-sky-700">
                <p>If you have any questions about our use of cookies, please contact us:</p>
                
                <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
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
          <div className="mt-12 p-6 bg-sky-50 rounded-xl border border-sky-100 text-center">
            <p className="text-sm text-sky-700">
              By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setCookiePreferences({
                    essential: true,
                    analytics: true,
                    functional: true,
                    marketing: true
                  })
                  savePreferences()
                }}
                className="inline-flex items-center gap-1 text-sm bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors"
              >
                Accept All Cookies
              </button>
              <Link 
                to="/privacy" 
                className="inline-flex items-center gap-1 text-sm border border-sky-300 text-sky-700 px-4 py-2 rounded-lg hover:bg-sky-100 transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}