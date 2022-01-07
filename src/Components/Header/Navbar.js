import React from "react";
import styles from "./Header.module.css";
import SearchBox from "./SearchBox";

function Navbar() {
  return (
    <header>
      <nav className={styles.nav}>
        <h1 className={`${styles.title} ${styles.flexgrow1}`}>Social Media</h1>
        <SearchBox />
        <ul className={styles.flexgrow1}>
          <li className={styles.listItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Friends</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
