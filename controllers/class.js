const { validationResult } = require("express-validator");
const User = require("../models/User");
const Class = require("../models/Class");

exports.createClass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { className, description } = req.body;

  try {
    let newClass = await Class.findOne({ className });
    if (newClass) {
      return res.status(400).json({ errors: [{ msg: "Class already exists" }] });
    }

    newClass = new Class({
      className, description
    });

    await newClass.save();

  } catch (err) {
    console.log(err);
    res.status(500).send("Server ERROR!!!");
  }
};