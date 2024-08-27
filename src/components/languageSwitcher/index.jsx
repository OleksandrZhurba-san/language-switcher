import React, { useContext } from "react";
import MsgProvider from "../msgProvider";
import SwitchButton from "../switchButton";
import styles from "./styles.module.css";
import { LanguageContext } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <div className={styles.language_container}>
      {currentLanguage && <MsgProvider />}
      <SwitchButton />
    </div>
  );
}
