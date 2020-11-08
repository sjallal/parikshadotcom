const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  questionName: {
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
});

module.exports = Question = mongoose.model("question", questionSchema);
