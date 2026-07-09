import { siteContent } from '../../data/siteContent'
import { useTranslation } from 'react-i18next'

const links = [
  { key: 'home', href: '#inicio' },
  { key: 'about', href: '#nosotros' },
  { key: 'gallery', href: '#galeria' },
  { key: 'contact', href: '#contacto' },
]

export function Header() {
  const { t } = useTranslation('header')

  return (
    <header
      className="sticky top-0 z-20 border-b-1 backdrop-blur"
      style={{ backgroundColor: 'var(--color-forest)', borderBottomColor: 'var(--color-gold)' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center">
          <img
            src="/images/VR.png"
            alt={t('brand')}
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden gap-6 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="theme-link transition">
              {t(`links.${link.key}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
