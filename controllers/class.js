const { validationResult } = require("express-validator");
const User = require("../models/User");
const Class = require("../models/Class");

exports.createClass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  const { className, description } = req.body;
  try {
    let newClass = await Class.findOne({ className });
    if (newClass) return res.status(400).json({ msg: "Class already exists" });
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
    console.log(classes);
    let classList = [];
    classes.forEach((cls) => {
      if (cls.enrolledStudents.indexOf(req.user.id) !== -1) classList.push(cls);
    });
    res.status(200).json({ classList });
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
    res.status(200).json({ classList });
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.enrollIntoClass = async (req, res) => {
  try {
    let i = req.cls.enrolledStudents.indexOf(req.user.id);
    if (i !== -1) return res.status(400).json({ msg: "Already Enrolled!" });
    req.cls.enrolledStudents.push(req.user.id);
    await req.cls.save();
    console.log(req.cls);
    res.status(200).json(req.cls);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error!!!" });
  }
};

exports.getClassById = async (req, res, next, classId) => {
  try {
    const cls = await Class.findById(classId);
    if (!cls) return res.status(400).json({ msg: "Class not found." });
    req.cls = cls;
    next();
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") return res.status(400).json({ msg: "Class not found." });
    res.status(500).json({ error: "Internal server error." });
  }
};
