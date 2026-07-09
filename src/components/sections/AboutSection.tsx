import { siteContent } from '../../data/siteContent'
import { SectionTitle } from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'

export function AboutSection() {
  const { t } = useTranslation('aboutSection')

  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
          />
        </div>

        <div className="theme-surface rounded-3xl p-8 shadow-2xl">
          <p className="text-lg leading-8 theme-text-muted">
            {t('panel.text')}
          </p>
        </div>
      </div>
    </section>
  )
}
