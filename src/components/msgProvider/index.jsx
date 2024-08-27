import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./styles.module.css";

export default function MsgProvider() {
  const { currentLanguage } = useContext(LanguageContext);
  return <p className={styles.msg}>{currentLanguage} has been selected</p>;
}
