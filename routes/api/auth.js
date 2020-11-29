const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signin, getUserByToken } = require("../../controllers/auth");
const isLoggedIn = require("../../middlewares/isLoggedIn");

// @route:   POST api/auth
// @desc:    SignIn user.
// @access:  Public(Won't require any token to access this route).
router.post(
  "/",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 4 }),
  ],
  signin
);

router.get("/", isLoggedIn, getUserByToken);

module.exports = router;
