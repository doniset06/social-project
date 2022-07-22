import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  Fragment,
} from "react";
import { useHistory } from "react-router-dom";
import Card from "../UI/Card";
import UserItem from "../Components/login/UserItem";
import FormRegister from "../Components/login/FormRegister";
import {
  createNewUser,
  deleteMyUser,
  getAllCreatedUsers,
} from "../action/action-user";
import { initialStateUser, reducerFunctionUser } from "../reducer/reducer-user";
import Spinner from "../UI/Spinner";

import styles from "../Components/login/Login.module.css";
import { AuthContext } from "../auth/AuthContext";

function LoginPage(props) {
  const authCtx = useContext(AuthContext);
  const [userState, dispatch] = useReducer(
    reducerFunctionUser,
    initialStateUser
  );
  const [isNewUser, setIsNewUser] = useState(false);
  const localStorageUserID = localStorage.getItem("USER_LOGIN");
  const history = useHistory();
  const { user, users, error, isFetching, selectedUser, totalUser } = userState;

  const fetchApi = async () => {
    dispatch({ type: "SEND_REQUEST" });
    try {
      const response = await getAllCreatedUsers();
      dispatch({
        type: "GET_CREATED_USER",
        payload: { users: response.data, total: response.total },
      });
    } catch (error) {
      dispatch({
        type: "ERROR_SEND_REQUEST",
        payload: {
          msg: error.response,
          status: error.response,
        },
      });
    }
  };

  const submitFormHandler = async (submitedForm) => {
    const formData = {
      ...submitedForm,
    };
    setIsNewUser(false);
    dispatch({ type: "SEND_REQUEST" });
    try {
      const response = await createNewUser(formData);
      dispatch({ type: "SUCCESS_CREATE_NEW_USER", payload: response });
    } catch (error) {
      setIsNewUser(true);
      dispatch({
        type: "ERROR_SEND_REQUEST",
        payload: {
          msg: error.response.data,
          status: error.response.status,
        },
      });
    }
  };

  const deleteUserHandler = async () => {
    if (!selectedUser) return alert("Select user first");

    if (window.confirm("Sure want to delete this user?")) {
      dispatch({ type: "SEND_REQUEST" });
      try {
        const response = await deleteMyUser(selectedUser);
        dispatch({ type: "SUCCESS_DELETE_USER", payload: response });
      } catch (error) {
        dispatch({
          type: "ERROR_SEND_REQUEST",
          payload: {
            msg: error.response.data,
            status: error.response.status,
          },
        });
      }
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!selectedUser) return alert("Select user first");
    authCtx.onLogin(selectedUser);
  };

  const checkNewUserHandler = () => {
    if (totalUser === 20)
      return alert("Can't create new user because maximum user only 20");
    setIsNewUser((isNewUser) => !isNewUser);
  };

  const selectedUserHandler = (userId) => {
    dispatch({ type: "SELECTED_USER", payload: userId });
  };

  useEffect(() => {
    if (localStorageUserID !== null) {
      return history.push("/home");
    }
    fetchApi();
  }, [history, localStorageUserID]);

  return (
    <div className={`${styles.containerLogin} flexRow`}>
      {isFetching || !users ? (
        <Spinner />
      ) : (
        <Fragment>
          <Card className={`flexColumn ${styles.containerUser}`}>
            <h2 className={styles.headingTitle}>Login User</h2>
            <div className={styles.containerList}>
              {users.length > 0 ? (
                users.map((data) => (
                  <UserItem
                    key={data.id}
                    user={data}
                    selected={selectedUser}
                    onSelectUser={selectedUserHandler}
                  />
                ))
              ) : (
                <p className="centered">
                  User Not Found, Create one before login...
                </p>
              )}
            </div>
            <div className={styles.buttonContainer}>
              <button
                onClick={deleteUserHandler}
                className={`${styles.button} ${styles.buttonDelete}`}
              >
                Delete User
              </button>
              <button onClick={checkNewUserHandler} className={styles.button}>
                Add New User
              </button>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={loginHandler} className={styles.button}>
                Login
              </button>
            </div>
          </Card>

          {isNewUser && (
            <FormRegister onSubmitForm={submitFormHandler} error={error} />
          )}
        </Fragment>
      )}
    </div>
  );
}

export default LoginPage;
