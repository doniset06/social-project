import React, { useEffect, useReducer, useState } from "react";
import { getMyProfile } from "../../action/action-profile";
import Card from "../../UI/Card";
import Spinner from "../../UI/Spinner";

import styles from "./Profile.module.css";

const initialState = {
  formObject: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: null,
    gender: "",
  },
  isFetching: false,
  formIsUpdate: false,
  error: [],
};

const reducerFunction = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SEND_REQUEST":
      return {
        ...state,
        isFetching: true,
      };
    case "GET_USER":
      return {
        ...state,
        formObject: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          phoneNumber: payload.phone,
          gender: payload.gender,
          ...payload,
        },
        isFetching: false,
      };
    case "ERROR":
      return {
        ...state,
        isFetching: false,
        error: payload,
      };

    default:
      return state;
  }
};

function ProfileForm() {
  const [userData, dispatch] = useReducer(reducerFunction, initialState);
  const [isFetching, setIsFetching] = useState(false);
  const [formIsUpdate, setFormIsUpdate] = useState(false);
  const userIDfromLocalStorage = localStorage.getItem("USER_LOGIN");

  const { formObject, error } = userData;

  const updateProfileHandler = (e) => {
    e.preventDefault();
    console.log("Form Submited");
  };

  const getUser = async () => {
    dispatch({ type: "SEND_REQUEST" });
    try {
      const data = await getMyProfile(userIDfromLocalStorage);
      console.log(data);
      dispatch({ type: "GET_USER", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response });
      console.log(error.response);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Card className={styles.containerForm}>
      {isFetching ? (
        <Spinner />
      ) : (
        <form className={styles.form} onSubmit={updateProfileHandler}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">
              First Name <span>:</span>
            </label>

            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={formObject.firstName}
              className={styles.gridLine}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">
              Last Name <span>:</span>
            </label>

            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={formObject.lastName}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              Email* <span>:</span>
            </label>

            <input
              id="email"
              type="text"
              placeholder="Email"
              value={formObject.email}
              disabled
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">
              Phone Number <span>:</span>
            </label>

            <input
              id="phoneNumber"
              type="number"
              placeholder="Phone Number"
              value={formObject.phoneNumber}
            />
          </div>
          <div className={styles.formGroup}>
            <label>
              Gender <span>:</span>
            </label>

            <div className={styles.containerRadioBtn}>
              <input id="valueRadio" value={formObject.gender} disabled />
              <label htmlFor="chooseMale">
                <input
                  id="chooseMale"
                  type="radio"
                  value="male"
                  name="gender"
                />
                Male
              </label>

              <label htmlFor="chooseFemale">
                <input
                  id="chooseFemale"
                  type="radio"
                  value="female"
                  name="gender"
                />
                Female
              </label>
            </div>
          </div>
          <p>*Email Can't be Updated</p>

          <button
            type="submit"
            className={styles.buttonUpdate}
            disabled={!formIsUpdate}
          >
            Update Profile
          </button>
        </form>
      )}
    </Card>
  );
}
export default ProfileForm;
