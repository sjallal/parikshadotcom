import axios from "axios";
import { setAlert } from "./alert";
import {
  ATTEMPTED_UNATTEMPTED_QUIZZES,
  GET_QUIZ,
  QUIZ_ERROR,
  SELECT_ATTEMPTED_QUIZ,
  SELECT_UNATTEMPTED_QUIZ,
  SET_QUIZ,
} from "./types";

export const selectQuizUnattempted = () => async (dispatch) => {
  dispatch({
    type: SELECT_UNATTEMPTED_QUIZ,
  });
};

export const selectQuizAttempted = () => async (dispatch) => {
  dispatch({
    type: SELECT_ATTEMPTED_QUIZ,
  });
};

export const getQuizzes = (classId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/quiz/${classId}`);
    dispatch({
      type: GET_QUIZ,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: QUIZ_ERROR,
      payload: error.response.data,
    });
  }
};

export const getAttemptedUnattemptedQuizzes = (classId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/quiz/student/${classId}`);
    dispatch({
      type: ATTEMPTED_UNATTEMPTED_QUIZZES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: QUIZ_ERROR,
      payload: error.response.data,
    });
  }
};

export const setQuiz = (quiz) => async (dispatch) => {
  dispatch({
    type: SET_QUIZ,
    payload: quiz,
  });
};

export const createQuiz = (quiz, classId) => async (dispatch) => {
  const { quizName, description, questions, totalMarks } = quiz;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    quizName,
    description,
    questions,
    totalMarks,
  });
  try {
    await axios.post(`/api/quiz/${classId}`, body, config);
    dispatch(setAlert(`${quizName} - Quiz Created`, "success"));
  } catch (error) {
    dispatch(setAlert(error.response.data, "danger"));
  }
};
