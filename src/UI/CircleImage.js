import React from "react";
import styles from "./Styles.module.css";

function CircleImage({ src, alt, className }) {
  return (
    <img src={src} alt={alt} className={`${styles.circleImg} ${className}`} />
  );
}

export default CircleImage;
