import React, { Fragment } from "react";
import "./App.css";
import { Landing } from "./components/Layouts/Landing";
import { Navbar } from "./components/Layouts/Navbar";

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
  </Fragment>
);
export default App;
