import React from "react";
import styles from "./Pill.module.css";
import cx from "classnames";

const Pill = (props) => {
  return (
    <div className={cx(styles.pill, props.additionalClassnames)}>
      {props.text}
    </div>
  );
};

export default Pill;
