import React from "react";
import { Switch } from "react-router-dom";
import AllPost from "../Components/posts/AllPost";

import styles from "../Components/profiles/Profile.module.css";
import ProfileForm from "../Components/profiles/ProfileForm";
import ProfileNavigate from "../Components/profiles/ProfileNavigate";
import PrivateRoute from "../routing/PrivateRoute";

function ProfilePage() {
  return (
    <section className={`${styles.container} flexRow`}>
      <ProfileNavigate />
      <Switch>
        <PrivateRoute exact path={"/profile"} component={AllPost} />
        <PrivateRoute path={"/profile/edit-profile"} component={ProfileForm} />
      </Switch>
    </section>
  );
}

export default ProfilePage;
