// App.jsx
import LanguageContextProvider from "./LanguageContext";
import ChooseLanguage from "./ChooseLanguage";
import BirthDate from "./BirthDate";
import GreetingsList from "./GreetingsList";

function App() {
  const greetings = ["יום הולדת שמח", "עד 120 ם", "המון בריאות ואושר"];

  return (
    <LanguageContextProvider>
      <div style={{ direction: "rtl", textAlign: "center", padding: "20px" }}>
        <ChooseLanguage />
        <BirthDate date="2015-11-20" />
        <GreetingsList greetings={greetings} />
      </div>
    </LanguageContextProvider>
  );
}

export default App;
