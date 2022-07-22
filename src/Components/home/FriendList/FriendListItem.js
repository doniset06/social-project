import React from "react";
import CircleImage from "../../../UI/CircleImage";
import male from "../../../assets/male.jpg";

import styles from "../HomePage.module.css";

const FriendListItem = ({ user }) => {
  return (
    <div className={`${styles.containerItemList} flexRow`}>
      <CircleImage
        src={user.picture ? user.picture : male}
        alt="Profile"
        className={styles.imgFriend}
      />
      <h3 className={styles.nameFriend}>
        {user.firstName} {user.lastName}
      </h3>
    </div>
  );
};

export default FriendListItem;
