// ChooseLanguage.jsx
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function ChooseLanguage() {
  const { setLangData } = useContext(LanguageContext);

  const handleChange = (e) => {
    const selected = e.target.value;
    const codes = { עברית: "he", אנגלית: "en", צרפתית: "fr" };
    setLangData({ name: selected, code: codes[selected] });
  };

  return (
    <select onChange={handleChange}>
      <option value="עברית">עברית</option>
      <option value="אנגלית">English</option>
      <option value="צרפתית">Français</option>
    </select>
  );
}
