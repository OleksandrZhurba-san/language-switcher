import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./styles.module.css";
import Select from "react-select";

export default function SwitchButton() {
  const { changeLanguage, languages } = useContext(LanguageContext);
  const options = [
    { value: "English", label: "en" },
    { value: "German", label: "de" },
    { value: "Spanish", label: "es" },
  ];

  return (
    <>
      <Select
        className={styles.select_language}
        options={options}
        onChange={(event) => changeLanguage(event.value)}
      />
    </>
  );
}
