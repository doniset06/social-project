import React from "react";
import Card from "../../UI/Card";
// import female from "../../assets/female.jpg";
import male from "../../assets/male.jpg";
import AllPost from "./posts/AllPost";
import CircleImage from "../../UI/CircleImage";

import styles from "./MainContent.module.css";
import globalStyles from "../../UI/Styles.module.css";

const FriendList = () => {
  return (
    <div className={globalStyles.flexRow}>
      <CircleImage src={male} alt="Profile" className={styles.imgFriend} />
      <h3 className={styles.nameFriend}>Doni setiawan</h3>
    </div>
  );
};

function MainContent() {
  return (
    <section className={styles.container}>
      <div
        className={`${styles.sideProfileContainer} ${globalStyles.flexColumn}`}
      >
        <Card className={`${styles.sideProfileItem} ${globalStyles.flexRow}`}>
          <CircleImage src={male} alt="Profile" className={styles.imgProfile} />
          <div className={`${globalStyles.flexColumn} ${styles.infoProfile}`}>
            <h3>Doni setiawan</h3>
            <p>Tangerang Selatan</p>
            <button type="button" className={styles.btnProfile}>
              Profile
            </button>
          </div>
        </Card>
        <Card className={`${styles.sideProfileItem}`}>
          <FriendList />
        </Card>
      </div>
      <AllPost />
    </section>
  );
}

export default MainContent;
