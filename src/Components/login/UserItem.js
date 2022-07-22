import React from "react";
import male from "../../assets/male.jpg";
import female from "../../assets/female.jpg";
import CircleImage from "../../UI/CircleImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profileStyles from "../home/HomePage.module.css";
import styles from "./Login.module.css";

const UserItem = ({ user, selected, onSelectUser }) => {
  const selectedHandler = () => {
    onSelectUser(user.id);
  };

  const selectedId = user.id === selected;

  return (
    <div
      className={`${styles.containerUserList} flexRow `}
      onClick={selectedHandler}
    >
      <CircleImage
        src={user.picture ? user.picture : user.title === "mr" ? male : female}
        alt="Profile"
        className={profileStyles.imgFriend}
      />
      <h3 className={profileStyles.nameFriend}>
        {user.firstName} {user.lastName}
      </h3>
      {selectedId && (
        <FontAwesomeIcon
          icon={["fas", "check-circle"]}
          size="lg"
          color="#3b5998"
        />
      )}
    </div>
  );
};

export default UserItem;
