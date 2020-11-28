const { validationResult } = require("express-validator");
const Question = require("../models/Question");

exports.createQuestion = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
  try {
    const { question, marks } = req.body;
    const newQuestion = new Question({
      question,
      options: [],
      marks,
    });
    console.log(newQuestion);
    await newQuestion.save();
    req.quiz.questions.push(newQuestion._id);
    req.quiz.questions.marks += marks;
    await req.quiz.save();
    res.status(200).json({ quiz: req.quiz });
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.addOption = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
  try {
    const { option, flag } = req.body;
    req.question.options.push({ option, flag });
    await req.question.save();
    res.status(200).json(req.question);
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.getQuestionById = async (req, res, next, questionId) => {
  try {
    const question = await Question.findById(questionId);
    if (!question) return res.status(400).json({ msg: "Question not found." });
    req.question = question;
    next();
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};
