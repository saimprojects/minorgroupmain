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

// Stats data
const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '20+', label: 'Active Clients' },
  { value: '4+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

// Timeline data
const timeline = [
  { year: '2020', event: 'Minor Group of Technologies founded' },
  { year: '2021', event: 'First SaaS product launched' },
  { year: '2022', event: 'Expanded to 20+ clients' },
  { year: '2023', event: 'TAM system developed for travel agencies' },
  { year: '2024', event: 'Growing portfolio of digital systems' },
]

const founderImage = 'https://res.cloudinary.com/dxommxt6d/image/upload/v1767509276/Saim_smxepz.webp'

export default function About() {
  useEffect(() => {
    document.title = 'About — Minor Group of Technologies'
  }, [])

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
              <span className="text-white">About</span>
            </div>

            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-6 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
              Our Story
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Built By Vision, <span className="text-sky-200">Driven By Systems</span>
            </h1>
            
            <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              A technology company founded on the belief that structured systems create sustainable business growth.
            </p>

            {/* Stats preview */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-sky-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY - ENHANCED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="Our Story"
                title="Founded on a Clear Vision"
                align="left"
              />
              <div className="space-y-5 text-sky-700 leading-relaxed">
                <p className="text-lg">
                  Minor Group of Technologies was founded with a clear vision — to build structured digital infrastructure that helps businesses scale with confidence.
                </p>
                <p>
                  We believe systems create stability, and stability creates growth. From our first project to our growing portfolio, every solution we deliver is built with this philosophy at its core.
                </p>
                <p>
                  We are not a generic development agency. We are a product-focused technology company that treats every client engagement as an opportunity to design better business infrastructure.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-sky-900 mb-4">Our Journey</h3>
                <div className="space-y-3">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-sm font-bold text-sky-500 min-w-[60px]">{item.year}</span>
                      <div className="flex-1">
                        <div className="h-2 w-2 rounded-full bg-sky-500 mt-1.5 absolute ml-[-0.65rem]"></div>
                        <p className="text-sm text-sky-700">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Info Card - Enhanced */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100 shadow-xl">
              <h3 className="text-xl font-bold text-sky-900 mb-6">Company Snapshot</h3>
              <div className="space-y-5">
                {[
                  { label: '📍 Founded', value: 'Pakistan (2020)' },
                  { label: '🎯 Focus', value: 'SaaS & Business Systems' },
                  { label: '⭐ Featured Product', value: 'TAM — Travel Agency Management' },
                  { label: '🕒 Business Hours', value: 'Monday – Saturday (9AM-6PM)' },
                  { label: '📧 Contact', value: 'saimpkf@gmail.com' },
                  { label: '🤝 Client Base', value: 'Pakistan, UAE, USA' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-sky-100 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-sky-500 w-28 flex-shrink-0">{item.label}</span>
                    <span className="text-sm text-sky-900 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-sky-100 text-sky-700 rounded-full">ISO Standards</span>
                <span className="text-xs px-3 py-1 bg-sky-100 text-sky-700 rounded-full">Agile Methodology</span>
                <span className="text-xs px-3 py-1 bg-sky-100 text-sky-700 rounded-full">Client-First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER/CEO SECTION - COMPLETELY REDESIGNED with ACTUAL IMAGE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Leadership"
            title="The Vision Behind the Company"
            subtitle="Meet the founder dedicated to building systems that transform businesses"
          />

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-sky-100 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Founder Image Section */}
                <div className="bg-gradient-to-br from-sky-900 to-sky-800 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600 rounded-full filter blur-3xl opacity-30"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400 rounded-full filter blur-3xl opacity-20"></div>
                  
                  {/* Image Container */}
                  <div className="relative z-10">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-5 mx-auto">
                      <img
                        src={founderImage}
                        alt="Muhammad Saim - Founder & CEO"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/200x200?text=MS';
                        }}
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white text-center">Muhammad Saim</h3>
                    <p className="text-sky-200 text-center mt-1">Founder & Chief Executive Officer</p>
                    
                    <div className="flex justify-center gap-3 mt-4">
                      <span className="w-8 h-8 rounded-full bg-sky-700 flex items-center justify-center text-white hover:bg-sky-600 transition-colors cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">in</svg>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-sky-700 flex items-center justify-center text-white hover:bg-sky-600 transition-colors cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">f</svg>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-sky-700 flex items-center justify-center text-white hover:bg-sky-600 transition-colors cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">t</svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Founder Bio Section */}
                <div className="p-8 md:p-10 bg-white">
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-500">Visionary Leader</span>
                    <h3 className="text-2xl font-bold text-sky-900 mt-2">Muhammad Saim — Founder & CEO</h3>
                  </div>
                  
                  <div className="space-y-5 text-sky-700">
                    <p className="leading-relaxed">
                      Muhammad Saim is a product-focused technology entrepreneur specializing in SaaS platforms, automation systems, and business infrastructure design. His focus is on building scalable systems that eliminate manual dependency and improve business clarity.
                    </p>
                    
                    <p className="leading-relaxed">
                      With over 4 years of experience in software development and system architecture, Saim has helped 50+ businesses transform their operations through custom digital solutions. His approach combines technical excellence with deep business understanding.
                    </p>
                  </div>

                  {/* Mission Quote */}
                  <div className="mt-8 bg-sky-50 rounded-xl p-6 border-l-4 border-sky-500">
                    <p className="text-sky-800 italic text-base leading-relaxed">
                      "To build structured digital systems that reduce confusion, prevent profit leakage, and empower businesses to scale confidently."
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center text-sky-700 font-bold text-xs">
                        MS
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-sky-900">Muhammad Saim</span>
                        <span className="text-xs text-sky-500 block">Founder & CEO</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick facts */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="text-xs px-3 py-1.5 bg-sky-100 text-sky-700 rounded-full">🇵🇰 Pakistan</span>
                    <span className="text-xs px-3 py-1.5 bg-sky-100 text-sky-700 rounded-full">🎓 CS Graduate</span>
                    <span className="text-xs px-3 py-1.5 bg-sky-100 text-sky-700 rounded-full">💻 Full-Stack Expert</span>
                    <span className="text-xs px-3 py-1.5 bg-sky-100 text-sky-700 rounded-full">🚀 50+ Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES - ENHANCED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Core Values"
            title="Principles That Guide Every Decision"
            subtitle="These values are not just words — they are the foundation of how we design, build, and deliver every system."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="group bg-gradient-to-br from-white to-sky-50 rounded-xl p-6 border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-sky-900 mb-2">{value.title}</h3>
                <p className="text-sm text-sky-600 leading-relaxed">{value.desc}</p>
                
                {/* Decorative line on hover */}
                <div className="w-0 group-hover:w-12 h-0.5 bg-sky-500 mt-4 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM CULTURE SECTION - NEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Our Culture"
                title="Built by Developers, Driven by Purpose"
                align="left"
              />
              <p className="text-sky-700 text-lg mb-6">
                We're a team of passionate developers, designers, and strategists who believe in the power of well-built systems.
              </p>
              <ul className="space-y-3">
                {[
                  'Remote-first, global mindset',
                  'Continuous learning culture',
                  'Quality over quantity approach',
                  'Client success = our success',
                  'Innovation at every step'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sky-800">
                    <span className="w-5 h-5 rounded-full bg-sky-200 flex items-center justify-center text-sky-700 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '4+', label: 'Years of Excellence' },
                { number: '50+', label: 'Happy Clients' },
                { number: '100%', label: 'Project Delivery' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md border border-sky-100">
                  <div className="text-3xl font-bold text-sky-900 mb-1">{stat.number}</div>
                  <div className="text-xs text-sky-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - ENHANCED */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-900 to-sky-800 text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-6xl mb-6">🤝</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-sky-100 mb-8 text-lg max-w-2xl mx-auto">
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

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-sky-200">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">✓</svg>
              Free consultation
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">✓</svg>
              No obligation
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">✓</svg>
              Expert team
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}