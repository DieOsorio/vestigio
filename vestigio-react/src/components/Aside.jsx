import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Aside = () => {
  const {t} = useTranslation();  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar el scroll y la resolución de la pantalla
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Escuchar el evento scroll
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Comprobar la resolución inicial
    handleResize();

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mostrar el Aside solo cuando no es móvil y el scroll ha pasado un umbral
  if (isMobile) return null; // No mostrar el Aside en móviles

  return (
    <aside
      className={`fixed top-0 left-0 w-64 bg-white p-5 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'block' : 'hidden'
      }`}
    >
      <nav>
        <ul>
          <li>
            <a href="#home" className="text-lg font-semibold">{t("navBar.sections.home")}</a>
          </li>
          <li>
            <a href="#muebles" className="text-lg font-semibold">{t("navBar.sections.furnitures")}</a>
          </li>
          <li>
            <a href="#nosotros" className="text-lg font-semibold">{t("navBar.sections.aboutUs")}</a>
          </li>
          <li>
            <a href="#contacto" className="text-lg font-semibold">{t("navBar.sections.contactUs")}</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
