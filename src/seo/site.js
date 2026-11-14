import { company } from '../data/company.js'
import { posts } from '../data/blog.js'
export const siteUrl = 'https://www.minorgroup.site'
export const siteName = 'Minor Group of Technologies'

const logoUrl = `${siteUrl}/brand/minor-group-logo-porcelain.png`
const socialImage = { url: siteUrl + '/brand/social-card.png', width: 1200, height: 630, alt: 'Minor Group of Technologies: SaaS, websites and business systems' }

// These records are shared by the browser, prerendered pages and sitemap generation.
export const routes = [
  {
    path: '/', name: 'Home', type: 'WebPage',
    title: 'Custom Software & SaaS Development | Minor Group',
    description: 'Custom software, SaaS platforms, business dashboards and websites for US businesses and teams worldwide. Built by Minor Group of Technologies.',
  },
  {
    path: '/services', name: 'Services', type: 'CollectionPage',
    title: 'Software Development Services | Minor Group',
    description: 'Explore SaaS MVP development, business dashboards, company websites, travel agency systems and automation services from Minor Group of Technologies.',
  },
  {
    path: '/about', name: 'About', type: 'AboutPage',
    title: 'About Our Software Development Company | Minor Group',
    description: 'Meet Minor Group of Technologies, a Pakistan-based software company focused on thoughtful product design, clear business workflows and scalable digital systems.',
  },
  {
    path: '/contact', name: 'Contact', type: 'ContactPage',
    title: 'Start Your Software Project | Contact Minor Group',
    description: 'Discuss your software, SaaS, website or automation project with Minor Group. Send a project inquiry, email our team or call our company number.',
  },
  {
    path: '/services/tam-system-development', name: 'Travel Agency Management', type: 'WebPage',
    title: 'Travel Agency Management Software (TAM) | Minor Group',
    description: 'Manage travel agency bookings, clients, visas, payments and staff with TAM. Explore role-based workflows for Umrah, Hajj and group travel operations.',
    service: { name: 'TAM Travel Agency Management', serviceType: 'Travel agency management software setup and development' },
  },
  {
    path: '/services/saas-mvp-development', name: 'SaaS MVP Development', type: 'WebPage',
    title: 'SaaS MVP Development Services | Minor Group',
    description: 'Turn your software idea into a focused first release. Minor Group plans, designs and builds SaaS MVPs with user roles, payments and scalable architecture.',
    service: { name: 'SaaS MVP Development', serviceType: 'SaaS product and minimum viable product development' },
  },
  {
    path: '/services/business-dashboard-development', name: 'Business Dashboard Development', type: 'WebPage',
    title: 'Business Dashboard Development | Minor Group',
    description: 'Build a custom business dashboard for orders, inventory, customers, staff and reporting. Connect your operations and data in one useful workspace.',
    service: { name: 'Business Dashboard Development', serviceType: 'Custom business dashboard and management system development' },
  },
  {
    path: '/services/company-website-development', name: 'Company Website Development', type: 'WebPage',
    title: 'Company Website Design & Development | Minor Group',
    description: 'Create a responsive company website built around your brand and audience. Minor Group combines website strategy, interface design and custom development.',
    service: { name: 'Company Website Development', serviceType: 'Business website strategy, design and development' },
  },
  {
    path: '/services/automation-system-integration', name: 'Automation & System Integration', type: 'WebPage',
    title: 'Workflow Automation & System Integration | Minor Group',
    description: 'Connect business tools, automate repetitive work and keep information moving. Explore workflow automation, API integration, notifications and data synchronization.',
    service: { name: 'Automation & System Integration', serviceType: 'Business workflow automation and software system integration' },
  },
  {
    path: '/blog', name: 'Blog', type: 'CollectionPage',
    title: 'Custom Software & Website Guides for US Businesses | Minor Group',
    description: 'Practical custom software and website development guides for US business owners. Plan scope, compare partners and prepare a stronger launch with Minor Group.',
  },
  ...posts.map(post => ({
    path: `/blog/${post.slug}`, name: post.title, type: 'WebPage',
    title: post.seoTitle, description: post.description, article: post,
  })),
  {
    path: '/privacy', name: 'Privacy Policy', type: 'WebPage',
    title: 'Privacy Policy | Minor Group of Technologies',
    description: 'Read how Minor Group of Technologies collects, uses and protects information when you visit our website, contact our team or use our services.',
  },
  {
    path: '/terms', name: 'Terms of Service', type: 'WebPage',
    title: 'Terms of Service | Minor Group of Technologies',
    description: 'Review the terms that apply to using the Minor Group of Technologies website and services, including project agreements and user responsibilities.',
  },
  {
    path: '/cookies', name: 'Cookie Policy', type: 'WebPage',
    title: 'Cookie Policy | Minor Group of Technologies',
    description: 'Learn about cookies and similar technologies used on the Minor Group of Technologies website, their purposes and your available browser controls.',
  },
  {
    path: '/disclaimer', name: 'Disclaimer', type: 'WebPage',
    title: 'Website & Services Disclaimer | Minor Group',
    description: 'Read the Minor Group of Technologies disclaimer covering website information, external links and the limitations that apply to our published content.',
  },
  {
    path: '/refund', name: 'Refund Policy', type: 'WebPage',
    title: 'Refund & Cancellation Policy | Minor Group',
    description: 'Review the refund and cancellation policy for Minor Group of Technologies services, including eligibility, project milestones and request procedures.',
  },
  {
    path: '/legal', name: 'Legal Hub', type: 'CollectionPage',
    title: 'Legal Policies & Terms | Minor Group of Technologies',
    description: 'Find Minor Group of Technologies privacy, cookie, refund and cancellation policies, terms of service and website disclaimer in one legal resource hub.',
  },
]

