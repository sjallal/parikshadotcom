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
  quizes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "quiz",
    }
  ]
});

module.exports = Class = mongoose.model("class", classSchema);
