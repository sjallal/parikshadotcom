var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

// Importing controllers.
const { createClass } = require("../../controllers/class");
const isLoggedIn = require("../../middlewares/isLoggedIn");

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

// Setting the user to the req-body.
router.param("userId", getUserById);

// @route:   GET api/auth
// @desc:    Read user.
// @access:  Public(Won't require any token to access this route).
// Responding the whole user-document.
router.get("/:userId", getUser);

// @route:   PUT api/auth
// @desc:    Update user.
// @access:  Private
router.put("/", isLoggedIn, updateUser);

// @route:   DELETE api/auth
// @desc:    Update user.
// @access:  Private
router.delete("/", isLoggedIn, deleteUser);

module.exports = router;
