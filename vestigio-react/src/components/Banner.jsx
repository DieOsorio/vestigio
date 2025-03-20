import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Banner = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);

  // Establecemos el estado según el idioma
  useEffect(() => {
    setIsEnglish(i18n.language === 'en');
  }, [i18n.language]);

  return (
    <div className="relative">
      {/* Desktop Banner */}
      <img
        src={
          isEnglish
            ? '/images/banners/bannerEN.webp'
            : '/images/banners/banner.webp'
        }
        alt="Desktop Banner"
        className="hidden md:block w-full"
      />

      {/* Mobile Banner */}
      <img
        src={
          isEnglish
            ? '/images/banners/mobileBannerEN.webp'
            : '/images/banners/mobileBanner.webp'
        }
        alt="Mobile Banner"
        className="block md:hidden w-full"
      />

      {/* Social Media Links */}
      <div className="absolute top-0 right-0 p-4 flex space-x-4">
        <a
          className="icon-link ig"
          href="https://www.instagram.com/vestigio.restauraciones/"
          target="_blank"
          rel="noreferrer"
        >
          {/* Aquí puedes colocar tu icono de Instagram */}
          Instagram
        </a>
        <a
          className="icon-link wp"
          href="https://wa.me/59899256682/"
          target="_blank"
          rel="noreferrer"
        >
          {/* Aquí puedes colocar tu icono de WhatsApp */}
          WhatsApp
        </a>
        <a
          className="icon-link fb"
          href="https://www.facebook.com/vestigio.restauraciones/"
          target="_blank"
          rel="noreferrer"
        >
          {/* Aquí puedes colocar tu icono de Facebook */}
          Facebook
        </a>
        <a
          className="icon-link pt"
          href="https://pinterest.com/vestigiorestauraciones/"
          target="_blank"
          rel="noreferrer"
        >
          {/* Aquí puedes colocar tu icono de Pinterest */}
          Pinterest
        </a>
      </div>
    </div>
  );
};

export default Banner;
