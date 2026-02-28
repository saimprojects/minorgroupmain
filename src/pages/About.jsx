import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const coreValues = [
  {
    icon: '🏗️',
    title: 'Structure Over Chaos',
    desc: 'We believe every business deserves a clear, organized operational foundation.',
  },
  {
    icon: '🔍',
    title: 'Clarity Over Complexity',
    desc: 'We design systems that are powerful yet intuitive — no unnecessary complexity.',
  },
  {
    icon: '📈',
    title: 'Scalability Over Short-Term Fixes',
    desc: 'Every system we build is designed to grow alongside your business.',
  },
  {
    icon: '🧠',
    title: 'System Thinking Over Random Development',
    desc: 'We approach every project with a structured, strategic mindset.',
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About — Minor Group of Technologies'
  }, [])

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 border border-gray-700 px-3 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Built By Vision, Driven By Systems
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A technology company founded on the belief that structured systems create sustainable business growth.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Our Story"
                title="Founded on a Clear Vision"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Minor Group of Technologies was founded with a clear vision — to build structured digital infrastructure that helps businesses scale with confidence.
                </p>
                <p>
                  We believe systems create stability, and stability creates growth. From our first project to our growing portfolio, every solution we deliver is built with this philosophy at its core.
                </p>
                <p>
                  We are not a generic development agency. We are a product-focused technology company that treats every client engagement as an opportunity to design better business infrastructure.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                {[
                  { label: 'Founded', value: 'Pakistan' },
                  { label: 'Focus', value: 'SaaS & Business Systems' },
                  { label: 'Featured Product', value: 'TAM — Travel Agency Management' },
                  { label: 'Business Hours', value: 'Monday – Saturday' },
                  { label: 'Contact', value: 'saimpkf@gmail.com' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-sm font-semibold text-gray-400 w-32 flex-shrink-0">{item.label}</span>
                    <span className="text-sm text-gray-900 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Leadership"
            title="The Vision Behind the Company"
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Avatar */}
                <div className="bg-gray-900 flex flex-col items-center justify-center p-10 text-white">
                  <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4 border-4 border-gray-600">
                    <span className="text-3xl font-bold text-gray-300">MS</span>
                  </div>
                  <h3 className="text-lg font-bold text-center">Muhammad Saim</h3>
                  <p className="text-gray-400 text-sm text-center mt-1">Founder & CEO</p>
                  <div className="mt-4 flex flex-col items-center gap-1">
                    <span className="text-xs text-gray-500">Pakistan</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="md:col-span-2 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Muhammad Saim — Founder & CEO
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Muhammad Saim is a product-focused technology entrepreneur specializing in SaaS platforms, automation systems, and business infrastructure design. His focus is on building scalable systems that eliminate manual dependency and improve business clarity.
                  </p>
                  <blockquote className="border-l-4 border-gray-900 pl-4 py-2 bg-gray-50 rounded-r-lg">
                    <p className="text-gray-700 italic text-sm leading-relaxed">
                      "To build structured digital systems that reduce confusion, prevent profit leakage, and empower businesses to scale confidently."
                    </p>
                    <footer className="mt-2 text-xs text-gray-400 font-semibold">
                      — Muhammad Saim, Founder & CEO
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Core Values"
            title="Principles That Guide Every Decision"
            subtitle="These values are not just words — they are the foundation of how we design, build, and deliver every system."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let us build the digital infrastructure your business needs to grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="primary">
              Start a Project
            </Button>
            <Button to="/services" size="lg" variant="outline-white">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
