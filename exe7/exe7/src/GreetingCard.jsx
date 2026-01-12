// GreetingCard.jsx
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

export default function GreetingCard({ originalText }) {
  const { langData } = useContext(LanguageContext);
  const [translatedText, setTranslatedText] = useState(originalText);

  useEffect(() => {
    if (langData.code === "he") {
      setTranslatedText(originalText);
      return;
    }

    // סעיף 8: שימוש ב-API לתרגום
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      originalText
    )}&langpair=he|${langData.code}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTranslatedText(data.responseData.translatedText))
      .catch(() => setTranslatedText("Translation Error"));
  }, [langData, originalText]);

  return (
    <div
      style={{
        border: "2px solid #3498db",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#ecf0f1",
        display: "inline-block",
      }}
    >
      {translatedText}
    </div>
  );
}
