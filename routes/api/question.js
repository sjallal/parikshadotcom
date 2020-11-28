const express = require("express");
const { createQuestion, addOption, getQuestionById } = require("../../controllers/question");
const { getQuizById } = require("../../controllers/quiz");
const router = express.Router;

// Middlewares.
router.param("questionId", getQuestionById);
router.param("quizId", getQuizById);

// @route:   POST api/question/:quizId
// @desc:    Create a quiz.
// @access:  Private.
router.post("/:quizId", createQuestion);

// @route:   POST api/question/:quizId/:questionId
// @desc:    Add an option to a question.
// @access:  Private.
router.post("/:quizId/:questionId", addOption);

module.exports = router;
