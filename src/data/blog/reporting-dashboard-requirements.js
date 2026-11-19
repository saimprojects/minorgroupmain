const article = {
  slug: 'reporting-dashboard-requirements',
  title: 'Reporting Dashboard Requirements: A Practical Checklist',
  seoTitle: 'Reporting Dashboard Requirements & KPI Checklist',
  description: 'Define reporting dashboard requirements with a practical checklist for KPIs, data sources, refresh schedules, permissions and acceptance testing.',
  category: 'Dashboards',
  publishedAt: '2026-11-19',
  readTime: '',
  excerpt: 'Turn “we need better reporting” into a buildable brief, with a sample KPI specification and a checklist your business and development team can review together.',
  quickAnswer: 'A reporting dashboard requirements document should define who uses the dashboard, which decisions it supports, how every KPI is calculated, where the data comes from, and how current it must be. Include permissions, filters, export rules and measurable acceptance tests. Agree on these details with the business owner before approving visual designs or development scope.',
  intro: 'Reporting dashboard requirements begin with a question your team needs to answer. “Which orders need attention before today’s shipping cutoff?” is a useful starting point. “Show all our data” leaves the developer guessing. This checklist helps US business owners, operations managers and reporting teams turn those questions into a clear brief. Use it to agree on the meaning of the numbers and the behavior of the finished dashboard before the first chart is built.',
  sections: [
    {
      id: 'users-and-decisions',
      title: 'Who will use the dashboard, and what will they decide?',
      blocks: [
        { type: 'paragraph', text: 'Name the user, the decision and the next action for each view. An owner reviewing monthly performance needs different information from a supervisor assigning overdue work. Putting both into the same screen can bury the task each person came to complete.' },
        { type: 'paragraph', text: 'Write a short use case: “Each weekday morning, the operations lead identifies unshipped orders past their promised dispatch date and assigns an owner.” That statement suggests a date rule, an exception list and an ownership field. It also makes clear whether the dashboard only reports a problem or must let someone act on it.' },
        { type: 'list', items: ['Identify the people who use and approve each view.', 'Describe the decision and how frequently it happens.', 'Separate essential launch decisions from later requests.', 'Confirm whether users need a read-only report, an export or an operational workflow.'] },
      ],
    },
    {
      id: 'kpi-definitions',
      title: 'Define each KPI before choosing its chart',
      blocks: [
        { type: 'paragraph', text: 'A KPI definition is an agreement about what a number means. “Revenue” might refer to placed orders, invoices, recognized revenue or collected payments. Those measures answer different questions. Name the source and calculation explicitly, and ask the responsible business owner to approve them.' },
        { type: 'paragraph', text: 'The example below is an illustrative operational KPI specification, not a client result or an accounting standard. Adapt the rules to your own process. A small specification like this gives developers something concrete to build and reviewers something concrete to test.' },
        { type: 'table', headers: ['Requirement', 'Illustrative specification'], rows: [
          ['Metric', 'Overdue unshipped orders'],
          ['Business question', 'Which orders need an operations review today?'],
          ['Calculation', 'Count distinct eligible order IDs whose promised dispatch date is before the reporting date and whose shipped timestamp is empty.'],
          ['Exclusions', 'Exclude canceled orders and internal test orders.'],
          ['Reporting calendar', 'Use the calendar date in America/New_York for this example.'],
          ['Breakdowns', 'Warehouse and assigned owner; preserve an “Unassigned” group.'],
          ['Owner', 'Operations lead approves the definition and rule changes.'],
        ] },
        { type: 'paragraph', text: 'Also specify units, rounding, missing values and comparison periods. Decide whether a percentage uses all orders or only eligible orders as its denominator. Distinguish zero from missing data; otherwise, an empty source may appear to be a perfect result.' },
      ],
    },
    {
      id: 'source-map',
      title: 'Map the data sources and the records that connect them',
      blocks: [
        { type: 'paragraph', text: 'For every KPI, identify the authoritative source, required fields and person responsible for access. “Connect the CRM” is incomplete if the relevant stage history is only available in a separate export. Review representative records before confirming the scope.' },
        { type: 'list', items: ['List the actual systems, files or databases and their owners.', 'Record the identifiers used to join customers, orders and invoices.', 'Explain how duplicates, deleted records and corrections are handled.', 'State how much history is needed and whether historical snapshots exist.', 'Identify fields containing personal or otherwise restricted information.'] },
        { type: 'paragraph', text: 'Ask what happens when an identifier is missing or a relationship is one-to-many. An order joined to several line items can inflate a count if the calculation does not account for that structure. Keep unmatched records visible for review instead of quietly dropping them.' },
      ],
    },
    {
      id: 'freshness-and-calendar',
      title: 'Specify refresh targets, reporting dates and currency',
      blocks: [
        { type: 'paragraph', text: 'A refresh schedule describes an intention. A last-successful-update timestamp describes what actually happened. Require both, with a visible stale-data state when an agreed freshness limit is exceeded. State whether the timestamp refers to the source extraction, the dashboard load or the underlying business event.' },
        { type: 'paragraph', text: 'For a US team, label reporting dates clearly, such as “November 19, 2026,” and agree on the reporting time zone. A month-end report may need one shared business calendar even when viewers work in different states. Include daylight saving transitions and records around midnight in testing.' },
        { type: 'paragraph', text: 'Developers must preserve the difference between a calendar date and a timestamp. PostgreSQL’s documentation explains how its date/time types and time zone conversion behave; the implementation should match the business rule rather than depend on a server’s default setting.' },
        { type: 'link', text: 'PostgreSQL: Date/time types and time zones', to: 'https://www.postgresql.org/docs/current/datatype-datetime.html', external: true },
        { type: 'paragraph', text: 'Label financial measures with the currency, such as USD. If several currencies are combined, specify the conversion source, effective date and rounding method. Ask finance to approve those rules and distinguish provisional figures from finalized reporting.' },
      ],
    },
    {
      id: 'permissions-and-exports',
      title: 'Define permissions for views, records and exports',
      blocks: [
        { type: 'paragraph', text: 'Describe access in business terms: a regional manager can see their region, finance can review approved financial views, and an administrator can manage access. Decide whether exported files follow the same restrictions. A hidden menu item does not protect the underlying data.' },
        { type: 'paragraph', text: 'OWASP recommends granting only the access needed, denying access by default and checking permissions on every request. Translate those principles into acceptance scenarios, including attempts to open another team’s records through a copied link or direct request.' },
        { type: 'link', text: 'OWASP: Authorization recommendations', to: 'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html', external: true },
        { type: 'paragraph', text: 'Agree who approves new users, removes departed staff and reviews access changes. Keep credentials out of the requirements document; record the approved process for providing access instead.' },
      ],
    },
    {
      id: 'usable-reporting',
      title: 'Specify filters, drill-downs and accessible alternatives',
      blocks: [
        { type: 'paragraph', text: 'Define default filters and whether they apply to every measure on the page. Explain what happens when a user changes the date range, resets the view or follows a link to underlying records. A total and its detail list should use the same scope.' },
        { type: 'paragraph', text: 'Provide meaningful labels, keyboard access and information that does not depend on color alone. Where a chart communicates exact values, consider a usable data table alongside it. W3C’s tables guidance explains why header and data cells need structural markup so assistive technology can convey their relationships.' },
        { type: 'link', text: 'W3C WAI: Accessible data tables', to: 'https://www.w3.org/WAI/tutorials/tables/', external: true },
        { type: 'paragraph', text: 'State which tasks must work on a phone and which require a larger workspace. Test loading time against an agreed volume of records and number of concurrent users. Avoid an unmeasurable requirement such as “the dashboard must always be fast.”' },
      ],
    },
    {
      id: 'acceptance-tests',
      title: 'Turn the requirements into acceptance tests',
      blocks: [
        { type: 'paragraph', text: 'Build a small, approved set of sample records with expected results. Have the business owner calculate those results independently, then compare them with the dashboard. The following test cases extend the illustrative overdue-order example; they are a starting checklist, not a complete QA plan.' },
        { type: 'table', headers: ['Test case', 'Expected behavior'], rows: [
          ['Canceled order past its dispatch date', 'Excluded from the overdue count.'],
          ['One order with several line items', 'Counted once, using its distinct order ID.'],
          ['Eligible order without an assigned owner', 'Included and visible in the Unassigned group.'],
          ['Source refresh fails', 'Show the last successful update and a stale-data notice.'],
          ['Manager requests another region’s records', 'Access is denied, including through exports.'],
          ['No eligible records in the selected period', 'Show a clear empty state rather than a loading spinner.'],
        ] },
        { type: 'paragraph', text: 'Record who signs off, how discrepancies are reported and what blocks release. Repeat the reconciliation after a rule change or a source-system change. A screenshot of a correct total does not verify filters, permissions or the underlying detail.' },
      ],
    },
    {
      id: 'handoff-brief',
      title: 'What should you give the dashboard development team?',
      blocks: [
        { type: 'paragraph', text: 'Prepare one brief containing the user decisions, KPI definitions, source map, freshness targets, access rules and acceptance cases. Add an owner for each open question. Mark unverified assumptions clearly so they can be resolved during discovery rather than silently treated as agreed scope.' },
        { type: 'paragraph', text: 'Use the brief when comparing proposals and reviewing prototypes. If the work also involves approvals, assignments or editing business records, describe those workflows separately. Minor Group’s business dashboard development service can help turn this planning into a connected reporting and operational workspace.' },
        { type: 'link', text: 'Explore business dashboard development', to: '/services/business-dashboard-development' },
        { type: 'link', text: 'Compare dashboard development partners', to: '/blog/choose-dashboard-development-company' },
        { type: 'link', text: 'Decide between a custom dashboard and Power BI', to: '/blog/custom-dashboard-vs-power-bi' },
      ],
    },
  ],
  faqs: [
    { question: 'What is the difference between a dashboard requirement and a KPI?', answer: 'A KPI defines a measure, including its calculation and meaning. Dashboard requirements cover the wider system: users, decisions, data sources, filters, freshness, permissions, usability and acceptance tests. A complete brief needs both.' },
    { question: 'How many KPIs should the first dashboard include?', answer: 'Choose the measures needed for a specific set of decisions. There is no universal correct count. Give every proposed KPI an owner, a decision and an agreed definition; defer measures that have no clear use or reliable source.' },
    { question: 'Does a business dashboard need real-time data?', answer: 'Only when the decision requires it and the source systems can support it. Agree on the maximum acceptable delay for each use case. Daily planning and immediate operational alerts may need different refresh targets, with visible timestamps and failure states.' },
    { question: 'Can dashboard development start before all data is clean?', answer: 'Discovery and prototyping can start with representative, appropriately protected sample data. Identify quality gaps and their owners before committing to production calculations. Missing history or inconsistent identifiers may change what can be delivered and how results should be labeled.' },
  ],
  takeaway: 'Start with one real decision, document the KPIs behind it and prove the expected results with sample records. That shared brief makes scope, design reviews and acceptance much easier to judge.',
  relatedService: { label: 'Business dashboard development', to: '/services/business-dashboard-development' },
  relatedSlugs: ['choose-dashboard-development-company', 'custom-dashboard-vs-power-bi', 'automated-business-reporting'],
  serviceKeys: ['dashboard'],
  sources: [
    { title: 'PostgreSQL: Date/time types', url: 'https://www.postgresql.org/docs/current/datatype-datetime.html' },
    { title: 'OWASP: Authorization Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html' },
    { title: 'W3C WAI: Tables Tutorial', url: 'https://www.w3.org/WAI/tutorials/tables/' },
  ],
}

const wordCount = [article.quickAnswer, article.intro, ...article.sections.flatMap(section => [section.title, ...section.blocks.flatMap(block => block.text ? [block.text] : block.items || block.rows?.flat() || [])]), ...article.faqs.flatMap(faq => [faq.question, faq.answer]), article.takeaway].join(' ').split(/\s+/).length
article.readTime = `${Math.ceil(wordCount / 220)} min read`
export default article
