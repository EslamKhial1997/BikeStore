

exports.MiddlewareValidator = (req, res) => {
  const errors = vali(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};
