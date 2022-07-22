import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...restOfProps }) {
  const UserIDLocalStorage = localStorage.getItem("USER_LOGIN");
  return (
    <Route
      {...restOfProps}
      render={(props) => {
        return UserIDLocalStorage !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
