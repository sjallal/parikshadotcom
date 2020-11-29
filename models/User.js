const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  totalPercentageScore: {
    type: Number,
    default: 0,
  },
  totalQuizesAttempted: {
    type: Number,
    default: 0,
  },
  attemptedQuizes: [
    {
      quiz: {
        type: mongoose.Types.ObjectId,
        ref: "quiz",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = User = mongoose.model("user", userSchema);
