/**
 * Card component
 * @param {string} icon - emoji or icon character
 * @param {string} title - card heading
 * @param {string} description - card body text
 * @param {string[]} items - optional bullet list items
 * @param {string} note - optional small note at bottom
 * @param {string} variant - 'default' | 'bordered' | 'dark'
 */
export default function Card({
  icon,
  title,
  description,
  items = [],
  note,
  variant = 'default',
}) {
  const variants = {
    default: 'bg-white border border-gray-100 shadow-sm hover:shadow-md',
    bordered: 'bg-white border-2 border-gray-200 hover:border-gray-900',
    dark: 'bg-gray-900 text-white border border-gray-800',
  }

  const titleColor = variant === 'dark' ? 'text-white' : 'text-gray-900'
  const descColor = variant === 'dark' ? 'text-gray-400' : 'text-gray-500'
  const itemColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600'
  const dotColor = variant === 'dark' ? 'bg-gray-600' : 'bg-gray-300'

  return (
    <div className={`rounded-xl p-6 transition-all duration-200 ${variants[variant]}`}>
      {icon && (
        <div className="text-2xl mb-4">{icon}</div>
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
