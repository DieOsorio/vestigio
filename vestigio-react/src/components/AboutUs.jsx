import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  const aboutUs = t("aboutUs.description", { returnObjects: true });

  const [isExpanded, setIsExpanded] = useState(true);

  // Verifica si el dispositivo es móvil al cargar
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsExpanded(false);
    }
  }, []);

  const handleToggleText = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <article id="nosotros" className="p-4">
      <h2 className="text-2xl font-semibold mb-2">{t("aboutUs.title")}</h2>
      <hr className="mb-4" />

      {/* Contenedor con altura dinámica */}
      <div
        className={`flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px]' : 'max-h-[100px]'
        }`}
      >
        {Object.values(aboutUs).map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>

      {/* Botón para expandir/cerrar en mobile */}
      {!isExpanded && (
        <button
          onClick={handleToggleText}
          className="mt-4 text-blue-500 hover:underline md:hidden"
        >
          Read More
        </button>
      )}
      {isExpanded && window.innerWidth < 768 && (
        <button
          onClick={handleToggleText}
          className="mt-4 text-blue-500 hover:underline md:hidden"
        >
          Read Less
        </button>
      )}
    </article>
  );
};

export default AboutUs;
