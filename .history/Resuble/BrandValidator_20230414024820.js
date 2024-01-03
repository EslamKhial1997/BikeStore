const { body, check } = require("express-validator");
const { MiddlewareValidator } = require("../Middleware/MiddlewareValidatorError");

exports.createBrandValidator = [
    body("name").notEmpty().withMessage("name is required"),
    body("name")
    .isLength({ min: 2 })
    .withMessage("To Shoort Name To CreateCategory Validator"),
  body("name")
    .isLength({ max: 32 })
    .withMessage("To Longer Name To CreateCategory Validator"),
  MiddlewareValidator,
]
exports.getBrandByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
  MiddlewareValidator
]
