import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button.jsx'
import SectionTitle from '../../components/SectionTitle.jsx'
import Card from '../../components/Card.jsx'

// Custom Icons
const CheckIcon = () => (
  <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default function SaaSMVPDevelopment() {
  useEffect(() => {
    document.title = 'SaaS MVP Development | From Idea to Scalable Product | Minor Group'
  }, [])

  // Core features data
  const coreFeatures = [
    {
      icon: '🔐',
      title: 'User Authentication & Security',
      items: [
        'Multi-role authentication',
        'Social login integration',
        'JWT token-based security',
        'Password recovery flows',
        'Session management'
      ]
    },
    {
      icon: '📊',
      title: 'Dashboard & Analytics',
      items: [
        'Role-based dashboards',
        'Real-time analytics',
        'Data visualization',
        'Custom reporting',
        'User activity tracking'
      ]
    },
    {
      icon: '💳',
      title: 'Payment Integration',
      items: [
        'Stripe/PayPal integration',
        'Subscription management',
        'Invoice generation',
        'Payment history',
        'Refund handling'
      ]
    },
    {
      icon: '📱',
      title: 'Responsive Frontend',
      items: [
        'Mobile-first design',
        'Progressive Web App',
        'Fast loading times',
        'Smooth animations',
        'Cross-browser support'
      ]
    },
    {
      icon: '⚙️',
      title: 'Admin Panel',
      items: [
        'User management',
        'Content moderation',
        'System settings',
        'Analytics overview',
        'Role assignments'
      ]
    },
    {
      icon: '🚀',
      title: 'Scalable Architecture',
      items: [
        'Microservices ready',
        'Database optimization',
        'Caching strategies',
        'Load balancing',
        'Future expansion'
      ]
    }
  ]

  // Development phases
  const phases = [
    {
      phase: '01',
      title: 'Discovery & Planning',
      duration: '1-2 weeks',
      tasks: [
        'Market research & competitor analysis',
        'User persona definition',
        'Core feature prioritization',
        'Tech stack selection',
        'MVP scope finalization'
      ]
    },
    {
      phase: '02',
      title: 'Design & Prototyping',
      duration: '2-3 weeks',
      tasks: [
        'Wireframing & user flows',
        'UI/UX design',
        'Interactive prototypes',
        'Design system creation',
        'User feedback incorporation'
      ]
    },
    {
      phase: '03',
      title: 'Development Sprint',
      duration: '4-8 weeks',
      tasks: [
        'Agile development process',
        'Weekly progress updates',
        'Database architecture',
        'API development',
        'Frontend implementation'
      ]
    },
    {
      phase: '04',
      title: 'Testing & Launch',
      duration: '2-3 weeks',
      tasks: [
        'QA testing & bug fixes',
        'Performance optimization',
        'Security auditing',
        'Beta testing',
        'Production deployment'
      ]
    }
  ]

  // Tech stack options
  const techStacks = [
    {
      category: 'Frontend',
      options: ['React.js', 'Next.js', 'Vue.js', 'TailwindCSS', 'TypeScript'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      options: ['Node.js', 'Python/Django', 'Ruby on Rails', 'PHP/Laravel', 'Go'],
      icon: '⚙️'
    },
    {
      category: 'Database',
      options: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis'],
      icon: '🗄️'
    },
    {
      category: 'DevOps',
      options: ['AWS', 'Google Cloud', 'Docker', 'CI/CD', 'Vercel/Netlify'],
      icon: '☁️'
    }
  ]

  // Success metrics
  const metrics = [
    { value: '2-3', label: 'Months to MVP', desc: 'Fast time-to-market' },
    { value: '60%', label: 'Cost Reduction', desc: 'vs. traditional development' },
    { value: '100%', label: 'Ownership', desc: 'Full code ownership' },
    { value: '∞', label: 'Scalability', desc: 'Built for growth' }
  ]

  // Sample MVPs built
  const sampleMVPs = [
    {
      name: 'Booking Platform',
      description: 'Marketplace for service providers',
      features: ['User listings', 'Booking system', 'Payment integration']
    },
    {
      name: 'Analytics Dashboard',
      description: 'Real-time business intelligence',
      features: ['Data visualization', 'Custom reports', 'Alert system']
    },
    {
      name: 'Subscription App',
      description: 'Recurring billing platform',
      features: ['Plan management', 'Stripe integration', 'Customer portal']
    }
  ]

  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 text-white overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-sky-200 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">SaaS MVP Development</span>
            </div>

            {/* Product badge */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-6 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
              ☁️ From Idea to Launch
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              SaaS MVP Development – Turn Your Idea Into a Scalable Product
            </h1>

            <p className="text-xl text-sky-100 leading-relaxed mb-8 max-w-3xl">
              From concept to a fully functional, scalable SaaS product. We build MVPs that 
              validate your idea, attract investors, and grow with your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" variant="primary">
                Start Your MVP Journey
              </Button>
              <Button to="/contact" size="lg" variant="outline-white">
                Get Free Consultation
              </Button>
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-sky-200">
              <span className="flex items-center gap-1">
                <CheckIcon /> 2-3 Months to Launch
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Investor-Ready
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Scalable Architecture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SaaS MVP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Understanding MVP"
                title="What is a SaaS MVP?"
                align="left"
              />
              <p className="text-lg text-sky-700 mb-6 leading-relaxed">
                A Minimum Viable Product (MVP) is the simplest version of your product that 
                delivers core value to early users while validating your business idea.
              </p>
              <p className="text-sky-600 mb-8">
                Instead of building everything at once, we focus on core features that solve 
                the main problem, saving you time and money while gathering real user feedback.
              </p>

              {/* Key principles */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Core functionality only',
                  'Fast time-to-market',
                  'User feedback driven',
                  'Cost-effective',
                  'Investor-ready',
                  'Scalable foundation'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-sky-800">
                    <span className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats box */}
            <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-sky-100">Why Start with an MVP?</h3>
              <div className="space-y-4">
                {[
                  { stat: '70%', desc: 'faster time-to-market' },
                  { stat: '50%', desc: 'lower initial investment' },
                  { stat: '90%', desc: 'better product-market fit' },
                  { stat: '3x', desc: 'higher chance of funding' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-sky-800/50 rounded-lg">
                    <span className="text-2xl font-bold text-sky-300">{item.stat}</span>
                    <span className="text-sm text-sky-100">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="MVP Core Components"
            title="Essential Features for Your SaaS MVP"
            subtitle="Everything you need to launch and validate your product"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                items={feature.items}
                variant="bordered"
                className="h-full hover:border-sky-500 transition-all hover:shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Process"
            title="From Idea to Launch in 4 Phases"
            subtitle="Structured, transparent development methodology"
          />

          <div className="grid lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector line (except last) */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-sky-200 -z-10"></div>
                )}
                
                <div className="bg-white rounded-xl p-6 border-2 border-sky-100 shadow-lg hover:border-sky-500 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-sky-200">{phase.phase}</span>
                    <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-sky-900 mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-sky-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Technology Stack"
            title="Modern Tech Stack for Your MVP"
            subtitle="We choose the best tools for your specific needs"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-sky-100 shadow-md hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{stack.icon}</div>
                <h3 className="text-lg font-bold text-sky-900 mb-3">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.options.map((option, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-sky-50 text-sky-700 rounded-full border border-sky-200">
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Flexibility note */}
          <div className="mt-8 text-center text-sm text-sky-600 bg-white p-4 rounded-xl shadow-sm">
            <span className="font-semibold">Tech-agnostic approach:</span> We recommend the best stack for your specific use case, timeline, and budget.
          </div>
        </div>
      </section>

      {/* SUCCESS METRICS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Why Choose Us"
                title="We Build MVPs That Succeed"
                align="left"
              />
              <p className="text-sky-700 mb-8">
                Our MVPs are designed not just to launch, but to attract investors, 
                acquire early users, and scale into full-fledged products.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, i) => (
                  <div key={i} className="bg-sky-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-sky-900">{metric.value}</div>
                    <div className="text-sm font-semibold text-sky-800">{metric.label}</div>
                    <div className="text-xs text-sky-600 mt-1">{metric.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample MVPs */}
            <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-sky-100">Sample MVPs We've Built</h3>
              <div className="space-y-4">
                {sampleMVPs.map((mvp, i) => (
                  <div key={i} className="bg-sky-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">{mvp.name}</h4>
                    <p className="text-sm text-sky-200 mb-2">{mvp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {mvp.features.map((feature, j) => (
                        <span key={j} className="text-xs px-2 py-0.5 bg-sky-700 text-sky-100 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="FAQ"
            title="Common Questions About SaaS MVPs"
          />

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to build an MVP?",
                a: "Typically 2-3 months from concept to launch, depending on complexity and feature set."
              },
              {
                q: "How much does an MVP cost?",
                a: "MVP costs vary based on features. We'll work with your budget to build the most valuable core features first."
              },
              {
                q: "Can I add more features later?",
                a: "Absolutely! MVPs are designed to be scalable. We build with future expansion in mind."
              },
              {
                q: "Do I own the code?",
                a: "Yes, you get 100% ownership of all code, designs, and intellectual property."
              },
              {
                q: "What if my idea changes during development?",
                a: "Our agile process accommodates changes. We prioritize flexibility while maintaining timelines."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-sky-100 shadow-sm">
                <h3 className="text-lg font-semibold text-sky-900 mb-2">{faq.q}</h3>
                <p className="text-sky-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-900 to-sky-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-6xl mb-6">☁️</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Launch Your SaaS MVP?
          </h2>
          <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
            Let's turn your idea into a scalable product. Book a free consultation 
            and we'll help you plan your MVP journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="primary">
              Start Your MVP
            </Button>
            <Button to="/contact" size="lg" variant="outline-white">
              Get Free Consultation
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-sky-200">
            <span className="flex items-center gap-1">
              <CheckIcon /> No obligation
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> 30-min strategy call
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> Expert advice
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}