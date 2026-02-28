import { Link } from 'react-router-dom'

/**
 * Button component
 * @param {string} variant - 'primary' | 'secondary' | 'outline'
 * @param {string} to - internal route (renders as Link)
 * @param {string} href - external URL (renders as <a>)
 * @param {string} size - 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  size = 'md',
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-900',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-300',
    outline: 'bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900',
    'outline-white': 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 focus:ring-white',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
