import React, { Fragment, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../UI/Card";
import Spinner from "../../../UI/Spinner";

import { getAllUser } from "../../../action/action-user";
import FriendListItem from "./FriendListItem";
import { AuthContext } from "../../../auth/AuthContext";

import styles from "../HomePage.module.css";

function FriendList(props) {
  const [listUser, setListUser] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const userContext = useContext(AuthContext);

  const fetchingListUser = async (pageNumber) => {
    const response = await getAllUser(pageNumber, true);
    setListUser(response);
    setIsFetching(false);
  };
  useEffect(() => {
    fetchingListUser(pageNumber);
  }, [pageNumber]);

  const previousButtonHandler = () => {
    setIsFetching(true);
    setPageNumber(pageNumber - 1);
    setIsLastPage(false);
  };
  const nextButtonHandler = () => {
    const lastPage = Math.ceil(listUser.total / listUser.limit);
    setIsFetching(true);
    if (pageNumber + 1 === lastPage) {
      setIsLastPage(true);
    }
    setPageNumber(pageNumber + 1);
  };

  return (
    <Card className={styles.sideProfileItem}>
      <div className={`${styles.containerList} flexColumn`}>
        {isFetching ? (
          <Spinner />
        ) : (
          listUser.data
            .filter((userId) => userId.id !== userContext.userId)
            .map((user) => {
              return <FriendListItem key={user.id} user={user} />;
            })
        )}
      </div>
      <div
        className={`${styles.buttonContainer} ${
          isLastPage ? styles.flexStart : styles.flexEnd
        }`}
      >
        {pageNumber === 1 ? (
          <Fragment></Fragment>
        ) : (
          <button
            className={styles.button}
            type="button"
            onClick={previousButtonHandler}
          >
            <FontAwesomeIcon
              icon={["fas", "arrow-left"]}
              size="2x"
              color="#3b5998"
            />
          </button>
        )}

        <p>{pageNumber}</p>
        {isLastPage ? (
          <Fragment></Fragment>
        ) : (
          <button
            className={styles.button}
            type="button"
            onClick={nextButtonHandler}
          >
            <FontAwesomeIcon
              icon={["fas", "arrow-right"]}
              size="2x"
              color="#3b5998"
            />
          </button>
        )}
      </div>
    </Card>
  );
}

export default FriendList;
