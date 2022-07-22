import React, { Fragment, useEffect, useState } from "react";
import { getMyProfile } from "../../action/action-profile";
import Card from "../../UI/Card";
import CircleImage from "../../UI/CircleImage";
import Spinner from "../../UI/Spinner";

import male from "../../assets/male.jpg";
import female from "../../assets/female.jpg";

import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

function MiniProfile() {
  const [profileData, setProfileData] = useState(null);
  const userIdFromLocalStorage = localStorage.getItem("USER_LOGIN");

  const fetchingProfile = async (userId) => {
    const resData = await getMyProfile(userId);
    setProfileData(resData);
  };

  useEffect(() => {
    fetchingProfile(userIdFromLocalStorage);
  }, [userIdFromLocalStorage]);

  return (
    <Card className={`${styles.sideProfileItem} flexRow`}>
      {!profileData ? (
        <Spinner />
      ) : (
        <Fragment>
          <CircleImage
            src={
              profileData.picture
                ? profileData.picture
                : profileData.gender === "male"
                ? male
                : female
            }
            alt="Profile"
            className={"imgProfile"}
          />
          <div className={`flexColumn ${styles.infoProfile}`}>
            <h3>
              {profileData.firstName} {profileData.lastName}
            </h3>

            <Link to={"/profile"} className={styles.btnProfile}>
              Profile
            </Link>
          </div>
        </Fragment>
      )}
    </Card>
  );
}

export default MiniProfile;
