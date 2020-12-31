import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import Navbar from "./components/layouts/Navbar";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Footer from "./components/layouts/Footer";

// To be able to use redux with react:
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layouts/Alert";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Alert />
        <Switch>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>

        <Footer />
      </Fragment>
    </Router>
  </Provider>
);
export default App;
