import React, { useEffect } from "react";
import "./App.css";
import { Fragment } from "react";
import Navbar from "./Components/Header/Navbar";
import MainContent from "./Components/MainContent/MainContent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { getAllPost } from "./action/action-post.js";

library.add(fab, far, fas);

function App() {
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <MainContent />
    </Fragment>
  );
}

export default App;
