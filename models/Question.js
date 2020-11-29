const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      option: {
        type: String,
      },
      flag: {
        type: Boolean,
        default: false,
      },
    },
  ],
  marks: {
    type: Number,
    default: 0,
  },
});

module.exports = Question = mongoose.model("question", questionSchema);
