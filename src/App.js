import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import LoginPage from "./pages/LoginPage";

// Initialization Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Routes from "./routing/Routes";
library.add(fab, far, fas);

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path={"/login"} component={LoginPage} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  );
}

export default App;
