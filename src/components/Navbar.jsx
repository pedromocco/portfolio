import { useState } from "react";
import { motion } from "motion/react"; // Corregido el import incorrecto de "motion/react"
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { navbarText } from "../texts";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const navbar = navbarText[language];
  const [isOpen, setIsOpen] = useState(false);

  // Variants para la animación del menú desplegable
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-2 px-8 text-white border border-white/5 z-50 ${
        isOpen ? "bg-amber-950" : "bg-black/20 backdrop-blur-md"
      } font-comfortaa text-sm`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo o Botón de Idioma */}
      <div className="flex items-center gap-2">
        {/* Ícono de idioma */}
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-full font-bold transition-all hover:text-amber-600 hover:bg-amber-600/20"
        >
          {language === "en" ? "EN" : "ES"}
        </button>
      </div>

      {/* Menú para pantallas grandes (md:flex) */}
      <ul className="hidden lg:flex items-center gap-2 font-semibold">
        {Object.entries(navbar).map(([key, value]) => (
          <li key={key}>
            <a
              href={`#${key}`} // Cambiado a "#" para evitar redirecciones innecesarias
              className="p-3 rounded-lg transition-all hover:text-amber-400 hover:bg-white/3"
            >
              {value}
            </a>
          </li>
        ))}
      </ul>

      {/* Botón de Hamburguesa para pantallas pequeñas */}
      <motion.div
        className="lg:hidden block text-3xl cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }} // Animación al hacer clic
      >
        {/* Ícono de hamburguesa animado */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
          animate={isOpen ? "open" : "closed"}
        >
          {/* Línea superior */}
          <motion.line
            x1="3"
            y1="7"
            x2="21"
            y2="7"
            variants={{
              open: {
                rotate: 45,
                translateY: 2, // Movimiento hacia abajo
                originX: "50%",
                originY: "50%",
              },
              closed: {
                rotate: 0,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Línea media */}
          <motion.line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Línea inferior */}
          <motion.line
            x1="3"
            y1="17"
            x2="21"
            y2="17"
            variants={{
              open: {
                rotate: -45,
                translateY: -5, // Movimiento hacia arriba
                 // Movimiento hacia arriba
                originX: "50%",
                originY: "50%",
              },
              closed: {
                rotate: 0,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
      </motion.div>

      {/* Menú desplegable para pantallas pequeñas */}
      <motion.div
        className={`absolute top-13 left-0 w-full bg-black/20 backdrop-blur-md flex flex-col items-center gap-6 font-semibold text-lg ${
          !isOpen && "hidden" // Ocultar el menú si no está abierto
        }`}
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        {Object.entries(navbar).map(([key, value]) => (
          <motion.li
            key={key}
            className="list-none w-full text-center p-4 hover:bg-black/30 hover:text-white transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
            onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
          >
            <a href={`#${key}`} className="w-full h-full block">
              {value}
            </a>
          </motion.li>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
