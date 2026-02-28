/**
 * SectionTitle component
 * @param {string} label - small eyebrow label above title
 * @param {string} title - main heading
 * @param {string} subtitle - optional subtitle/description
 * @param {string} align - 'left' | 'center'
 * @param {boolean} light - use light (white) text for dark backgrounds
 */
export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const textColor = light ? 'text-white' : 'text-gray-900'
  const subtitleColor = light ? 'text-gray-300' : 'text-gray-500'
  const labelColor = light ? 'text-gray-400' : 'text-gray-500'

  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {label && (
        <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${labelColor}`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
