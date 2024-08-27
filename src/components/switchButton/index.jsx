import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./styles.module.css";

export default function SwitchButton() {
  const { changeLanguage, languages } = useContext(LanguageContext);
  return (
    <select
      className={styles.select_language}
      onChange={(event) => changeLanguage(event.target.value)}
    >
      <option value="">select language</option>
      {languages.map((language, idx) => (
        <option value={language} key={idx}>
          {language}
        </option>
      ))}
    </select>
  );
}
