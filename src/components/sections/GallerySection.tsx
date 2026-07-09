import { useTranslation } from 'react-i18next'
import type { GalleryItem } from '../../types'
import { SectionTitle } from '../ui/SectionTitle'

export function GallerySection() {
  const { t } = useTranslation('gallerySection')
  const items = t('items', { returnObjects: true }) as GalleryItem[]

  return (
    <section id="galeria" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-xl"
          >
            <div className="flex h-64 items-center justify-center overflow-hidden rounded-t-3xl bg-slate-800/70 p-4">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-6">
              <h3
                className="mt-2 text-xl font-semibold"
                style={{ color: 'var(--color-gold)' }}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
