import React from "react";
import AllPost from "../Components/posts/AllPost";

import styles from "../Components/home/HomePage.module.css";
import MiniProfile from "../Components/home/MiniProfile";
import FriendList from "../Components/home/FriendList/FriendList";

function HomePage() {
  return (
    <div className={`${styles.HomeContainer} flexRow`}>
      <div className={`${styles.sideProfileContainer} flexColumn`}>
        <MiniProfile />
        <FriendList />
      </div>
      <AllPost />
    </div>
  );
}

export default HomePage;
