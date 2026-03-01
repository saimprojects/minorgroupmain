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

export default function CompanyWebsiteDevelopment() {
  useEffect(() => {
    document.title = 'Company Website Development | Professional Business Websites | Minor Group'
  }, [])

  // Website types
  const websiteTypes = [
    {
      icon: '🏢',
      title: 'Corporate Website',
      description: 'Professional brand presence for established businesses',
      features: [
        'Company profile & history',
        'Team introduction',
        'Services showcase',
        'Testimonials & case studies',
        'Contact & location'
      ]
    },
    {
      icon: '🚀',
      title: 'Startup Landing Page',
      description: 'High-conversion pages for new ventures',
      features: [
        'Product/Service pitch',
        'Feature highlights',
        'Waitlist/Email capture',
        'Investor information',
        'Demo requests'
      ]
    },
    {
      icon: '🛍️',
      title: 'Product Showcase',
      description: 'Portfolio-focused websites for products',
      features: [
        'Product catalog',
        'High-quality imagery',
        'Specifications',
        'Pricing information',
        'Inquiry forms'
      ]
    },
    {
      icon: '📰',
      title: 'Blog/Content Website',
      description: 'Content-driven platforms for thought leadership',
      features: [
        'Blog post management',
        'Category organization',
        'Search functionality',
        'Newsletter integration',
        'Social sharing'
      ]
    },
    {
      icon: '🔧',
      title: 'Service Provider',
      description: 'Websites for agencies, consultants, and professionals',
      features: [
        'Service packages',
        'Booking/Appointment system',
        'Portfolio gallery',
        'Client testimonials',
        'Quote requests'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile-Responsive',
      description: 'All websites are fully responsive across devices',
      features: [
        'Mobile-first design',
        'Tablet optimized',
        'Fast loading on all devices',
        'Touch-friendly navigation',
        'Cross-browser compatible'
      ]
    }
  ]

  // Key features
  const keyFeatures = [
    {
      icon: '🎨',
      title: 'Custom Design',
      description: 'Unique, brand-aligned design that stands out from templates',
      items: [
        'Tailored to your brand identity',
        'Custom color schemes',
        'Typography selection',
        'Unique layouts',
        'Consistent branding'
      ]
    },
    {
      icon: '⚡',
      title: 'Performance Optimized',
      description: 'Fast loading speeds for better user experience and SEO',
      items: [
        'Image optimization',
        'Code minification',
        'Caching strategies',
        'CDN integration',
        '90+ PageSpeed scores'
      ]
    },
    {
      icon: '🔍',
      title: 'SEO Ready',
      description: 'Built with search engines in mind from day one',
      items: [
        'Semantic HTML structure',
        'Meta tags management',
        'XML sitemap',
        'Schema markup',
        'Clean URLs'
      ]
    },
    {
      icon: '📝',
      title: 'CMS Integration',
      description: 'Easy content management without technical skills',
      items: [
        'WordPress, Sanity, or custom CMS',
        'Drag-and-drop editing',
        'Blog management',
        'Media library',
        'User-friendly interface'
      ]
    }
  ]

  // Development phases
  const phases = [
    {
      phase: '01',
      title: 'Discovery & Planning',
      duration: '1 week',
      tasks: [
        'Brand understanding',
        'Target audience analysis',
        'Competitor research',
        'Sitemap creation',
        'Content strategy'
      ]
    },
    {
      phase: '02',
      title: 'Design & Prototyping',
      duration: '2-3 weeks',
      tasks: [
        'Wireframing',
        'Visual design',
        'Interactive prototypes',
        'Client feedback rounds',
        'Design finalization'
      ]
    },
    {
      phase: '03',
      title: 'Development',
      duration: '3-4 weeks',
      tasks: [
        'Frontend coding',
        'CMS integration',
        'Responsive testing',
        'Performance optimization',
        'SEO implementation'
      ]
    },
    {
      phase: '04',
      title: 'Launch & Support',
      duration: '1-2 weeks',
      tasks: [
        'QA testing',
        'Cross-browser checks',
        'Deployment',
        'Training handover',
        'Post-launch support'
      ]
    }
  ]

  // Tech stack
  const techStack = [
    {
      category: 'Frontend',
      tools: ['React.js', 'Next.js', 'Vue.js', 'TailwindCSS', 'Framer Motion'],
      icon: '🎨'
    },
    {
      category: 'CMS Options',
      tools: ['WordPress', 'Sanity.io', 'Contentful', 'Strapi', 'Custom CMS'],
      icon: '📝'
    },
    {
      category: 'Performance',
      tools: ['Vercel', 'Netlify', 'Cloudflare', 'Image optimization', 'Lazy loading'],
      icon: '⚡'
    },
    {
      category: 'Analytics',
      tools: ['Google Analytics', 'Search Console', 'Hotjar', 'Mixpanel', 'Custom tracking'],
      icon: '📊'
    }
  ]

  // Business benefits
  const benefits = [
    {
      value: '70%',
      label: 'First Impressions',
      desc: 'of users judge credibility by website design'
    },
    {
      value: '3x',
      label: 'More Conversions',
      desc: 'professional websites convert better'
    },
    {
      value: '24/7',
      label: 'Brand Presence',
      desc: 'always working for your business'
    },
    {
      value: '50%',
      label: 'Faster Load Times',
      desc: 'vs. template-based websites'
    }
  ]

  // Portfolio examples
  const portfolioItems = [
    {
      type: 'Tech Startup',
      description: 'Modern landing page with animated components',
      features: ['Custom illustrations', 'Waitlist integration', 'Investor deck']
    },
    {
      type: 'Law Firm',
      description: 'Professional corporate website with attorney profiles',
      features: ['Team directory', 'Practice areas', 'Consultation booking']
    },
    {
      type: 'Creative Agency',
      description: 'Portfolio-focused design with case studies',
      features: ['Project gallery', 'Client work showcase', 'Testimonials']
    },
    {
      type: 'E-commerce Brand',
      description: 'Product-focused website with catalog',
      features: ['Product pages', 'Brand story', 'Lookbook']
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
              <span className="text-white">Company Website Development</span>
            </div>

            {/* Service badge */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-6 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
              🌐 Your Digital Storefront
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Company Website Development – Professional, Conversion-Focused Websites for Modern Businesses
            </h1>

            <p className="text-xl text-sky-100 leading-relaxed mb-8 max-w-3xl">
              Your website is your digital headquarters. We build professional, fast, and SEO-optimized 
              websites that tell your story, showcase your work, and convert visitors into customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" variant="primary">
                Start Your Website
              </Button>
              <Button to="/contact" size="lg" variant="outline-white">
                View Portfolio
              </Button>
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-sky-200">
              <span className="flex items-center gap-1">
                <CheckIcon /> Custom Design
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Mobile Responsive
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> SEO Optimized
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Fast Loading
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY YOUR WEBSITE MATTERS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Why It Matters"
                title="Your Website is Your Most Important Business Asset"
                align="left"
              />
              <p className="text-lg text-sky-700 mb-6 leading-relaxed">
                In today's digital world, your website is often the first interaction potential 
                clients have with your business. It needs to make a lasting impression.
              </p>
              
              <div className="space-y-4">
                {[
                  { stat: '94%', desc: 'of first impressions are design-related' },
                  { stat: '75%', desc: 'of users judge credibility by website design' },
                  { stat: '88%', desc: 'less likely to return after a bad experience' },
                  { stat: '3s', desc: 'to load - 53% of users abandon slow sites' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-sky-50 rounded-lg">
                    <span className="text-2xl font-bold text-sky-900 min-w-[60px]">{item.stat}</span>
                    <span className="text-sm text-sky-700">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Website stats card */}
            <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-sky-100">A Professional Website Delivers</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="text-center p-3 bg-sky-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-sky-300">{benefit.value}</div>
                    <div className="text-xs font-semibold text-sky-100 mb-1">{benefit.label}</div>
                    <div className="text-xs text-sky-200">{benefit.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF WEBSITES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="What We Build"
            title="Websites for Every Business Need"
            subtitle="Custom solutions tailored to your specific requirements"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((type, index) => (
              <Card
                key={index}
                icon={type.icon}
                title={type.title}
                description={type.description}
                items={type.features}
                variant="bordered"
                className="h-full hover:border-sky-500 transition-all hover:shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="What's Included"
            title="Everything You Need in a Modern Website"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-6 border border-sky-100 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-sky-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-sky-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-sky-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Process"
            title="From Concept to Launch"
            subtitle="Structured approach to building your perfect website"
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

          {/* Timeline note */}
          <div className="mt-8 text-center text-sm text-sky-600 bg-white p-4 rounded-xl shadow-sm">
            <span className="font-semibold">Total Timeline:</span> 6-10 weeks from start to launch, depending on complexity
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Technology"
            title="Modern Stack for Modern Websites"
            subtitle="We use the latest technologies for optimal performance"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-6 border border-sky-100 shadow-md hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{stack.icon}</div>
                <h3 className="text-lg font-bold text-sky-900 mb-3">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white text-sky-700 rounded-full border border-sky-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Recent Work"
            title="Websites We've Built"
            subtitle="Real projects for real clients"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-sky-100 shadow-md hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-4xl">
                  🌐
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sky-900 mb-1">{item.type}</h3>
                  <p className="text-xs text-sky-600 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.features.map((feature, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 bg-sky-50 text-sky-700 rounded-full border border-sky-200">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button to="/portfolio" variant="outline" size="md">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* CMS OPTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Easy Management"
                title="You Control Your Content"
                align="left"
              />
              <p className="text-sky-700 mb-6">
                We integrate user-friendly content management systems so you can update your website 
                without any technical knowledge.
              </p>

              <div className="space-y-4">
                {[
                  'Update text and images anytime',
                  'Add blog posts and news',
                  'Manage team members',
                  'Upload portfolio items',
                  'Respond to inquiries'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sky-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-200">
              <h3 className="text-xl font-bold text-sky-900 mb-4">CMS Options We Offer</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'WordPress', level: 'Easy' },
                  { name: 'Sanity.io', level: 'Flexible' },
                  { name: 'Contentful', level: 'Enterprise' },
                  { name: 'Strapi', level: 'Custom' },
                  { name: 'Custom CMS', level: 'Bespoke' },
                  { name: 'No-CMS', level: 'Static' }
                ].map((cms, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg border border-sky-100">
                    <div className="font-semibold text-sky-900">{cms.name}</div>
                    <div className="text-xs text-sky-500">{cms.level}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-sky-600 mt-4 italic">
                * We recommend the best CMS based on your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & PERFORMANCE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 text-white order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-4 text-sky-100">Built for Search Engines</h3>
              <ul className="space-y-3">
                {[
                  'Semantic HTML structure',
                  'Fast loading speeds (Core Web Vitals)',
                  'Mobile-first indexing ready',
                  'SEO-friendly URLs',
                  'Automatic sitemap generation',
                  'Schema markup for rich results'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sky-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <SectionTitle
                label="SEO & Performance"
                title="Rank Higher, Load Faster"
                align="left"
              />
              <p className="text-sky-700 mb-6">
                A beautiful website is useless if nobody can find it. We build with SEO best practices 
                and performance optimization from the ground up.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { score: '90+', label: 'PageSpeed Score' },
                  { score: '100%', label: 'Mobile Friendly' },
                  { score: 'SEO', label: 'Best Practices' },
                  { score: '0', label: 'Technical Issues' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-sky-100 text-center">
                    <div className="text-xl font-bold text-sky-900">{stat.score}</div>
                    <div className="text-xs text-sky-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="FAQ"
            title="Common Questions About Website Development"
          />

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to build a website?",
                a: "Typically 6-10 weeks depending on complexity, number of pages, and custom features."
              },
              {
                q: "Can I update the website myself after launch?",
                a: "Absolutely! We integrate user-friendly CMS so you can update content anytime without technical help."
              },
              {
                q: "Do you provide hosting?",
                a: "We can recommend and set up hosting, or work with your existing provider. We also offer maintenance packages."
              },
              {
                q: "Will my website work on mobile phones?",
                a: "Yes, all our websites are fully responsive and work perfectly on all devices - phones, tablets, and desktops."
              },
              {
                q: "What if I need changes after launch?",
                a: "We offer post-launch support and maintenance packages. Small updates can be handled through your CMS."
              },
              {
                q: "Do you help with content and images?",
                a: "Yes, we provide guidance on content structure and can recommend resources for professional images."
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
          <div className="text-6xl mb-6">🌐</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Your Professional Website?
          </h2>
          <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
            Let's create a website that represents your brand, engages your audience, and grows your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="primary">
              Start Your Website
            </Button>
            <Button to="/contact" size="lg" variant="outline-white">
              Get a Quote
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-sky-200">
            <span className="flex items-center gap-1">
              <CheckIcon /> Free consultation
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> Custom design
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> 100% ownership
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> Post-launch support
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}