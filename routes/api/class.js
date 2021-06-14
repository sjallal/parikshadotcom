var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

// Importing controllers.
const {
  getClassById,
  createClass,
  classesCreated,
  classesNotEnrolled,
  classesEnrolled,
  enrollIntoClass,
  getAllClasses,
  unEnrollFromClass,
} = require("../../controllers/class");
const isLoggedIn = require("../../middlewares/isLoggedIn");

// Middlewares.
router.param("classId", getClassById);

// @route:   POST api/class
// @desc:    Create class.
// @access:  Private.
router.post(
  "/",
  isLoggedIn,
  [
    check("className", "Class name is required.").not().isEmpty(),
    check("description", "Class description is required.").not().isEmpty(),
  ],
  createClass
);

// @route:   GET api/class
// @desc:    Get all the class(Only for testing purpose).
// @access:  Private
router.get("/", isLoggedIn, getAllClasses);

// @route:   GET api/class/created
// @desc:    Get all the created class.
// @access:  Private
router.get("/created", isLoggedIn, classesCreated);

// @route:   GET api/class/notEnrolled
// @desc:    Get those classes in which the user is not enrolled and is not the teacher of.
// @access:  Private
router.get("/notEnrolled", isLoggedIn, classesNotEnrolled);

// @route:   GET api/class/enrolled
// @desc:    Get those classes in which the user is has enrolled and is not the teacher of.
// @access:  Private
router.get("/enrolled", isLoggedIn, classesEnrolled);

// @route:   PUT api/class/enroll/:classId
// @desc:    Enroll into class.
// @access:  Private
router.put("/enroll/:classId", isLoggedIn, enrollIntoClass);

// @route:   PUT api/class/unenroll/:classId
// @desc:    Un-enroll from a class.
// @access:  Private
router.put("/unenroll/:classId", isLoggedIn, unEnrollFromClass);

module.exports = router;
