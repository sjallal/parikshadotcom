import axios from "axios";
import { setAlert } from "./alert";
import { SIGNIN_FAIL, SIGNIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "./types";

export const signUp = ({ fname, lname, email, password, about }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ fname, lname, email, password, about });

  try {
    const res = await axios.post("/api/user", body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

export const signIn = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: SIGNIN_FAIL,
    });
  }
};