const routeIndex = new Map(routes.map(route => [route.path, route]))
const legalPaths = new Set(['/privacy', '/terms', '/cookies', '/disclaimer', '/refund'])

function normalizePath(pathname = '/') {
  let path
  try { path = new URL(pathname, siteUrl).pathname } catch { path = '/' }
  return path.replace(/\/+$/, '') || '/'
}

export function getSeo(pathname = '/') {
  const path = normalizePath(pathname)
  const record = routeIndex.get(path)
  if (record) return { ...record, canonical: `${siteUrl}${path}`, robots: 'index, follow, max-image-preview:large', isNotFound: false }
  return {
    path, name: 'Page Not Found', type: 'WebPage',
    title: 'Page Not Found | Minor Group of Technologies',
    description: 'The page you requested could not be found. Explore Minor Group of Technologies services or contact our team about your software project.',
    canonical: null, robots: 'noindex, follow', isNotFound: true,
  }
}

function breadcrumbsFor(seo) {
  if (seo.path === '/' || seo.isNotFound) return []
  const items = [{ name: 'Home', path: '/' }]
  if (seo.service) items.push({ name: 'Services', path: '/services' })
  else if (seo.article) items.push({ name: 'Blog', path: '/blog' })
  else if (legalPaths.has(seo.path)) items.push({ name: 'Legal', path: '/legal' })
  items.push({ name: seo.name, path: seo.path })
  return items
}

