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
        <div
          className="rounded-full border border-white/10 px-3 py-2 shadow-lg backdrop-blur"
          style={{ backgroundColor: 'var(--color-forest)' }}
        >
          <details className="relative z-50">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 text-sm text-slate-200">
              <img
                src={selectedLanguage.flag}
                alt={selectedLanguage.label}
                className="h-5 w-5 rounded-full object-cover"
              />
              <span>{selectedLanguage.label}</span>
              <span className="text-xs text-slate-400">▾</span>
            </summary>

            <div className="absolute right-0 z-50 mt-2 w-40 rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-xl backdrop-blur">
              {languages.map((language) => {
                const isActive = language.code === currentLanguage

                return (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => void i18n.changeLanguage(language.code)}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
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
      </div>

      <HomePage />
    </div>
  )
}
