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

export default function BusinessDashboardDevelopment() {
  useEffect(() => {
    document.title = 'Business Dashboard Development | Real-Time Analytics & Management | Minor Group'
  }, [])

  // Core dashboard features
  const dashboardFeatures = [
    {
      icon: '📦',
      title: 'Orders Management',
      items: [
        'Real-time order tracking',
        'Order status updates',
        'Customer order history',
        'Bulk order processing',
        'Order analytics & trends'
      ]
    },
    {
      icon: '📊',
      title: 'Inventory Tracking',
      items: [
        'Stock level monitoring',
        'Low stock alerts',
        'Product categories',
        'Supplier management',
        'Inventory forecasting'
      ]
    },
    {
      icon: '👥',
      title: 'Staff Management',
      items: [
        'Role-based permissions',
        'Staff performance tracking',
        'Attendance monitoring',
        'Task assignments',
        'Team communication'
      ]
    },
    {
      icon: '📈',
      title: 'Reporting & Analytics',
      items: [
        'Sales reports',
        'Revenue analytics',
        'Customer insights',
        'Performance metrics',
        'Custom report generation'
      ]
    },
    {
      icon: '🤝',
      title: 'CRM Integration',
      items: [
        'Customer database',
        'Interaction history',
        'Lead tracking',
        'Customer segmentation',
        'Communication logs'
      ]
    },
    {
      icon: '💰',
      title: 'Financial Overview',
      items: [
        'Revenue dashboard',
        'Expense tracking',
        'Profit calculations',
        'Invoice management',
        'Payment reconciliation'
      ]
    }
  ]

  // Dashboard types
  const dashboardTypes = [
    {
      title: 'Executive Dashboard',
      description: 'High-level overview for business owners and CEOs',
      features: ['KPI tracking', 'Revenue charts', 'Growth metrics', 'Team performance']
    },
    {
      title: 'Operations Dashboard',
      description: 'Daily operations management for managers',
      features: ['Order tracking', 'Inventory alerts', 'Staff schedule', 'Task management']
    },
    {
      title: 'Sales Dashboard',
      description: 'Sales team performance and pipeline tracking',
      features: ['Lead conversion', 'Sales targets', 'Team rankings', 'Commission tracking']
    },
    {
      title: 'Finance Dashboard',
      description: 'Financial health and accounting overview',
      features: ['Cash flow', 'Expense reports', 'Profit margins', 'Invoice status']
    }
  ]

  // Development phases
  const phases = [
    {
      phase: '01',
      title: 'Requirements Gathering',
      duration: '1-2 weeks',
      tasks: [
        'Understand business processes',
        'Identify key metrics',
        'Define user roles',
        'Map data sources',
        'Prioritize features'
      ]
    },
    {
      phase: '02',
      title: 'Dashboard Design',
      duration: '2-3 weeks',
      tasks: [
        'Wireframe creation',
        'UI/UX design',
        'Data visualization planning',
        'Interactive prototypes',
        'User feedback'
      ]
    },
    {
      phase: '03',
      title: 'Development',
      duration: '4-6 weeks',
      tasks: [
        'Database architecture',
        'API development',
        'Frontend implementation',
        'Real-time updates',
        'Integration with existing systems'
      ]
    },
    {
      phase: '04',
      title: 'Testing & Deployment',
      duration: '2-3 weeks',
      tasks: [
        'QA testing',
        'Performance optimization',
        'User training',
        'Documentation',
        'Go-live support'
      ]
    }
  ]

  // Tech stack
  const techStack = [
    {
      category: 'Frontend',
      tools: ['React.js', 'Next.js', 'Vue.js', 'TailwindCSS', 'Chart.js/D3.js'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      tools: ['Node.js', 'Python/Django', 'Ruby on Rails', 'PHP/Laravel', 'GraphQL'],
      icon: '⚙️'
    },
    {
      category: 'Database',
      tools: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis'],
      icon: '🗄️'
    },
    {
      category: 'Real-time',
      tools: ['WebSockets', 'Socket.io', 'Pusher', 'Firebase Realtime', 'Server-Sent Events'],
      icon: '⚡'
    }
  ]

  // Business benefits
  const benefits = [
    {
      value: '40%',
      label: 'Time Savings',
      desc: 'Reduce manual reporting time'
    },
    {
      value: '100%',
      label: 'Data Visibility',
      desc: 'Complete business transparency'
    },
    {
      value: '24/7',
      label: 'Real-time Access',
      desc: 'Monitor from anywhere'
    },
    {
      value: '50%',
      label: 'Better Decisions',
      desc: 'Data-driven insights'
    }
  ]

  // Sample metrics
  const sampleMetrics = [
    { name: 'Total Revenue', value: '$124,592', change: '+12.5%', trend: 'up' },
    { name: 'Orders', value: '1,284', change: '+8.2%', trend: 'up' },
    { name: 'Customers', value: '892', change: '+15.3%', trend: 'up' },
    { name: 'Avg. Order Value', value: '$97', change: '+4.1%', trend: 'up' }
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
              <span className="text-white">Business Dashboard Development</span>
            </div>

            {/* Service badge */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-6 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
              📊 Centralize Your Operations
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Business Dashboard Development – Centralize Your Operations into One Powerful Dashboard
            </h1>

            <p className="text-xl text-sky-100 leading-relaxed mb-8 max-w-3xl">
              Transform scattered data into actionable insights. We build custom dashboards that 
              integrate orders, inventory, staff, and finances into a single, real-time control center.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" variant="primary">
                Build Your Dashboard
              </Button>
              <Button to="/contact" size="lg" variant="outline-white">
                See Live Demo
              </Button>
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-sky-200">
              <span className="flex items-center gap-1">
                <CheckIcon /> Real-time Updates
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Custom Metrics
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Role-based Access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS A BUSINESS DASHBOARD */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Overview"
                title="What is a Business Dashboard?"
                align="left"
              />
              <p className="text-lg text-sky-700 mb-6 leading-relaxed">
                A business dashboard is a centralized platform that visualizes your key metrics, 
                tracks performance, and gives you complete control over your operations.
              </p>
              <p className="text-sky-600 mb-8">
                Instead of juggling multiple spreadsheets and software, get a unified view of 
                your entire business with real-time data and actionable insights.
              </p>

              {/* Key benefits list */}
              <div className="space-y-3">
                {[
                  'Single source of truth for all business data',
                  'Make faster, data-driven decisions',
                  'Identify trends and opportunities instantly',
                  'Reduce manual reporting work by 40%',
                  'Improve team coordination and accountability'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sky-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Dashboard Preview */}
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-200 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-sky-900">Live Dashboard Preview</h3>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Live Data
                </span>
              </div>
              
              {/* Sample metrics grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {sampleMetrics.map((metric, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 border border-sky-100">
                    <div className="text-xs text-sky-500">{metric.name}</div>
                    <div className="text-lg font-bold text-sky-900">{metric.value}</div>
                    <div className={`text-xs ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change} ↑
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-white rounded-lg p-3 border border-sky-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-sky-700">Weekly Revenue</span>
                  <span className="text-xs text-sky-500">+15.3%</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[65, 45, 80, 55, 70, 85, 60].map((height, i) => (
                    <div key={i} className="flex-1 bg-sky-500 rounded-t-sm" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-1 text-xs text-sky-400">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE DASHBOARD FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Powerful Features"
            title="Complete Business Management Suite"
            subtitle="Everything you need to run your business from one dashboard"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardFeatures.map((feature, index) => (
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

      {/* DASHBOARD TYPES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Role-Based Dashboards"
            title="Custom Views for Every Team Member"
            subtitle="Different perspectives for different roles, all from the same data"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardTypes.map((type, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-6 border border-sky-100 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-sky-900 mb-2">{type.title}</h3>
                <p className="text-sm text-sky-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-sky-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-sky-600 bg-sky-50 p-4 rounded-xl">
            <span className="font-semibold">Plus:</span> Custom roles can be created based on your organizational structure
          </div>
        </div>
      </section>

      {/* INTEGRATION CAPABILITIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Seamless Integration"
                title="Connect with Your Existing Tools"
                align="left"
              />
              <p className="text-sky-700 mb-6">
                Your dashboard doesn't work in isolation. We integrate with the tools you already use:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  'Shopify / WooCommerce',
                  'QuickBooks / Xero',
                  'Salesforce / HubSpot',
                  'Slack / Teams',
                  'Google Analytics',
                  'Custom APIs',
                  'Excel / CSV imports',
                  'POS Systems'
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-sky-800 bg-white p-2 rounded-lg border border-sky-100">
                    <CheckIcon />
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-sky-100">Integration Benefits</h3>
              <ul className="space-y-4">
                {[
                  'No more manual data entry',
                  'Real-time sync across platforms',
                  'Centralized data warehouse',
                  'Consistent reporting',
                  'Automated workflows'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sky-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Process"
            title="How We Build Your Dashboard"
            subtitle="Structured approach from concept to launch"
          />

          <div className="grid lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
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
            title="Modern Tech for Real-Time Dashboards"
            subtitle="Built with performance and scalability in mind"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-sky-100 shadow-md hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{stack.icon}</div>
                <h3 className="text-lg font-bold text-sky-900 mb-3">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-sky-50 text-sky-700 rounded-full border border-sky-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="ROI & Benefits"
            title="What You Gain with a Custom Dashboard"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-sky-900 mb-2">{benefit.value}</div>
                <div className="text-sm font-semibold text-sky-800 mb-1">{benefit.label}</div>
                <div className="text-xs text-sky-600">{benefit.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-sky-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-sky-900 mb-3">Before Dashboard</h3>
              <ul className="space-y-2">
                {[
                  'Multiple spreadsheets to maintain',
                  'Manual data entry & consolidation',
                  'Delayed reporting (weekly/monthly)',
                  'Data silos between departments',
                  'Difficult to spot trends'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-sky-700">
                    <span className="text-red-400">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sky-900 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold text-sky-100 mb-3">After Dashboard</h3>
              <ul className="space-y-2">
                {[
                  'Single source of truth',
                  'Automated real-time updates',
                  'Instant insights anytime',
                  'Cross-department visibility',
                  'Data-driven decisions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-sky-100">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES / EXAMPLES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Success Stories"
            title="Dashboards We've Built"
            subtitle="Real solutions for real businesses"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: 'Retail Chain',
                challenge: '5 stores, disconnected inventory',
                solution: 'Centralized inventory & sales dashboard',
                result: '30% reduction in stockouts'
              },
              {
                industry: 'Logistics Company',
                challenge: 'Manual tracking of 50+ vehicles',
                solution: 'Fleet management dashboard',
                result: '25% improvement in delivery times'
              },
              {
                industry: 'E-commerce Brand',
                challenge: 'Scattered order & customer data',
                solution: 'Unified sales & CRM dashboard',
                result: '40% faster order processing'
              }
            ].map((case_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-sky-100 shadow-md hover:shadow-lg transition-all">
                <div className="text-sm font-semibold text-sky-500 mb-2">{case_.industry}</div>
                <div className="text-sm text-sky-700 mb-3">
                  <span className="font-medium">Challenge:</span> {case_.challenge}
                </div>
                <div className="text-sm text-sky-700 mb-3">
                  <span className="font-medium">Solution:</span> {case_.solution}
                </div>
                <div className="text-sm font-semibold text-green-600">{case_.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="FAQ"
            title="Common Questions About Business Dashboards"
          />

          <div className="space-y-4">
            {[
              {
                q: "Can I access my dashboard on mobile?",
                a: "Yes! All our dashboards are fully responsive and work seamlessly on phones and tablets."
              },
              {
                q: "How long does it take to build a dashboard?",
                a: "Typically 6-10 weeks depending on complexity and number of integrations."
              },
              {
                q: "Can you integrate with my existing software?",
                a: "Absolutely. We can connect with virtually any system that has an API."
              },
              {
                q: "Do I need to replace my current systems?",
                a: "No, your dashboard will sit on top of existing systems, pulling data from all sources."
              },
              {
                q: "Can we add more features later?",
                a: "Yes, dashboards are built to be extensible. You can always add new metrics and features."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-sky-50 rounded-xl p-6 border border-sky-100">
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
          <div className="text-6xl mb-6">📊</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Centralize Your Business Operations?
          </h2>
          <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
            Let's build a custom dashboard that gives you complete visibility and control over your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="primary">
              Start Your Dashboard
            </Button>
            <Button to="/contact" size="lg" variant="outline-white">
              Schedule a Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-sky-200">
            <span className="flex items-center gap-1">
              <CheckIcon /> Free consultation
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> Custom quote
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> 100% ownership
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}