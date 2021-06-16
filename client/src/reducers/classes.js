import {
  GET_CLASSES_NOT_ENROLLED,
  GET_CLASSES_ENROLLED,
  GET_CLASSES_CREATED,
  CLASS_ERROR,
  SELECT_CLASSES_CREATED,
  SELECT_CLASSES_ENROLLED,
  SELECT_CLASSES_NOT_ENROLLED,
  JOIN_CLASS,
  UNENROLL_CLASS,
  SET_CLS,
  CREATE_CLASS,
} from "../actions/types";

const initialState = {
  classesNotEnrolled: [],
  classesEnrolled: [],
  classesCreated: [],
  cls: null,
  loading: true,
  navbarIndex: 0,
  error: {},
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_CLASSES_NOT_ENROLLED:
      return {
        ...state,
        navbarIndex: 0,
      };
    case SELECT_CLASSES_ENROLLED:
      return {
        ...state,
        navbarIndex: 1,
      };
    case SELECT_CLASSES_CREATED:
      return {
        ...state,
        navbarIndex: 2,
      };
    case GET_CLASSES_NOT_ENROLLED:
      return {
        ...state,
        loading: false,
        classesNotEnrolled: payload,
        error: {},
      };
    case GET_CLASSES_ENROLLED:
      return {
        ...state,
        loading: false,
        classesEnrolled: payload,
        error: {},
      };
    case GET_CLASSES_CREATED:
      return {
        ...state,
        loading: false,
        classesCreated: payload,
        error: {},
      };
    case CLASS_ERROR:
      return {
        ...state,
        error: payload.msg,
        loading: false,
      };
    case CREATE_CLASS:
      return {
        ...state,
        loading: false,
        classesCreated: [...state.classesCreated, payload],
        error: {},
      };
    case JOIN_CLASS:
      return {
        ...state,
        classesEnrolled: [...state.classesEnrolled, payload],
        classesNotEnrolled: state.classesNotEnrolled.filter(
          (classs) => classs._id !== payload._id
        ),
        error: {},
        loading: false,
      };
    case UNENROLL_CLASS:
      return {
        ...state,
        classesEnrolled: state.classesEnrolled.filter(
          (classs) => classs._id !== payload._id
        ),
        classesNotEnrolled: [...state.classesNotEnrolled, payload],
        error: {},
        loading: false,
      };
    case SET_CLS:
      return {
        ...state,
        cls: payload,
        loading: false,
      };
    default:
      return state;
  }
}
