const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  enrolledTeachers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
  enrolledStudents: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
  // Redundant temporary data:
  leaderBoard: [
    {
      user: {},
      // Here the percentageScore is the totalPercentageScore, to get the percentage score divide it by quizzesAttempted.
      percentageScore: {
        type: Number,
        default: 0,
      },
      quizzesAttempted: {
        type: Number,
        default: 0,
      },
    },
  ],
  quizes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "quiz",
    },
  ],
});

module.exports = Class = mongoose.model("class", classSchema);
