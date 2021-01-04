const { validationResult } = require("express-validator");
const User = require("../models/User");
const Class = require("../models/Class");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fname, lname, email, password, about } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists." }] });
    }

    user = new User({
      fname,
      lname,
      email,
      password,
      about,
      attemptedQuizes: [],
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const payload = {
      user: { id: user.id },
    };
    jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server ERROR!!!");
  }
};

// This getUserById is for taking the userId passed through the params and then
// setting the whole-user document to the req-body.
exports.getUserById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) return res.status(400).json({ msg: "User not found." });
    req.user = user;
    next();
  } catch (error) {
    // console.error(error.message);
    if (error.kind == "ObjectId") return res.status(400).json({ msg: "User not found." });
    res.status(500).send("Server ERROR!!!");
  }
};
exports.getUser = (req, res) => {
  req.user.password = undefined;
  return res.json(req.user);
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $set: req.body },
      { new: true, useFindAndModify: false, upsert: false }
    );
    // console.log(user);
    res.status(200).json(user);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: "Internal server ERROR!!!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await Class.deleteMany({ createdBy: req.user.id });
    await User.findOneAndDelete({ _id: req.user.id });
    res.status(200).json({ msg: "The user has been deleted successfully!!!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server ERROR!!!" });
  }
};
