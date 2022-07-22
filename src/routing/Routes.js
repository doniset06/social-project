import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <Redirect to={"/login"} />
          </Route>
          <PrivateRoute path={"/home"} component={HomePage} />
          <PrivateRoute path={"/profile"} component={ProfilePage} />
          <Route path={"*"} component={NotFoundPage} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default Routes;
