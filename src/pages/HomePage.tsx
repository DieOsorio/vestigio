import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { AboutSection } from '../components/sections/AboutSection'
import { ContactSection } from '../components/sections/ContactSection'
import { GallerySection } from '../components/sections/GallerySection'
import { HeroSection } from '../components/sections/HeroSection'

export default function HomePage() {
  return (
    <div className="min-h-screen theme-shell">
      <Header />
      <main>
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
