var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

// Importing controllers.
const { signup, getUserById, getUser, updateUser, deleteUser } = require("../../controllers/user");
const isLoggedIn = require("../../middlewares/isLoggedIn");

// @route:   POST api/user
// @desc:    SignUp user.
// @access:  Public(Won't require any token to access this route).
router.post(
  "/",
  [
    check("fname", "First name is required.").not().isEmpty(),
    check("email", "Email is required.").isEmail(),
    check("password", "Password is required.").isLength({ min: 4 }),
  ],
  signup
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
