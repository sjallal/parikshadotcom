import { SIGNIN_FAIL, SIGNIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: null,
  loading: true,
  user: null,
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
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
      localStorage.removeItem("token");
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
      };
    default:
      return state;
  }
}
