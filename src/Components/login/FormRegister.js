import React, { useState } from "react";
import Card from "../../UI/Card";

import styles from "./Login.module.css";

const initialState = {
  title: "male",
  firstName: "",
  lastName: "",
  gender: "male",
  email: "",
  phone: "",
  picture: "",
};

function FormRegister(props) {
  const [formData, setFormData] = useState(initialState);
  const { onSubmitForm, error } = props;

  const { firstName, lastName, email, phone } = formData;

  const submitHandlerForm = (e) => {
    e.preventDefault();

    if (!firstName || !lastName)
      return alert("Must Filled FirstName and LastName");

    if (!email.includes("@")) return alert("Wrong Email Format");

    if (phone.length < 5) return alert("Minimum Phone Number is 5 Number ");

    onSubmitForm(formData);
    setFormData(initialState);
  };

  const changeInputHandler = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        title:
          e.target.name === "gender"
            ? e.target.value === "male"
              ? "mr"
              : "ms"
            : "mr",
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Card className={styles.containerForm}>
      <h2 className={styles.headingTitle}>Create New User</h2>
      {error?.msg.data.email && (
        <p className="centered warning">{`${error?.msg.data.email}!`}</p>
      )}
      <form className={styles.form} onSubmit={submitHandlerForm}>
        <div className={styles.formControls}>
          <div className="flexRow">
            <div className={styles.formGroup}>
              <label htmlFor="inputFirstName">First Name :</label>
              <input
                id="inputFirstName"
                placeholder="Your First Name..."
                type="text"
                value={firstName}
                name="firstName"
                onChange={changeInputHandler}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="inputLastName">Last Name :</label>
              <input
                id="inputLastName"
                placeholder="Your Last Name..."
                type="text"
                name="lastName"
                value={lastName}
                onChange={changeInputHandler}
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="inputEmail">Email :</label>
            <input
              id="inputEmail"
              type="email"
              placeholder="Your Email..."
              name="email"
              value={email}
              onChange={changeInputHandler}
              required
            />
          </div>
          <div className="flexRow">
            <div className={styles.formGroup}>
              <label htmlFor="inputPhoneNumber">Phone Number :</label>
              <input
                id="inputPhoneNumber"
                placeholder="Your Phone Number..."
                name="phone"
                value={phone}
                minLength="5"
                onChange={changeInputHandler}
                type="number"
                required
              />
            </div>
            <div className={styles.formRadioButton}>
              <label>Gender: </label>
              <label htmlFor="chooseMale">
                <input
                  id="chooseMale"
                  type="radio"
                  value="male"
                  name="gender"
                  onChange={changeInputHandler}
                  defaultChecked
                />
                Male
              </label>

              <label htmlFor="chooseFemale">
                <input
                  id="chooseFemale"
                  type="radio"
                  value="female"
                  onChange={changeInputHandler}
                  name="gender"
                />
                Female
              </label>
            </div>
          </div>
          <div className={styles.formAction}>
            <button type="submit" className={styles.button}>
              Create User
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default FormRegister;
