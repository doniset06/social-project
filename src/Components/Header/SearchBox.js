import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

function SearchBox() {
  return (
    <div className={`${styles.searchContainer} ${styles.flexgrow2}`}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search post by tag..."
      />
      <button className={styles.searchBtn} type="submit" id="search-btn">
        <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
      </button>
    </div>
  );
}

export default SearchBox;
