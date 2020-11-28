const express = require("express");
const router = express.Router;

const { getClassById } = require("../../controllers/class");
const {
  getQuizes,
  unattemptedQuizes,
  attemptedQuizes,
  createQuiz,
} = require("../../controllers/quiz");
const isLoggedIn = require("../../middlewares/isLoggedIn");

// Middleware.
router.param("classId", getClassById);

// @route:   POST api/quiz/:classId
// @desc:    Create a quiz(user must be a teacher).
// @access:  Private.
router.get("/:classId", isLoggedIn, createQuiz);

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

module.exports = router;
