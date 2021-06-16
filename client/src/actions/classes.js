import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
// import { setAlert } from "./alert";

import {
  SELECT_CLASSES_CREATED,
  SELECT_CLASSES_ENROLLED,
  SELECT_CLASSES_NOT_ENROLLED,
  GET_CLASSES_NOT_ENROLLED,
  GET_CLASSES_ENROLLED,
  GET_CLASSES_CREATED,
  CLASS_ERROR,
  JOIN_CLASS,
  UNENROLL_CLASS,
  SET_CLS,
  CREATE_CLASS,
} from "./types";

export const selectClassesNotEnrolled = () => async (dispatch) => {
  dispatch({
    type: SELECT_CLASSES_NOT_ENROLLED,
  });
};

export const selectClassesEnrolled = () => async (dispatch) => {
  dispatch({
    type: SELECT_CLASSES_ENROLLED,
  });
};

export const selectClassesCreated = () => async (dispatch) => {
  dispatch({
    type: SELECT_CLASSES_CREATED,
  });
};

export const getClassesNotEnrolled = () => async (dispatch) => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    const res = await axios.get("/api/class/notEnrolled");
    dispatch({
      type: GET_CLASSES_NOT_ENROLLED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CLASS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getClassesEnrolled = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/class/enrolled");
    // console.log(`Classes enrolled: ${res.data[0].className}`);
    dispatch({
      type: GET_CLASSES_ENROLLED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CLASS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getClassesCreated = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/class/created");
    // console.log(`Classes created: ${res.data[0].className}`);
    dispatch({
      type: GET_CLASSES_CREATED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CLASS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const joinClass = (classId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/class/enroll/${classId}`);
    console.log(`Successfully enrolled into class ${res.data.className}`);
    dispatch(
      setAlert(
        `Successfully enrolled into class ${res.data.className}`,
        "success"
      )
    );
    dispatch({
      type: JOIN_CLASS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CLASS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const unEnrollClass = (classId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/class/unenroll/${classId}`);
    dispatch(
      setAlert(
        `Successfully un-enrolled from class ${res.data.className}`,
        "success"
      )
    );
    dispatch({
      type: UNENROLL_CLASS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CLASS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const setCls = (cls) => async (dispatch) => {
  dispatch({
    type: SET_CLS,
    payload: cls,
  });
};

export const createClass = (className, description) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    className,
    description,
  });
  try {
    const res = await axios.post("/api/class", body, config);
    console.log(res.data);
    dispatch({
      type: CREATE_CLASS,
      payload: res.data,
    });
    dispatch(setAlert(`Class created`, "success"));
  } catch (err) {
    // console.log(err.response);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

// [NOT IN USE]
export const leaderboard = (classId) => async (dispatch) => {
  try {
    const res = axios.get(`/api/leaderboard/${classId}`);
    console.log(res);
  } catch (error) {
    dispatch({
      type: CLASS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
