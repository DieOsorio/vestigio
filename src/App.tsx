import { useTranslation } from 'react-i18next'
import HomePage from './pages/HomePage'

export default function App() {
  const { i18n } = useTranslation('app')

  const languages = [
    { code: 'es', label: 'Español', flag: '/images/es.webp' },
    { code: 'en', label: 'English', flag: '/images/en.webp' },
  ] as const

  const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es'
  const selectedLanguage =
    languages.find((language) => language.code === currentLanguage) ?? languages[0]

  return (
    <div className="min-h-screen theme-shell">
      <div className="mx-auto flex max-w-7xl justify-end px-6 py-4">
        <details className="relative" style={{ zIndex: 1000 }}>
          <summary
            className="flex cursor-pointer list-none items-center gap-2 rounded-full border px-3 py-2 text-sm transition"
            style={{
              backgroundColor: 'var(--color-forest)',
              borderColor: 'var(--color-mid)',
              color: 'var(--color-cream)',
            }}
          >
            <img
              src={selectedLanguage.flag}
              alt={selectedLanguage.label}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span>{selectedLanguage.label}</span>
            <span className="text-xs text-[var(--color-sand)]">▾</span>
          </summary>

          <div
            className="absolute right-0 mt-2 w-44 rounded-sm border p-2 shadow-2xl backdrop-blur"
            style={{
              zIndex: 1050,
              backgroundColor: 'rgba(47, 62, 52, 0.95)',
              borderColor: 'var(--color-mid)',
            }}
          >
            {languages.map((language) => {
              const isActive = language.code === currentLanguage

              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => void i18n.changeLanguage(language.code)}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition"
                  style={{
                    backgroundColor: isActive ? 'rgba(200, 160, 104, 0.18)' : 'transparent',
                    color: isActive ? 'var(--color-white)' : 'var(--color-cream)',
                  }}
                >
                  <img
                    src={language.flag}
                    alt={language.label}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  <span>{language.label}</span>
                </button>
              )
            })}
          </div>
        </details>
      </div>

      <HomePage />
    </div>
  )
}
