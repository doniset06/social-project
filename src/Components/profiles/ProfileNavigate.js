import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

import Card from "../../UI/Card";
import CircleImage from "../../UI/CircleImage";
import male from "../../assets/male.jpg";
import styles from "./Profile.module.css";

function ProfileNavigate() {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={`${styles.profileNavigateContainer} flexColumn`}>
      <CircleImage src={male} alt="Profle" />
      <p>Doni Setiawan</p>
      <nav className={styles.nav}>
        <ul className={styles.unorderedList}>
          <li className={styles.listItem}>
            <Link to={"/profile"} className={styles.listName}>
              Post
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to={"/profile/edit-profile"} className={styles.listName}>
              Edit Profile
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.btnLogout} onClick={authCtx.onLogout}>
        Logout
      </button>
    </Card>
  );
}

export default ProfileNavigate;
