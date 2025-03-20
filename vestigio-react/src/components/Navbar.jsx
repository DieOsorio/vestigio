import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logos/brown-logo.webp"

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const sections = t("navBar.sections", { returnObjects: true });
    const flag = t("navBar.flag", { returnObjects: true });

    const [menuOpen, setMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const handleLanguageChange = (e) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
      setCurrentLang(newLang)
    }

    return (
        <header className="w-full">
            {/* Mobile Navbar */}
            <nav className="bg-[#1e1e1e] text-white p-4 md:hidden">
                <div className="flex justify-between items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        <div className="space-y-1">
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </div>
                    </button>

                    <img src={logo} alt="Logo" className="h-10" />

                    <div className="flex items-center">
                        <img src={flag.image} alt="Language" className="h-6 w-6 mr-2" />
                        <select
                        value={currentLang}
                        onChange={handleLanguageChange} 
                        className="bg-transparent text-white outline-none"
                        >
                            <option className="text-gray-900" value="es">Español</option>
                            <option className="text-gray-900" value="en">English</option>
                        </select>
                    </div>
                </div>

                {/* Menú Mobile */}
                {menuOpen && (
                    <ul className="mt-4 space-y-2 text-center">
                        {Object.entries(sections).map(([key, value]) => (
                            <li key={key}>
                                <a href={`#${key}`} className="block py-2 hover:text-gray-400">{value}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            {/* 🔹 Desktop Navbar */}
            <nav className="hidden md:flex justify-center items-center bg-[#1e1e1e] text-white p-4">
                <ul className="flex space-x-6 text-lg">
                    {Object.entries(sections).map(([key, value], index) => (
                        <li key={key} className={index === 2 ? "mr-16" : ""}>
                            <a href={`#${key}`} className="hover:text-gray-400">{value}</a>
                        </li>
                    ))}
                </ul>

                <a href="#home" className="absolute left-1/2 transform -translate-x-1/2">
                    <img src={logo} alt="Logo" className="h-12" />
                </a>

                <div className="absolute right-4 flex items-center">
                    <img src={flag.image} alt="Language" className="h-6 w-6 mr-2" />
                    <select
                    value={currentLang}
                    onChange={handleLanguageChange} 
                    className="bg-transparent text-white outline-none"
                    >
                        <option className="text-gray-900" value="es">Español</option>
                        <option className="text-gray-900" value="en">English</option>
                    </select>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
