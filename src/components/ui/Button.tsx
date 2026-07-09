import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type ButtonProps = {
  children: ReactNode
  href?: string
  className?: string
  ariaLabel?: string
}

export function Button({ children, href, className = '', ariaLabel }: ButtonProps) {
  const { t } = useTranslation('button')
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition'

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel ?? t('defaultAriaLabel')}
        className={`${baseClasses} theme-button ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      aria-label={ariaLabel ?? t('defaultAriaLabel')}
      className={`${baseClasses} theme-button ${className}`}
    >
      {children}
    </button>
  )
}
