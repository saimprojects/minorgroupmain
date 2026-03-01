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

export default function AutomationSystemIntegration() {
  useEffect(() => {
    document.title = 'Automation & System Integration | Workflow Automation | Minor Group'
  }, [])

  // Automation types
  const automationTypes = [
    {
      icon: '📧',
      title: 'Email Notifications',
      description: 'Automated email triggers based on system events',
      items: [
        'Welcome emails for new users',
        'Order confirmation notifications',
        'Payment receipt alerts',
        'Status update emails',
        'Reminder & follow-up sequences'
      ]
    },
    {
      icon: '⚡',
      title: 'Workflow Triggers',
      description: 'Event-based automation that kicks off processes',
      items: [
        'When X happens, do Y automatically',
        'Conditional logic branches',
        'Time-based triggers',
        'Webhook integrations',
        'API call chains'
      ]
    },
    {
      icon: '📊',
      title: 'Performance Tracking',
      description: 'Automated monitoring and reporting',
      items: [
        'System health checks',
        'Error alerting',
        'Usage analytics',
        'Performance metrics',
        'Automated report generation'
      ]
    },
    {
      icon: '🔄',
      title: 'Data Centralization',
      description: 'Sync data across multiple platforms',
      items: [
        'CRM integration',
        'Accounting software sync',
        'E-commerce platform connection',
        'Marketing tool integration',
        'Central data warehouse'
      ]
    },
    {
      icon: '🔐',
      title: 'Role Permissions',
      description: 'Automated access control workflows',
      items: [
        'Role-based access automation',
        'Permission inheritance',
        'Approval workflows',
        'Audit logging',
        'Compliance automation'
      ]
    },
    {
      icon: '🤖',
      title: 'Business Process Automation',
      description: 'End-to-end process automation',
      items: [
        'Invoice processing',
        'Order fulfillment',
        'Customer onboarding',
        'Ticket routing',
        'Approval chains'
      ]
    }
  ]

  // Integration categories
  const integrationCategories = [
    {
      category: 'CRM Systems',
      tools: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Pipedrive', 'Custom CRM'],
      icon: '🤝'
    },
    {
      category: 'Accounting & Finance',
      tools: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Invoice processing'],
      icon: '💰'
    },
    {
      category: 'E-commerce',
      tools: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Custom carts'],
      icon: '🛍️'
    },
    {
      category: 'Communication',
      tools: ['Slack', 'Microsoft Teams', 'Twilio SMS', 'Email APIs', 'WhatsApp'],
      icon: '💬'
    },
    {
      category: 'Marketing',
      tools: ['Mailchimp', 'Klaviyo', 'Google Analytics', 'Facebook Pixel', 'HubSpot'],
      icon: '📢'
    },
    {
      category: 'Productivity',
      tools: ['Zapier', 'Make (Integromat)', 'n8n', 'Custom APIs', 'Webhooks'],
      icon: '⚙️'
    }
  ]

  // Development phases
  const phases = [
    {
      phase: '01',
      title: 'Process Audit',
      duration: '1-2 weeks',
      tasks: [
        'Map current workflows',
        'Identify manual tasks',
        'Find automation opportunities',
        'Document business rules',
        'Prioritize automation targets'
      ]
    },
    {
      phase: '02',
      title: 'Solution Design',
      duration: '2-3 weeks',
      tasks: [
        'Design automation logic',
        'Plan integration architecture',
        'Select tools/platforms',
        'Create workflow diagrams',
        'Define success metrics'
      ]
    },
    {
      phase: '03',
      title: 'Development',
      duration: '4-8 weeks',
      tasks: [
        'Build automation workflows',
        'Develop API integrations',
        'Implement triggers',
        'Create error handling',
        'Set up monitoring'
      ]
    },
    {
      phase: '04',
      title: 'Testing & Deployment',
      duration: '2-3 weeks',
      tasks: [
        'Test all scenarios',
        'Validate data accuracy',
        'Staff training',
        'Documentation',
        'Go-live & monitoring'
      ]
    }
  ]

  // Business benefits
  const benefits = [
    {
      value: '40%',
      label: 'Time Saved',
      desc: 'Eliminate manual repetitive tasks'
    },
    {
      value: '0',
      label: 'Human Errors',
      desc: 'Automated processes dont make mistakes'
    },
    {
      value: '24/7',
      label: 'Continuous Operation',
      desc: 'Automation works around the clock'
    },
    {
      value: '3x',
      label: 'Faster Processing',
      desc: 'Tasks completed in minutes, not hours'
    }
  ]

  // Automation examples
  const automationExamples = [
    {
      scenario: 'Order Processing',
      before: 'Manually enter orders from email to system',
      after: 'Orders auto-create in system, inventory updates, customer notified',
      savings: '2 hours/day'
    },
    {
      scenario: 'Invoice Generation',
      before: 'Create invoices manually, email to clients',
      after: 'Invoices auto-generated and sent when order is complete',
      savings: '5 hours/week'
    },
    {
      scenario: 'Lead Management',
      before: 'Leads sit in email, follow-ups missed',
      after: 'Leads auto-added to CRM, assigned to sales, follow-up emails scheduled',
      savings: '30% more conversions'
    },
    {
      scenario: 'Report Generation',
      before: 'Weekly manual data compilation in Excel',
      after: 'Automated reports delivered to inbox every Monday morning',
      savings: '4 hours/week'
    }
  ]

  // Integration patterns
  const patterns = [
    {
      name: 'Point-to-Point',
      description: 'Direct integration between two systems',
      useCase: 'Simple, specific connections'
    },
    {
      name: 'Middleware',
      description: 'Central hub connecting multiple systems',
      useCase: 'Complex multi-system environments'
    },
    {
      name: 'API-led',
      description: 'Reusable API interfaces',
      useCase: 'Scalable, future-proof architecture'
    },
    {
      name: 'Event-driven',
      description: 'Real-time event triggers',
      useCase: 'Immediate response requirements'
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
              <span className="text-white">Automation & System Integration</span>
            </div>

            {/* Service badge */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-6 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
              ⚙️ Eliminate Manual Work
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automation & System Integration – Eliminate Manual Work with Structured Automation Pipelines
            </h1>

            <p className="text-xl text-sky-100 leading-relaxed mb-8 max-w-3xl">
              Stop doing repetitive tasks manually. We build automation workflows that connect your tools, 
              sync data automatically, and free your team to focus on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" variant="primary">
                Automate Your Workflows
              </Button>
              <Button to="/contact" size="lg" variant="outline-white">
                Get Free Assessment
              </Button>
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-sky-200">
              <span className="flex items-center gap-1">
                <CheckIcon /> Eliminate Manual Work
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Connect All Systems
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Real-time Sync
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM WITH MANUAL WORK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="The Problem"
                title="Manual Work is Killing Your Productivity"
                align="left"
              />
              <p className="text-lg text-sky-700 mb-6 leading-relaxed">
                Every time your team manually copies data between systems, sends repetitive emails, 
                or compiles reports by hand, you're losing time and introducing errors.
              </p>
              
              <div className="space-y-4">
                {[
                  { stat: '30%', desc: 'of work hours spent on repetitive tasks' },
                  { stat: '40%', desc: 'higher error rate with manual data entry' },
                  { stat: '20+', desc: 'hours per week wasted on manual processes' },
                  { stat: '50%', desc: 'of employees feel manual work hurts morale' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-sky-50 rounded-lg">
                    <span className="text-2xl font-bold text-sky-900 min-w-[60px]">{item.stat}</span>
                    <span className="text-sm text-sky-700">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After comparison */}
            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center text-red-700">✕</span>
                  Before Automation
                </h3>
                <ul className="space-y-2">
                  {[
                    'Manual data entry across systems',
                    'Repetitive email sending',
                    'Spreadsheet-based tracking',
                    'Delayed reporting',
                    'Human errors and inconsistencies'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-red-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700">✓</span>
                  After Automation
                </h3>
                <ul className="space-y-2">
                  {[
                    'Automatic data sync between systems',
                    'Trigger-based email automation',
                    'Real-time centralized data',
                    'Instant reports on demand',
                    'Zero manual errors'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-green-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS STATS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md border border-sky-100">
                <div className="text-3xl font-bold text-sky-900 mb-2">{benefit.value}</div>
                <div className="text-sm font-semibold text-sky-800 mb-1">{benefit.label}</div>
                <div className="text-xs text-sky-600">{benefit.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION TYPES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="What We Automate"
            title="Comprehensive Automation Solutions"
            subtitle="From simple triggers to complex multi-system workflows"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationTypes.map((type, index) => (
              <Card
                key={index}
                icon={type.icon}
                title={type.title}
                description={type.description}
                items={type.items}
                variant="bordered"
                className="h-full hover:border-sky-500 transition-all hover:shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION ECOSYSTEM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Integration Ecosystem"
            title="Connect All Your Business Tools"
            subtitle="We integrate with virtually any system that has an API"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-sky-100 shadow-md hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-sky-900 mb-3">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-sky-50 text-sky-700 rounded-full border border-sky-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-sky-600 bg-white p-4 rounded-xl shadow-sm">
            <span className="font-semibold">Can't find your tool?</span> We build custom integrations for any system with an API.
          </div>
        </div>
      </section>

      {/* REAL-WORLD EXAMPLES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Real Examples"
            title="Automation That Transforms Businesses"
            subtitle="See how automation saves time and eliminates errors"
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {automationExamples.map((example, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-6 border border-sky-100 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-sky-900">{example.scenario}</h3>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    Save {example.savings}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-red-200">
                    <div className="text-xs font-semibold text-red-600 mb-1">Before</div>
                    <p className="text-xs text-sky-700">{example.before}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="text-xs font-semibold text-green-600 mb-1">After</div>
                    <p className="text-xs text-sky-700">{example.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION PATTERNS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Integration Architecture"
            title="Choosing the Right Integration Pattern"
            subtitle="We select the best approach for your specific needs"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patterns.map((pattern, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-sky-100 shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-sky-900 mb-2">{pattern.name}</h3>
                <p className="text-sm text-sky-600 mb-3">{pattern.description}</p>
                <p className="text-xs text-sky-500">
                  <span className="font-semibold">Best for:</span> {pattern.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Process"
            title="How We Build Your Automation"
            subtitle="Structured approach to identifying and implementing automation"
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
            label="Technology"
            title="Tools We Use for Automation"
            subtitle="Modern stack for reliable, scalable automation"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Automation Platforms',
                tools: ['Zapier', 'Make (Integromat)', 'n8n', 'Workato', 'Custom Scripts'],
                icon: '🤖'
              },
              {
                category: 'API Management',
                tools: ['REST APIs', 'GraphQL', 'Webhooks', 'API Gateway', 'Postman'],
                icon: '🔌'
              },
              {
                category: 'Message Queues',
                tools: ['RabbitMQ', 'Apache Kafka', 'Redis', 'AWS SQS', 'Bull'],
                icon: '📨'
              },
              {
                category: 'Monitoring',
                tools: ['DataDog', 'New Relic', 'Sentry', 'LogDNA', 'Custom Alerts'],
                icon: '📊'
              }
            ].map((stack, index) => (
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

      {/* ROI CALCULATOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="ROI Calculator"
                title="Calculate Your Automation Savings"
                align="left"
              />
              <p className="text-sky-700 mb-6">
                See how much time and money automation can save your business.
              </p>

              <div className="space-y-4">
                {[
                  { task: 'Data entry', hours: 10, cost: '$150' },
                  { task: 'Report generation', hours: 4, cost: '$60' },
                  { task: 'Email follow-ups', hours: 8, cost: '$120' },
                  { task: 'Order processing', hours: 12, cost: '$180' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                    <span className="text-sm font-medium text-sky-800">{item.task}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-sky-600">{item.hours} hrs/week</span>
                      <span className="text-sm font-bold text-sky-900">{item.cost}/week</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-sky-900 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Potential Weekly Savings:</span>
                  <span className="text-2xl font-bold">$510+</span>
                </div>
                <p className="text-xs text-sky-200 mt-2">
                  *Based on 34 hours of manual work at $15/hour
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-sky-100">Long-term Impact</h3>
              <ul className="space-y-4">
                {[
                  { value: '10,000+', label: 'Hours saved annually' },
                  { value: '0', label: 'Data entry errors' },
                  { value: '24/7', label: 'Processes running' },
                  { value: '100%', label: 'Consistent execution' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-sky-300 min-w-[80px]">{item.value}</span>
                    <span className="text-sm text-sky-100">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="FAQ"
            title="Common Questions About Automation & Integration"
          />

          <div className="space-y-4">
            {[
              {
                q: "What processes can be automated?",
                a: "Almost any repetitive task: data entry, email notifications, report generation, order processing, lead management, and more."
              },
              {
                q: "Do I need to replace my existing software?",
                a: "No, automation works with your existing tools. We connect them together."
              },
              {
                q: "How long does automation take to implement?",
                a: "Simple automations take 1-2 weeks, complex multi-system integrations take 4-8 weeks."
              },
              {
                q: "Is automation expensive?",
                a: "Automation pays for itself quickly through time savings and error reduction. We'll help you prioritize high-ROI automations first."
              },
              {
                q: "Can automation handle complex business rules?",
                a: "Yes, we can implement conditional logic, approval chains, and multi-step workflows."
              },
              {
                q: "What if something goes wrong?",
                a: "We build error handling and monitoring into every automation. You'll be alerted if anything fails."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-sky-100">
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
          <div className="text-6xl mb-6">⚙️</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Eliminate Manual Work?
          </h2>
          <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
            Let's identify automation opportunities in your business and build workflows that save time, eliminate errors, and scale with you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="primary">
              Start Your Automation Journey
            </Button>
            <Button to="/contact" size="lg" variant="outline-white">
              Get Free Assessment
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-sky-200">
            <span className="flex items-center gap-1">
              <CheckIcon /> Free consultation
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> Custom solutions
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> 100% ownership
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> Ongoing support
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}