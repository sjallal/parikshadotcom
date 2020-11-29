const express = require("express");
const { check } = require("express-validator");
const { createQuestion, addOption, getQuestionById } = require("../../controllers/question");
const { getQuizById } = require("../../controllers/quiz");
const router = express.Router;

// Middlewares.
router.param("questionId", getQuestionById);
router.param("quizId", getQuizById);

// @route:   POST api/question/:quizId
// @desc:    Create a quiz.
// @access:  Private.
router.post(
  "/:quizId",
  [
    check("question", "Please add a question").isNot().isEmpty(),
    check("marks", "Please add marks to this question.").isNumeric().isEmpty(),
  ],
  createQuestion
);

// @route:   POST api/question/:quizId/:questionId
// @desc:    Add an option to a question.
// @access:  Private.
router.post(
  "/:quizId/:questionId",
  [
    check("option", "Please add an option").isNot().isEmpty(),
    check("flag", "Please put a flag on this option.").isBoolean().isEmpty(),
  ],
  addOption
);

module.exports = router;
