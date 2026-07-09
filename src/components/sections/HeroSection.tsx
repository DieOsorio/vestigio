import { siteContent } from '../../data/siteContent'
import { Button } from '../ui/Button'
import { useTranslation } from 'react-i18next'

export function HeroSection() {
  const { t } = useTranslation('heroSection')

  const primaryCta = t('cta.primary', { returnObjects: true }) as {
    label: string
    href: string
  }
  const secondaryCta = t('cta.secondary', { returnObjects: true }) as {
    label: string
    href: string
  }

  return (
    <section id="inicio" className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
      <p className="text-sm uppercase tracking-[0.35em] theme-accent">
        {t('eyebrow')}
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight theme-text sm:text-5xl lg:text-6xl">
        {t('title')}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 theme-text-muted">
        {t('description')}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={primaryCta.href}>{primaryCta.label}</Button>
        <Button href={secondaryCta.href} className="bg-transparent text-slate-200 hover:bg-white/10">
          {secondaryCta.label}
        </Button>
      </div>
    </section>
  )
}
