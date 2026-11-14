import software from './blog/custom-software-usa.js'
import website from './blog/business-website-usa.js'
export const posts = [software, website]
export const getPost = slug => posts.find(post => post.slug === slug)
export const formatPostDate = value => new Intl.DateTimeFormat('en-US', {year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(`${value}T12:00:00Z`))
