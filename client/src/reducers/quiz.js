import {
  ATTEMPTED_UNATTEMPTED_QUIZZES,
  ATTEMPT_QUIZ,
  CREATE_QUIZ,
  GET_QUIZ,
  QUIZ_ERROR,
  SELECT_ATTEMPTED_QUIZ,
  SELECT_UNATTEMPTED_QUIZ,
  SET_QUIZ,
} from "../actions/types";

const initialState = {
  quizzes: [],
  attemptedQuizzes: [],
  unattemptedQuizzes: [],
  loading: true,
  navbarIndex: 0,
  error: {},
  quiz: {},
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_UNATTEMPTED_QUIZ:
      return {
        ...state,
        navbarIndex: 0,
      };
    case SELECT_ATTEMPTED_QUIZ:
      return {
        ...state,
        navbarIndex: 1,
      };
    case GET_QUIZ:
      return {
        ...state,
        quizzes: payload,
        loading: false,
        error: {},
      };
    case CREATE_QUIZ:
      return {
        ...state,
        quizzes: [...state.quizzes, payload],
        loading: false,
        error: {},
      };

    case ATTEMPTED_UNATTEMPTED_QUIZZES:
      return {
        ...state,
        attemptedQuizzes: payload.attemptedQuizList,
        unattemptedQuizzes: payload.unAttemptedQuizList,
        error: {},
        loading: false,
      };

    case ATTEMPT_QUIZ:
      return {
        ...state,
        attemptedQuizzes: [...state.attemptedQuizzes, payload],
        unattemptedQuizzes: state.unattemptedQuizzes.filter(
          (quiz) => quiz._id !== payload._id
        ),
        error: {},
        loading: false,
      };
    case QUIZ_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case SET_QUIZ:
      return {
        ...state,
        loading: false,
        error: {},
        quiz: payload,
      };

    default:
      return state;
  }
}
