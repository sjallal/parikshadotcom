const { validationResult } = require("express-validator");
const User = require("../models/User");
const Class = require("../models/Class");

exports.createClass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(`errors: ${errors}`);
    return res.status(400).json({ error: errors.array() });
  }
  const { className, description } = req.body;
  try {
    let newClass = await Class.findOne({ className });
    if (newClass)
      return res
        .status(400)
        .json({ errors: [{ msg: "Class already exists" }] });
    newClass = new Class({
      className,
      description,
      createdBy: req.user.id,
      enrolledTeachers: [req.user.id],
      enrolledStudents: [],
      quizes: [],
    });
    await newClass.save();
    res.status(200).json(newClass);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Not in use.
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate({
      path: "quizes",
      select: "quizName description totalMarks",
    });
    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.classesCreated = async (req, res) => {
  try {
    const classes = await Class.find();
    let classList = [];
    classes.forEach((cls) => {
      if (cls.enrolledTeachers.indexOf(req.user.id) !== -1) classList.push(cls);
    });
    res.status(200).json(classList);
  } catch (err) {
    res.status(500).json({ error: "Internal server error!!!" });
  }
};

exports.classesEnrolled = async (req, res) => {
  try {
    const classes = await Class.find();
    // console.log(classes);
    let classList = [];
    classes.forEach((cls) => {
      if (cls.enrolledStudents.indexOf(req.user.id) !== -1) classList.push(cls);
    });
    res.status(200).json(classList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error!!!" });
  }
};

exports.classesNotEnrolled = async (req, res) => {
  try {
    const classes = await Class.find();
    let classList = [];
    classes.forEach((cls) => {
      if (
        cls.enrolledTeachers.indexOf(req.user.id) === -1 &&
        cls.enrolledStudents.indexOf(req.user.id) === -1
      )
        classList.push(cls);
    });
    res.status(200).json(classList);
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.enrollIntoClass = async (req, res) => {
  try {
    if (req.cls.enrolledTeachers.indexOf(req.user.id) !== -1)
      return res
        .status(400)
        .json({ msg: "You can not enroll into a class created by yourself." });
    if (req.cls.enrolledStudents.indexOf(req.user.id) !== -1)
      return res.status(400).json({ msg: "Already Enrolled!" });
    req.cls.enrolledStudents.push(req.user.id);
    const user = await User.findById(req.user.id).select("-password");
    req.cls.leaderBoard.push({ user: user, score: 0 });
    await req.cls.save();
    // console.log(req.cls);
    res.status(200).json(req.cls);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error!!!" });
  }
};

exports.unEnrollFromClass = async (req, res) => {
  try {
    let index = req.cls.enrolledStudents.indexOf(req.user.id);
    req.cls.enrolledStudents.splice(index, 1);
    for (let i = 0; i < req.cls.leaderBoard.length; i++) {
      if (req.cls.leaderBoard[i].user === req.user.id) index = i;
    }
    req.cls.leaderBoard.splice(index, 1);
    await req.cls.save();
    res.status(200).json(req.cls);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal sever error!!!" });
  }
};

// Middleware
exports.getClassById = async (req, res, next, classId) => {
  try {
    const cls = await Class.findById(classId);
    if (!cls) return res.status(400).json({ msg: "Class not found." });
    req.cls = cls;
    next();
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId")
      return res.status(400).json({ msg: "Class not found." });
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.leaderboard = async (req, res) => {};
