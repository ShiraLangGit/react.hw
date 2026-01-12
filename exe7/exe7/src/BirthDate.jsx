import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

export default function BirthDate({ date }) {
  const { langData } = useContext(LanguageContext);
  const [translatedText, setTranslatedText] = useState("");

  const birthDate = new Date(date);
  const age = new Date().getFullYear() - birthDate.getFullYear();

  const formattedDate = birthDate.toLocaleDateString(
    langData.code === "he" ? "he-IL" : langData.code
  );

  useEffect(() => {
    const originalSentence = `מזל טוב! אתה בן ${age}. תאריך הלידה שלך הוא:`;

    if (langData.code === "he") {
      setTranslatedText(originalSentence);
      return;
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      originalSentence
    )}&langpair=he|${langData.code}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTranslatedText(data.responseData.translatedText);
      })
      .catch(() => setTranslatedText(originalSentence));
  }, [langData.code, age]);

  return (
    <div style={{ margin: "20px 0", textAlign: "center", fontSize: "1.2rem" }}>
      <p>{translatedText}</p>
      <p style={{ fontWeight: "bold" }}>{formattedDate}</p>
    </div>
  );
}
