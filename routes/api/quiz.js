const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const { getClassById } = require("../../controllers/class");
const {
  getQuizes,
  unattemptedQuizes,
  attemptedQuizes,
  createQuiz,
  getQuizById,
  submitQuiz,
} = require("../../controllers/quiz");
const isLoggedIn = require("../../middlewares/isLoggedIn");

// Middleware.
router.param("classId", getClassById);
router.param("quizId", getQuizById);

// @route:   POST api/quiz/:classId
// @desc:    Create a quiz(user must be a teacher).
// @access:  Private.
router.post(
  "/:classId",
  [
    check("quizName", "Please provide a quiz name.").not().isEmpty(),
    check("description", "Please provide a description of the quiz.").not().isEmpty(),
  ],
  isLoggedIn,
  createQuiz
);

// @route:   GET api/quiz/:classId
// @desc:    Get all the quizes created for a perticular class by the user(teacher).
// @access:  Private.
router.get("/:classId", isLoggedIn, getQuizes);

// @route:   GET api/quiz/unattempted/:classId
// @desc:    Get unattempted quizes of a perticular class for a perticular user(student).
// @access:  Private.
router.get("/unattempted/:classId", isLoggedIn, unattemptedQuizes);

// @route:   GET api/quiz/attempted/:classId
// @desc:    Get attempted quizes of a perticular class for a perticular user(student).
// @access:  Private.
router.get("/attempted/:classId", isLoggedIn, attemptedQuizes);

// @route:   GET api/quiz/submit/:quizId
// @desc:    Submit the quiz and enter the scores with user id.
// @access:  Private.
router.put(
  "/submit/:quizId",
  [check("score", "Score is not given.").not().isEmpty()],
  isLoggedIn,
  submitQuiz
);

module.exports = router;
