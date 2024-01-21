const { validationResult } = require("express-validator");

exports.MiddlewareValidator = (req, res , next) => {
  console.log(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()
};
