import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getAllPost } from "../../action/action-post";
import Spinner from "../../UI/Spinner";

import styles from "./posts.module.css";

function AllPost() {
  const [initialPost, setInitialPost] = useState(null);

  useEffect(() => {
    (async function () {
      const res = await getAllPost();
      setInitialPost(res);
    })();
  }, []);

  return (
    <div className={styles.postsSection}>
      {!initialPost ? (
        <Spinner />
      ) : (
        initialPost.map((data) => <PostItem key={data.id} data={data} />)
      )}
    </div>
  );
}

export default AllPost;
