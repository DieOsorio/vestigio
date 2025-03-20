import { useTranslation } from "react-i18next";

const FurnitureCard = ({ title, description, image, link }) => {
  const {t} = useTranslation();
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a href={link} target="_blank" className="text-blue-500 hover:underline mt-2 inline-block">
          {t("furnitures.view")}
        </a>
      </div>
    </div>
  );
};

export default FurnitureCard;
