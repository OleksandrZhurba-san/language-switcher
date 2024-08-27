import "./App.css";
import React, { useEffect, useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import LanguageSwitcher from "./components/languageSwitcher";
import { languages } from "./utils/languageData";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState();
  function changeLanguage(language) {
    setCurrentLanguage(language);
  }
  useEffect(() => {
    setCurrentLanguage(currentLanguage);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ changeLanguage, languages, currentLanguage }}
    >
      <LanguageSwitcher />
    </LanguageContext.Provider>
  );
}

export default App;
