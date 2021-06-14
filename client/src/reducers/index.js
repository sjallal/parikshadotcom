import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import quiz from "./quiz";
import classes from "./classes";
import question from "./question";

export default combineReducers({
  alert,
  auth,
  classes,
  quiz,
  question,
});
