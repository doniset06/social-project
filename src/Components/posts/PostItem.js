import React, { useState } from "react";
import Card from "../../UI/Card";
import CircleImage from "../../UI/CircleImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../config";

import styles from "./posts.module.css";

const PostItem = ({ data }) => {
  const [isLike, setIsLike] = useState(false);

  const likesHandler = () => {
    setIsLike((prevState) => !prevState);
  };
  return (
    <Card className={styles.postSection}>
      <div className="flexRow">
        <CircleImage
          src={data.owner.picture}
          alt="Profile"
          className={styles.imgProfile}
        />
        <div className="flexColumn">
          <h3 className={styles.name} defaultValue={data.owner.id}>
            {data.owner.firstName} {data.owner.lastName}
          </h3>
          <p className={styles.date}>{formatDate(data.publishDate)}</p>
          <p className={styles.caption}>{data.text}</p>
          <img src={data.image} alt="Post" className={styles.postPhoto} />
          <p className={styles.tagPost}>
            Tags:
            {data.tags.map((item, index) => (
              <em key={index}>{` #${item}  `}</em>
            ))}
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonItem} onClick={likesHandler}>
          <FontAwesomeIcon
            icon={[isLike ? "fas" : "far", "heart"]}
            size="lg"
            color="#FE2C54"
          />
          <span
            style={{
              color: isLike ? "blue" : "black",
            }}
          >
            {data.likes} Like
          </span>
        </button>
        <button className={styles.buttonItem}>
          <FontAwesomeIcon
            icon={["far", "comment-dots"]}
            size="lg"
            color="blue"
          />
          <span>21 Comment</span>
        </button>
      </div>
    </Card>
  );
};

export default PostItem;
