import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import styles from "./Header.module.css";
import SearchBox from "./SearchBox";

function Navbar() {
  const authCtx = useContext(AuthContext);

  return (
    <header>
      <nav className={styles.nav}>
        <h1 className={`${styles.title} ${styles.flexgrow1}`}>Social Media</h1>
        <SearchBox />
        <ul className={styles.flexgrow1}>
          <li className={styles.listItem}>
            <Link to={"/home"}>Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link to={"/home"}>Friends</Link>
          </li>
          <li className={styles.listItem}>
            <button onClick={authCtx.onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
