const { validationResult } = require("express-validator");
const Class = require("../models/Class");
const Quiz = require("../models/Quiz");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

// Applicable for teachers only.
exports.getQuizes = async (req, res) => {
  try {
    if (req.cls.enrolledTeachers.indexOf(req.user.id) === -1) {
      return res
        .status(400)
        .json({ msg: "Sorry you're not a teacher of this class." });
    }
    // const quizes = await Quiz.find({ classId: req.cls._id }).populate({
    //   path: "questions",
    //   select: "question options marks",
    // });
    const quizes = await Quiz.find({ classId: req.cls._id });
    res.status(200).json(quizes);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createQuiz = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
  try {
    if (req.cls.enrolledTeachers.indexOf(req.user.id) === -1) {
      return res
        .status(400)
        .json({ msg: "Sorry you're not a teacher of this class." });
    }
    const { quizName, description, totalMarks, questions } = req.body;
    let newQuiz = new Quiz({
      classId: req.cls._id,
      quizName,
      description,
      totalMarks,
      questions,
      scores: [],
    });
    req.cls.quizes.push(newQuiz._id);
    await req.cls.save();
    await newQuiz.save();
    res.status(200).json(req.cls);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Applicable for students only.
exports.getQuizesStudent = async (req, res) => {
  try {
    // const quizList = [];
    // await req.cls.quizes.forEach(async (quizId) => {
    //   let quiz = await Quiz.findById(quizId);
    //   quizList.push(quiz);
    //   console.log(quizList);
    //   // if (!quiz) return res.status(400).json({ msg: "Quiz not found." });
    //   // let attempted = false;
    //   // for (i = 0; i < quiz.scores.length; i++) {
    //   //   if (scores[i].user === req.user.id) {
    //   //     attempted = true;
    //   //     break;
    //   //   }
    //   // }
    //   // if (attempted === false) quizList.push(quiz); // false -> The user hasn't attempted the quiz.
    // });
    // console.log(quizList);
    // res.status(200).json(quizList);
    const unAttemptedQuizList = [];
    const attemptedQuizList = [];
    const quizes = req.cls.quizes;
    for (let i = 0; i < quizes.length; i++) {
      let quiz = await Quiz.findById(quizes[i]);
      let attempted = false;
      for (let j = 0; j < quiz.scores.length; j++) {
        if (quiz.scores[j].user === req.user.id) {
          attempted = true;
          attemptedQuizList.push(quiz);
          break;
        }
      }
      if (attempted === false) unAttemptedQuizList.push(quiz); // false -> The user hasn't attempted the quiz.
    }
    return res.status(200).json({
      unAttemptedQuizList: unAttemptedQuizList,
      attemptedQuizList: attemptedQuizList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.attemptedQuizes = async (req, res) => {
  try {
    let quizList = [];
    req.cls.quizes.forEach((quiz) => {
      for (i = 0; i < quiz.scores.length; i++) {
        // console.log(scores[i].user + " " + req.user.id);
        if (scores[i].user === req.user.id) {
          quizList.push(quiz);
          break;
        }
      }
    });
    res.status(200).json(quizList);
  } catch (err) {
    res.status(500).json({ error: "Internal server ERROR!!!" });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const cls = await Class.findById(req.quiz.classId);
    const user = await User.findById(req.user.id);
    if (cls.enrolledTeachers.indexOf(req.user.id) !== -1)
      return res
        .status(400)
        .json({ msg: "You can't submit the quiz as a teacher of the class." });
    for (let i = 0; i < req.quiz.scores.length; i++) {
      if (req.quiz.scores[i].user.toString() === req.user.id) {
        return res.status(400).json({ msg: "You've already taken this quiz." });
      }
    }
    const { score } = req.body;
    req.quiz.scores.push({ user: req.user.id, score });
    await req.quiz.save();
    user.totalPercentageScore += (score / req.quiz.totalMarks) * 100;
    user.totalQuizesAttempted += 1;
    user.attemptedQuizes.push({ quiz: req.quiz._id, score });
    await user.save();
    console.log(req.user);
    res.status(200).json(req.quiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server ERROR!!!" });
  }
};

exports.getQuizById = async (req, res, next, quizId) => {
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(400).json({ msg: "Quiz not found." });
    req.quiz = quiz;
    next();
  } catch (err) {
    if (err.kind == "ObjectId")
      return res.status(400).json({ msg: "Quiz not found." });
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.getQuizByIdTest = async (req, res) => {
  res.send(req.quiz);
};

exports.createQuestion = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
  try {
    const { question, options, marks } = req.body;
    const newQuestion = {
      _id: uuidv4(),
      question,
      options,
      marks,
    };
    console.log(newQuestion);
    req.quiz.questions.push(newQuestion);
    req.quiz.totalMarks += marks;
    await req.quiz.save();
    res.status(200).json(req.quiz);
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};
