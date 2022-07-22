import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.css";

function SearchBox() {
  return (
    <div className={`${styles.searchContainer} ${styles.flexgrow2}`}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search post by tag..."
      />
      <button className={styles.searchBtn} id="search-btn">
        <FontAwesomeIcon icon={["fas", "search"]} size="lg" color="white" />
      </button>
    </div>
  );
}

export default SearchBox;
