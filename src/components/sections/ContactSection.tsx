import { useTranslation } from 'react-i18next'
import type { SocialLink } from '../../types'
import { SectionTitle } from '../ui/SectionTitle'

export function ContactSection() {
  const { t } = useTranslation('contactSection')

  const socialLinks = t('socialLinks', { returnObjects: true }) as SocialLink[]

  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
          />

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${t('email')}`}
              className="block text-lg theme-link transition"
            >
              {t('email')}
            </a>

            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block text-lg theme-link transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form className="theme-surface rounded-3xl p-8 shadow-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder={t('form.namePlaceholder')}
              className="theme-input rounded-2xl px-4 py-3 outline-none ring-0"
            />
            <input
              type="email"
              placeholder={t('form.emailPlaceholder')}
              className="theme-input rounded-2xl px-4 py-3 outline-none ring-0"
            />
          </div>

          <textarea
            rows={5}
            placeholder={t('form.messagePlaceholder')}
            className="theme-input mt-4 w-full rounded-2xl px-4 py-3 outline-none ring-0"
          />

          <button
            type="button"
            className="mt-6 rounded-full theme-button px-6 py-3 font-medium transition"
          >
            {t('form.button')}
          </button>
        </form>
      </div>
    </section>
  )
}
