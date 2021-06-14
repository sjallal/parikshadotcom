import {
  AUTH_ERROR,
  LOGOUT,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  USER_LOADED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: null,
  loading: true,
  user: null,
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: payload,
      };
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
        loading: false,
      };
    case SIGNUP_FAIL:
    case SIGNIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
