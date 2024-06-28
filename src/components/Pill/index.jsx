import React from "react";
import styles from "./Pill.module.css";

const Pill = (props) => {
  return <div className={styles.pill}>{props.text}</div>;
};

export default Pill;
