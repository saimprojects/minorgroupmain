const article = {
  slug: 'custom-software-development-usa-guide',
  title: 'Custom Software Development for US Small Businesses: A Buyer’s Guide',
  seoTitle: 'Custom Software Development for US Businesses | Minor Group',
  description: 'A practical guide for US small businesses comparing custom software: scope, integrations, proposals, security, ownership and the first release.',
  category: 'Custom software',
  publishedAt: '2026-11-14',
  readTime: '6 min read',
  excerpt: 'How to decide what to build, compare proposals and put a useful first release in your team’s hands.',
  intro: 'The need for custom software often starts with an ordinary frustration: the same order entered twice, a spreadsheet only one person understands, or a customer waiting while someone checks three systems. For a US small business, the buying decision should start with that work. Before comparing developers, define what needs to change, who will use the system and how you will tell whether the first release helped.',
  sections: [
    {
      id: 'build-or-buy',
      title: 'Start by checking whether you need to build',
      blocks: [
        { type: 'paragraph', text: 'An existing product deserves a fair evaluation. A standard scheduling, accounting or customer-management tool may cover the work well enough after configuration. Custom development becomes worth examining when a distinctive workflow, an important integration or a recurring workaround remains unresolved. Buying and building can also coexist: keep the accounting product your team trusts and build the operational workspace around it.' },
        { type: 'table', headers: ['Your situation', 'A useful next step'], rows: [
          ['The workflow is common and a product covers it', 'Test configuration and training before commissioning a replacement.'],
          ['The tools work, but staff copy information between them', 'Investigate an integration or a small automation first.'],
          ['Your process needs its own rules, permissions or customer experience', 'Scope a custom system around the essential workflow.'],
        ] },
        { type: 'link', text: 'Explore workflow automation and system integration', to: '/services/automation-system-integration' },
      ],
    },
    {
      id: 'define-the-workflow',
      title: 'Describe one workflow before listing features',
      blocks: [
        { type: 'paragraph', text: '“We need a dashboard” leaves too much open. Describe a transaction from beginning to end instead. In an illustrative field-service business, an office coordinator receives a request, checks service coverage, assigns a technician, confirms completion and sends the information needed for invoicing. The first version might support that sequence. Route optimization, a customer app and complex forecasting can wait until the basic handoff works.' },
        { type: 'paragraph', text: 'For each step, identify the person responsible, the information they need and the exception that stops progress. Include the awkward cases: a canceled appointment, a duplicate customer, a partial payment or an employee who changes roles. These details give a development partner something concrete to estimate and demonstrate.' },
      ],
    },
    {
      id: 'write-the-brief',
      title: 'Put a short discovery brief in front of every bidder',
      blocks: [
        { type: 'paragraph', text: 'Send the same brief to each company you are considering. This makes proposals easier to compare and exposes questions that need an answer before a dependable scope can exist. Screenshots or sample records can help, but remove customer information and credentials before sharing them.' },
        { type: 'list', items: [
          'The business problem, the people affected and the workflow you want to improve.',
          'The roles that need access and what each role may view, change or approve.',
          'The systems that must remain connected, including who controls their accounts.',
          'The data that must be imported, its condition and who can confirm its accuracy.',
          'What must be included in the first release, what can wait and what is excluded.',
          'A named decision-maker and a practical way to approve completed work.',
        ] },
        { type: 'link', text: 'See how a focused SaaS MVP can be scoped', to: '/services/saas-mvp-development' },
      ],
    },
    {
      id: 'data-and-integrations',
      title: 'Treat your existing data as part of the project',
      blocks: [
        { type: 'paragraph', text: 'An integration is more than a line between two logos. Agree which system owns each record, when updates should travel and what happens when an external service is unavailable. For example, should an address edited in the customer system overwrite an address already attached to a confirmed order? Write that rule down.' },
        { type: 'paragraph', text: 'For US operations, include the conventions people rely on: USD amounts, address fields, phone formats and relevant time zones. Ask how the system will store dates and display them to users in different regions. Plan a sample import and reconciliation before moving the full dataset. A smaller clean migration is easier to validate than a large unexplained one.' },
      ],
    },
    {
      id: 'security-and-access',
      title: 'Make access and recovery visible in the scope',
      blocks: [
        { type: 'paragraph', text: 'Ask the developer to explain authentication and permissions in business terms. NIST’s small-business guidance recommends using multi-factor authentication and limiting access to what people need for their jobs. It also highlights removing access when responsibilities change or an employee leaves. These are useful questions for an admin account, not just items to discuss after launch.' },
        { type: 'link', text: 'Read NIST’s small-business multi-factor authentication guidance', to: 'https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/multi-factor-authentication', external: true },
        { type: 'paragraph', text: 'Also ask for a documented backup and restoration approach, a way to review important changes, and an owner for security updates. Decide what information the application actually needs to retain. If your organization has industry-specific requirements, bring the people responsible for those requirements into discovery so the development scope reflects their input.' },
      ],
    },
    {
      id: 'compare-proposals',
      title: 'Compare the assumptions behind the USD total',
      blocks: [
        { type: 'paragraph', text: 'Two quotes can describe different projects while using the same feature names. Ask for the total in USD, the payment schedule and a clear distinction between development fees and ongoing operating expenses. If a proposal is in another currency, agree how conversion will be handled rather than comparing an estimate with a moving exchange rate.' },
        { type: 'table', headers: ['Proposal item', 'What to clarify'], rows: [
          ['Discovery and design', 'Which workflows, wireframes and review rounds are included?'],
          ['Development and integrations', 'Which external systems and exception cases are in scope?'],
          ['Data migration and testing', 'Who cleans the data and signs off on imported records?'],
          ['Hosting and third-party services', 'Which recurring charges are paid separately?'],
          ['Training and support', 'What is included at launch, and what is billed afterward?'],
        ] },
      ],
    },
    {
      id: 'delivery-and-timing',
      title: 'Use milestones you can inspect',
      blocks: [
        { type: 'paragraph', text: 'A useful milestone demonstrates a working slice of the business process. “The coordinator can create a request and assign it to a technician” is easier to review than “backend complete.” Agree acceptance examples before development starts, then review the result with the people who perform the work.' },
        { type: 'paragraph', text: 'A credible schedule should explain its dependencies: access to external accounts, decisions on workflows, content or data preparation, and time for your team to test. If the launch date is fixed, discuss which scope can fit it. For a US team working with an overseas partner, agree meeting overlap, written handoffs and the hours covered by launch support.' },
      ],
    },
    {
      id: 'ownership-and-handoff',
      title: 'Know what you will have when the project ends',
      blocks: [
        { type: 'paragraph', text: 'Ask how source code, hosting accounts, domains, documentation and third-party subscriptions will be handed over. Confirm that your business can access the accounts it needs to operate the system. Request a list of external components and licenses, deployment instructions and a process for exporting your data.' },
        { type: 'paragraph', text: 'Separate the initial correction period from ongoing maintenance and new feature work. Define where issues are reported, how their severity is assessed and who decides what happens next. Have the relevant terms documented in the project agreement and reviewed through your normal business process.' },
      ],
    },
    {
      id: 'choose-the-first-release',
      title: 'Buy a useful first release, then learn from it',
      blocks: [
        { type: 'paragraph', text: 'The first release does not need to reproduce every spreadsheet your business has ever used. It needs to improve a clearly defined job without creating uncertainty around the next step. Choose a small set of outcomes to observe, such as whether staff can find the correct record, complete a handoff or reconcile an imported order without extra help. Use those observations to prioritize the next release.' },
        { type: 'link', text: 'Explore custom business dashboards', to: '/services/business-dashboard-development' },
        { type: 'link', text: 'Planning your public-facing site too? Read the US business website guide', to: '/blog/business-website-development-usa-guide' },
        { type: 'link', text: 'Discuss your software project with Minor Group', to: '/contact' },
      ],
    },
  ],
  takeaway: 'Begin with the workflow, make the first release specific, and compare proposals by their assumptions and handoff responsibilities. A custom system should make daily work clearer for the people using it.',
  relatedService: { label: 'SaaS & MVP development', to: '/services/saas-mvp-development' },
  sources: [
    { title: 'NIST: Multi-Factor Authentication for Small Businesses', url: 'https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/multi-factor-authentication' },
  ],
}

const words = [article.intro, ...article.sections.flatMap(section => [section.title, ...section.blocks.flatMap(block => block.text ? [block.text] : block.items || [block.headers?.join(' '), ...(block.rows || []).map(row => row.join(' '))])]), article.takeaway].filter(Boolean).join(' ').split(/\s+/).length
article.readTime = `${Math.ceil(words / 225)} min read`
export default article
