import React from 'react'
import FurnitureCard from './FurnitureCard'
import { useTranslation } from "react-i18next";

const images = import.meta.glob("../assets/images/furnitures/*.webp", { eager: true });

function Furnitures() {
  const {t} = useTranslation();
  const furnitureList = t("furnitures.furnitureCard", { returnObjects: true }); // Obtiene la lista de muebles
  
  return (
    <article id='muebles'>
        <h2>{t("furnitures.title")}</h2>
        <h3>
            <span>
            {t("furnitures.descriptionDesk")}
            </span>

            <span>
              {t("furnitures.descriptionMobile")}
            </span>
        </h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(furnitureList).map((furniture, index) => {
          const image = images[`../assets/images/furnitures/${index}.webp`]?.default; 
            
            return (
              <FurnitureCard
                key={index}
                title={furniture.title}
                description={furniture.description}
                image={image}
                link={furniture.link}
            />
            );
          })}
      </section>
    </article>
  )
}

export default Furnitures