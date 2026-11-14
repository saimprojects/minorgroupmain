const article = {
  slug: 'business-website-development-usa-guide',
  title: 'Business Website Development for US Companies: A Planning Guide',
  seoTitle: 'Business Website Development in the USA: Planning Guide',
  description: 'Plan a business website for your US company. Compare proposals, scope content, check mobile usability and SEO, and prepare a practical launch checklist.',
  category: 'Websites',
  publishedAt: '2026-11-14',
  readTime: '',
  excerpt: 'A practical guide for US business owners choosing what their website needs to do, what to ask a development partner, and how to judge the finished result.',
  intro: 'A business website should help someone understand your offer and take a useful next step. For a US service company, that might mean requesting an estimate, booking a consultation, or checking whether you serve their area. Before comparing designs or development proposals, decide what that journey should look like. This guide gives owners and marketing teams a way to define the work, compare options, and launch with fewer unanswered questions.',
  sections: [
    {
      id: 'define-the-job',
      title: 'Start with the job the website needs to do',
      blocks: [
        { type: 'paragraph', text: 'Choose one primary action, then work backward. A visitor needs to know what you do, whether it fits their situation, why they should trust the information, and what happens after they contact you. A contact button cannot answer those questions by itself.' },
        { type: 'paragraph', text: 'Consider a hypothetical commercial cleaning company serving offices around Dallas. Its website needs clear service areas, cleaning options, an explanation of the estimate process, and a form that collects the building type and preferred contact method. Those details are more useful than an elaborate homepage that never explains how to request a quote. This is an illustrative planning example, not a Minor Group client case study.' },
        { type: 'list', items: ['Name the audience and the decision they are trying to make.', 'Define the primary inquiry or booking action.', 'Decide who receives each inquiry and how the team follows up.'] },
      ],
    },
    {
      id: 'website-or-web-application',
      title: 'Decide whether you need a website or a web application',
      blocks: [
        { type: 'paragraph', text: 'A company website explains your services, publishes content, and helps people contact you. A web application lets people complete a business process: sign in, manage orders, upload documents, approve work, or view account-specific information. A project may need both, but they should be scoped separately.' },
        { type: 'paragraph', text: 'For example, a public services page and inquiry form can belong to the website. A customer portal showing private project records requires its own account, permission, and workflow planning. Identify that boundary before asking agencies to quote.' },
        { type: 'link', text: 'Explore SaaS and application development', to: '/services/saas-mvp-development' },
      ],
    },
    {
      id: 'audit-before-redesign',
      title: 'If you already have a site, audit it before replacing it',
      blocks: [
        { type: 'paragraph', text: 'List the pages you have, the questions customers ask, and the steps people struggle to complete. Review inquiry quality alongside traffic. A page with fewer visitors may still answer an important buying question. Ask the team handling calls which website details are regularly missing or misunderstood.' },
        { type: 'paragraph', text: 'Keep a record of existing URLs and decide which pages will stay, merge, or move. Give the developer that list before launch planning starts. Also identify useful photography, service explanations, and downloadable documents that can be improved rather than recreated.' },
      ],
    },
    {
      id: 'write-a-content-brief',
      title: 'Build the page plan around customer questions',
      blocks: [
        { type: 'paragraph', text: 'For each proposed page, write down its audience, main question, evidence, and next action. A focused content brief helps designers make better layout decisions and exposes missing material early. Assign someone to approve the wording; a development schedule can stall while service descriptions wait for review.' },
        { type: 'list', items: ['Homepage: explain the offer and direct visitors to the right service.', 'Service pages: describe the work, suitable customers, process, and next step.', 'About page: introduce the real business and people behind it.', 'Contact page: provide accurate company details and a clear inquiry process.', 'Guides or articles: answer specific questions related to your actual services.'] },
        { type: 'paragraph', text: 'Use US English consistently for a US audience. Show relevant service areas accurately, label any quoted currency clearly, and explain scheduling across time zones. Targeting American customers does not require inventing a US office or listing cities where you do not operate.' },
      ],
    },
    {
      id: 'mobile-and-accessibility',
      title: 'Make mobile use and accessibility part of acceptance',
      blocks: [
        { type: 'paragraph', text: 'Ask to complete the main visitor journey on a small phone, with a keyboard, and at enlarged text sizes. Check that navigation remains understandable, focus is visible, form fields have labels, and errors explain what needs attention. W3C provides preliminary checks covering these areas, while emphasizing that simple checks are not a complete accessibility evaluation.' },
        { type: 'link', text: 'W3C: Easy Checks for a first accessibility review', to: 'https://www.w3.org/WAI/test-evaluate/preliminary/', external: true },
        { type: 'paragraph', text: 'For your own acceptance test, submit a realistic inquiry rather than testing only an empty form. Confirm the message reaches the intended recipient, the visitor sees useful confirmation, and a failed submission leaves their entered information available to correct or retry.' },
      ],
    },
    {
      id: 'performance-and-seo',
      title: 'Ask how performance and search visibility will be verified',
      blocks: [
        { type: 'paragraph', text: 'Google’s Core Web Vitals describe loading performance, responsiveness, and visual stability. Ask your developer to check representative pages and explain both lab results and any available real-user data. A single screenshot of a score is less useful than an explanation of what was measured and what still needs work.' },
        { type: 'link', text: 'Google web.dev: Understand Web Vitals', to: 'https://web.dev/articles/vitals', external: true },
        { type: 'paragraph', text: 'For technical SEO, ask whether search engines can access meaningful page content, whether each important page has a descriptive title and URL, and how internal links connect related information. Check that the production sitemap and canonical URLs describe the same pages. Google’s starter guide explains that these practices help discovery and understanding; they do not guarantee rankings.' },
        { type: 'link', text: 'Google Search Central: SEO Starter Guide', to: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', external: true },
      ],
    },
    {
      id: 'compare-development-proposals',
      title: 'Compare proposals by responsibility, not just the total',
      blocks: [
        { type: 'paragraph', text: 'Give each prospective partner the same brief. Request pricing in USD if that is your purchasing currency, and distinguish one-time project work from recurring services. Do not assume that copywriting, migration, photography, hosting, or ongoing edits are included because a proposal says “complete website.”' },
        { type: 'table', headers: ['Proposal area', 'What to clarify'], rows: [
          ['Scope', 'Page types, content volume, integrations, and exclusions'],
          ['Content', 'Who writes, supplies, reviews, and enters it'],
          ['Revisions', 'Included review rounds and change-request pricing'],
          ['Payments', 'Currency, milestones, and recurring charges'],
          ['Schedule', 'Dependencies, approval deadlines, and launch responsibilities'],
          ['Acceptance', 'What is tested and how defects are handled'],
        ] },
        { type: 'paragraph', text: 'When one estimate is much lower, ask which responsibilities differ. A proposal is easier to judge when both sides understand what the business must provide and what the development partner will deliver.' },
      ],
    },
    {
      id: 'ownership-and-maintenance',
      title: 'Agree on ownership and the work after launch',
      blocks: [
        { type: 'paragraph', text: 'Document who controls the domain, hosting, content management system, analytics, and form service accounts. Ask what you will receive at handoff: account access, source files where agreed, deployment instructions, and a short editing walkthrough. Have the applicable ownership and licensing arrangements written into the project agreement.' },
        { type: 'paragraph', text: 'Choose a CMS around the changes your staff will actually make. Publishing articles, changing service information, and editing a complex application are different needs. Agree who handles updates, backups, monitoring, and broken integrations, and how support requests are prioritized.' },
        { type: 'link', text: 'Read the custom software planning guide', to: '/blog/custom-software-development-usa-guide' },
      ],
    },
    {
      id: 'launch-checklist',
      title: 'Use a short, written launch checklist',
      blocks: [
        { type: 'list', items: [
          'Review service descriptions, company phone, email, and any location claims.',
          'Test navigation, inquiry forms, confirmation messages, and delivery routing.',
          'Check key pages on desktop and phone, including keyboard navigation.',
          'Verify page titles, descriptions, canonical URLs, sitemap, redirects, and missing-page behavior.',
          'Confirm production account access and remove test-only content or settings.',
          'Record who handles launch-day issues and the first scheduled content review.',
        ] },
        { type: 'paragraph', text: 'Keep the initial release focused. You can add features later, but the first version should explain the business clearly and make its main journey work from beginning to end. Minor Group’s website development service brings planning, interface design, and development into one project conversation.' },
        { type: 'link', text: 'Explore company website design and development', to: '/services/company-website-development' },
        { type: 'link', text: 'Discuss your website project', to: '/contact' },
      ],
    },
  ],
  takeaway: 'A useful business website starts with a clear customer journey, a realistic content plan, and agreed responsibilities. Define those first, then compare design and development proposals against the same brief.',
  relatedService: { label: 'Company website development', to: '/services/company-website-development' },
  sources: [
    { title: 'Google Search Central: SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
    { title: 'W3C WAI: Easy Checks', url: 'https://www.w3.org/WAI/test-evaluate/preliminary/' },
    { title: 'Google web.dev: Web Vitals', url: 'https://web.dev/articles/vitals' },
  ],
}

const wordCount = [article.intro, ...article.sections.flatMap(section => [section.title, ...section.blocks.flatMap(block => block.text ? [block.text] : block.items || block.rows?.flat() || [])]), article.takeaway].join(' ').split(/\s+/).length
article.readTime = `${Math.ceil(wordCount / 220)} min read`
export default article
