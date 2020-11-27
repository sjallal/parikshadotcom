const { validationResult } = require("express-validator");

exports.createClass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { className, description } = req.body;
};
