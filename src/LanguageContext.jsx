import React, { createContext, useState } from "react";

// Crear el contexto
export const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma inicial: inglés

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};