export function getStructuredData(pathname = '/') {
  const seo = getSeo(pathname)
  const pageUrl = seo.canonical || `${siteUrl}${seo.path}`
  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`
  const pageId = `${pageUrl}#webpage`
  const graph = [
    {
      '@type': 'Organization', '@id': organizationId,
      name: siteName, url: `${siteUrl}/`,
      logo: { '@type': 'ImageObject', '@id': `${siteUrl}/#logo`, url: logoUrl, contentUrl: logoUrl, width: 2172, height: 724, caption: siteName },
      description: 'Software development company building SaaS products, business management systems, websites and workflow automation.',
      email: company.email, telephone: company.phone,
      address: { '@type': 'PostalAddress', addressCountry: 'PK' },
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', telephone: company.phone, email: company.email, availableLanguage: ['English'] },
    },
    { '@type': 'WebSite', '@id': websiteId, url: `${siteUrl}/`, name: siteName, publisher: { '@id': organizationId }, inLanguage: 'en' },
    {
      '@type': seo.type, '@id': pageId, url: pageUrl,
      name: seo.title, description: seo.description,
      isPartOf: { '@id': websiteId }, about: { '@id': organizationId },
      inLanguage: seo.article ? 'en-US' : 'en',
    },
  ]
  const page = graph[2]
  const crumbs = breadcrumbsFor(seo)
  if (crumbs.length) {
    page.breadcrumb = { '@id': `${pageUrl}#breadcrumb` }
    graph.push({
      '@type': 'BreadcrumbList', '@id': `${pageUrl}#breadcrumb`,
      itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: `${siteUrl}${crumb.path}` })),
    })
  }
  if (seo.service) {
    page.mainEntity = { '@id': `${pageUrl}#service` }
    graph.push({
      '@type': 'Service', '@id': `${pageUrl}#service`,
      name: seo.service.name, serviceType: seo.service.serviceType,
      description: seo.description, url: pageUrl,
      provider: { '@id': organizationId },
    })
  }
  if (seo.path === '/blog') {
    page.mainEntity = { '@id': `${siteUrl}/blog#journal` }
    graph.push({
      '@type': 'Blog', '@id': `${siteUrl}/blog#journal`,
      name: 'Minor Group Journal', url: `${siteUrl}/blog`, inLanguage: 'en-US',
      publisher: { '@id': organizationId },
      blogPost: posts.map(post => ({ '@id': `${siteUrl}/blog/${post.slug}#article` })),
    })
  }
  if (seo.article) {
    page.mainEntity = { '@id': `${pageUrl}#article` }
    graph.push({
      '@type': 'BlogPosting', '@id': `${pageUrl}#article`,
      headline: seo.article.title, description: seo.article.description,
      datePublished: seo.article.publishedAt, inLanguage: 'en-US',
      articleSection: seo.article.category,
      author: { '@type': 'Organization', '@id': organizationId, name: siteName, url: `${siteUrl}/about` },
      publisher: { '@id': organizationId },
      mainEntityOfPage: { '@id': pageId },
      isPartOf: { '@id': `${siteUrl}/blog#journal` },
      image: [`${siteUrl}/brand/blog/${seo.article.slug}.png`],
      url: pageUrl,
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))
}
function meta(attribute, name, content) {
  return `<meta data-seo="${escapeHtml(name)}" ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}" />`
}

export function renderSeoHead(pathname = '/') {
  const seo = getSeo(pathname)
  const pageUrl = seo.canonical || `${siteUrl}${seo.path}`
  const shareImage = seo.article ? { url: `${siteUrl}/brand/blog/${seo.article.slug}.png`, width: 1200, height: 630, alt: seo.article.title } : socialImage
  const jsonLd = JSON.stringify(getStructuredData(pathname)).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
  return [
    `<title data-seo="title">${escapeHtml(seo.title)}</title>`,
    meta('name', 'description', seo.description),
    meta('name', 'robots', seo.robots),
    ...(seo.canonical ? [`<link data-seo="canonical" rel="canonical" href="${escapeHtml(seo.canonical)}" />`] : []),
    meta('property', 'og:type', seo.article ? 'article' : 'website'),
    meta('property', 'og:site_name', siteName),
    meta('property', 'og:locale', 'en_US'),
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:url', pageUrl),
    meta('property', 'og:image', shareImage.url),
    meta('property', 'og:image:alt', shareImage.alt),
    meta('property', 'og:image:width', shareImage.width),
    meta('property', 'og:image:height', shareImage.height),
    meta('property', 'og:image:type', 'image/png'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', shareImage.url),
    meta('name', 'twitter:image:alt', shareImage.alt),
    `<script data-seo="structured-data" id="seo-structured-data" type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ')
}



