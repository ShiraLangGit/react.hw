// LanguageContext.jsx
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  // נשמור אובייקט עם שם השפה וקוד השפה עבור ה-API
  const [langData, setLangData] = useState({ name: "עברית", code: "he" });

  return (
    <LanguageContext.Provider value={{ langData, setLangData }}>
      {children}
    </LanguageContext.Provider>
  );
}
