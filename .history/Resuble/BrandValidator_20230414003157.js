const { body, check } = require("express-validator");

exports.createBrandValidator = [
    body("name").isEmpty().withMessage("name is required"),
    body("name")
    .isLength({ min: 2 })
    .withMessage("To Shoort Name To CreateCategory Validator"),
  body("name")
    .isLength({ max: 32 })
    .withMessage("To Longer Name To CreateCategory Validator"),
  Middle,
]