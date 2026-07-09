import { useTranslation } from 'react-i18next'

type SectionTitleProps = {
  eyebrow?: string
  title?: string
  description?: string
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  const { t } = useTranslation('sectionTitle')

  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.3em] theme-accent">
        {eyebrow ?? t('defaultEyebrow')}
      </p>
      <h2 className="mt-3 text-3xl font-semibold theme-text sm:text-4xl">
        {title ?? t('defaultTitle')}
      </h2>
      <p className="mt-4 text-lg leading-8 theme-text-muted">
        {description ?? t('defaultDescription')}
      </p>
    </div>
  )
}
