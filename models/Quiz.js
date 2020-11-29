const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  classId: {
    type: mongoose.Types.ObjectId,
    ref: "class",
  },
  quizName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  totalMarks: {
    type: Number,
    default: 0,
  },
  questions: [
    {
      type: mongoose.Types.ObjectId,
      ref: "question",
    },
  ],
  scores: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = Quiz = mongoose.model("quiz", quizSchema);
