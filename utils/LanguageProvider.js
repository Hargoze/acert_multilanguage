import { createContext, useState } from "react";

export const defaultLocale = "en";
export const locales = ["fr", "en"];
export const LanguageContext = createContext([]);

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState();

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};