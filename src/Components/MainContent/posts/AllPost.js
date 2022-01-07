import React from "react";
import Card from "../../../UI/Card";
import CircleImage from "../../../UI/CircleImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./posts.module.css";
import globalStyles from "../../../UI/Styles.module.css";

const PostItem = () => {
  const isLike = false;

  return (
    <Card className={styles.postSection}>
      <div className={globalStyles.flexRow}>
        <CircleImage
          src="https://randomuser.me/api/portraits/med/women/5.jpg"
          alt="Profile"
          className={styles.imgProfile}
        />
        <div className={globalStyles.flexColumn}>
          <h3 className={styles.name}>Margarita Vicente</h3>
          <p className={styles.date}>2022-01-01 00:01</p>
          <p className={styles.caption}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            volutpat metus ac posuere rutrum. Aenean commodo urna eget enim
            varius ultricies. Nullam suscipit magna nibh, sit amet vulputate
            risus euismod sit amet. Suspendisse sed accumsan lorem, vitae
            euismod velit. Morbi quis velit bibendum tellus vehicula venenatis.
            Fusce malesuada congue magna, in volutpat enim semper sit amet.
            Donec nec accumsan nisl.
          </p>
          <img
            src="https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg"
            alt="Post"
            className={styles.postPhoto}
          />
          <p className={styles.tagPost}>
            Tags: <em>#dog</em>
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonItem}>
          <FontAwesomeIcon
            icon={[isLike ? "fas" : "far", "thumbs-up"]}
            size="lg"
            color="blue"
          />
          <p
            style={{
              color: isLike ? "blue" : "black",
            }}
          >
            21 Like
          </p>
        </button>
        <button className={styles.buttonItem}>
          <FontAwesomeIcon
            icon={["far", "comment-dots"]}
            size="lg"
            color="blue"
          />
          <p>21 Comment</p>
        </button>
      </div>
    </Card>
  );
};

function AllPost() {
  return (
    <div className={styles.postsSection}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default AllPost;
