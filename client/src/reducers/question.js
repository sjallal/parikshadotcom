import { GET_QUESTIONS } from "../actions/types";

const initialState = {
  questions: [],
  loading: true,
  error: {},
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
        loading: false,
        error: {},
      };

    default:
      return state;
  }
}
