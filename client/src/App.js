import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import Navbar from "./components/layouts/Navbar";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";

// To be able to use redux with react:
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layouts/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./components/layouts/routing/PrivateRoute";
import User from "./components/auth/User";
import Classes from "./components/classes/Classes";
import Quizzes from "./components/quizzes/Quizzes";
import AttemptedUnattemptedQuizzes from "./components/quizzes/AttemptedUnattemptedQuizzes";
import Questions from "./components/questions/Questions";
import CreateQuiz from "./components/quizzes/CreateQuiz";

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <PrivateRoute exact path="/user" component={User} />
            <PrivateRoute exact path="/classes" component={Classes} />
            <PrivateRoute exact path="/quizzes" component={Quizzes} />
            <PrivateRoute
              exact
              path="/quizzes/student"
              component={AttemptedUnattemptedQuizzes}
            />
            <PrivateRoute exact path="/questions" component={Questions} />
            <PrivateRoute exact path="/create-quiz" component={CreateQuiz} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
