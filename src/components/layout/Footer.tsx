import { siteContent } from '../../data/siteContent'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation('footer')

  return (
    <footer className="theme-shell theme-border border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="theme-text-muted">{t('copyright', { brand: t('brand') })}</p>
        <p className="theme-text-muted">{t('description')}</p>
      </div>
    </footer>
  )
}
