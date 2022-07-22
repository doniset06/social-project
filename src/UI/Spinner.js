import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";

const Spinner = () => (
  <div className={styles.spinner}>
    <FontAwesomeIcon
      icon={["fas", "spinner"]}
      size="5x"
      color="#3f6ed4"
      pulse
    />
  </div>
);

export default Spinner;
