/**
 * Card component
 * @param {string} icon - emoji or icon character
 * @param {string} title - card heading
 * @param {string} description - card body text
 * @param {string[]} items - optional bullet list items
 * @param {string} note - optional small note at bottom
 * @param {string} variant - 'default' | 'bordered' | 'dark'
 * @param {string} className - additional classes
 */
export default function Card({
  icon,
  title,
  description,
  items = [],
  note,
  variant = 'default',
  className = '',
}) {
  const variants = {
    default: 'bg-white border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-200',
    bordered: 'bg-white border-2 border-sky-200 hover:border-sky-500',
    dark: 'bg-sky-900 text-white border border-sky-800',
  }

  const titleColor = variant === 'dark' ? 'text-white' : 'text-sky-900'
  const descColor = variant === 'dark' ? 'text-sky-200' : 'text-sky-600'
  const itemColor = variant === 'dark' ? 'text-sky-100' : 'text-sky-700'
  const dotColor = variant === 'dark' ? 'bg-sky-400' : 'bg-sky-400'

  return (
    <div className={`rounded-xl p-6 transition-all duration-200 ${variants[variant]} ${className}`}>
      {icon && (
        <div className="text-3xl mb-4">{icon}</div>
      )}
      <h3 className={`text-lg font-bold mb-2 ${titleColor}`}>{title}</h3>
      {description && (
        <p className={`text-sm leading-relaxed mb-3 ${descColor}`}>{description}</p>
      )}
      {items.length > 0 && (
        <ul className="space-y-1.5 mt-3">
          {items.map((item, i) => (
            <li key={i} className={`flex items-start gap-2 text-sm ${itemColor}`}>
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${dotColor}`} />
              {item}
            </li>
          ))}
        </ul>
      )}
      {note && (
        <p className={`text-xs mt-4 italic ${descColor}`}>{note}</p>
      )}
    </div>
  )
}