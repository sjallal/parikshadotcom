const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      ans: {
        type: String,
        required: true,
      },
      flag: {
        type: Boolean,
        default: false,
      },
    },
  ],
  marks: {
    type: Number,
    required: true,
  },
});

module.exports = Question = mongoose.model("question", questionSchema);
