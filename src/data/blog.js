import software from './blog/custom-software-usa.js'
import website from './blog/business-website-usa.js'
import company from './blog/choose-dashboard-company.js'
import requirements from './blog/reporting-dashboard-requirements.js'
import platform from './blog/custom-dashboard-vs-power-bi.js'
import reporting from './blog/automated-business-reporting.js'
import dashboardCost from './blog/custom-dashboard-development-cost.js'
export const posts = [dashboardCost, company, requirements, platform, reporting, software, website]
export const getPost = slug => posts.find(post => post.slug === slug)
export const getRelatedPosts = post => {
  const preferred = (post.relatedSlugs || []).map(getPost).filter(Boolean)
  return [...preferred, ...posts.filter(item => item.slug !== post.slug && !preferred.includes(item))].slice(0, 3)
}
export const formatPostDate = value => new Intl.DateTimeFormat('en-US', {year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(`${value}T12:00:00Z`))
