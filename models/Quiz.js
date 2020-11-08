const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  className: {
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
  },
  questions: [
    {
      type: mongoose.Types.ObjectId,
      ref: "question",
    },
  ],
  marksObtained: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
      marksObtained: Number,
    },
  ],
});

module.exports = Quiz = mongoose.model("quiz", quizSchema);
