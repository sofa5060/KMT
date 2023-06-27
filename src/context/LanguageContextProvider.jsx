import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const [contextLanguage, setLanguage] = useState("EN");

  const changeLanguage = (language) => {
    if (language !== "EN" && language !== "ES" && language !== "PT") return;
    setLanguage(language);
  };

  const renderContent = (option1, option2, option3) => {
    switch (contextLanguage) {
      case "EN":
        return option1;
      case "ES":
        return option2;
      case "PT":
        return option3;
      default:
        return option1;
    }
  };

  useEffect(() => {
    const lang = localStorage.getItem("language");
    console.log("Language loaded: ", lang);
    if (lang) changeLanguage(lang);
  }, []);

  useEffect(() => {
    localStorage.removeItem("language");
    localStorage.setItem("language", contextLanguage);
    console.log("Language changed to: ", contextLanguage);
  }, [contextLanguage]);

  return (
    <LanguageContext.Provider
      value={{ renderContent, changeLanguage, contextLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
