const Quiz = require("../models/Quiz");

// Applicable for teachers only.
exports.getQuizes = async (req, res) => {
  try {
    if (req.cls.enrolledTeachers.indexOf(req.user.id) !== -1)
      return res.status(200).json(req.cls.quizes);
    res.status(400).json({ msg: "Sorry you're not a teacher of this class." });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    if (req.cls.enrolledTeachers.indexOf(req.user.id) === -1) {
      return res.status(400).json({ msg: "Sorry you're not a teacher of this class." });
    }
    const { quizName, description } = req.body;
    let newQuiz = new Quiz({
      quizName,
      description,
      totalMarks: 0,
      questions: [],
      marksObtained: [],
    });
    req.cls.quizes.push(newQuiz._id);
    await cls.save();
    await newQuiz.save();
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

// Applicable for students only.
exports.unattemptedQuizes = async (req, res) => {
  try {
    let quizList = [];
    req.cls.quizes.forEach((quiz) => {
      let flag = false;
      quiz.marksObtained.forEach((obj) => {
        // console.log(obj.user + " " + req.user.id);
        if (obj.user === req.user.id) {
          flag = true;
          break;
        }
      });
      if (flag === false) quizList.push(quiz); // false -> The user hasn't attempted the quiz.
    });
    res.status(200).json(quizList);
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.attemptedQuizes = async (req, res) => {
  try {
    let quizList = [];
    req.cls.quizes.forEach((quiz) => {
      quiz.marksObtained.forEach((obj) => {
        console.log(obj.user + " " + req.user.id);
        if (obj.user === req.user.id) {
          quiz.marksObtained = obj.marksObtained;
          quizList.push(quiz);
          break;
        }
      });
    });
    res.status(200).json(quizList);
  } catch (err) {
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
    if (err.kind == "ObjectId") return res.status(400).json({ msg: "Quiz not found." });
    res.status(500).json({ error: "Internal server error." });
  }
};
