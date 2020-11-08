var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

// Importing controllers.
const {
  signup,
  signin,
  getUserById,
  getUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user");
const isLoggedIn = require("../../middlewares/isLoggedIn");

// Sign-up route.
router.post(
  "/signup",
  [
    check("fname", "First name is required.").not().isEmpty(),
    check("email", "Email is required.").isEmail(),
    check("password", "Password is required.").isLength({ min: 4 }),
  ],
  signup
);

// Signin route.
router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 4 }),
  ],
  signin
);

// Setting the user to the req-body.
router.param("userId", getUserById);
// Responding the whole user-document.
router.get("/:userId", getUser);

// Update user by ID.
router.put("/update", isLoggedIn, updateUser);

// Delete user.
router.delete("/delete", isLoggedIn, deleteUser);

module.exports = router;
