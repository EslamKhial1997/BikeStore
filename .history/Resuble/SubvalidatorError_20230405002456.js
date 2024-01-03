const { body, check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");

exports.getSubCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To get CreateSubCategory Validator"),
  MiddlewareValidator,
];
exports.updateSubCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Update CreateSubCategory Validator"),
  MiddlewareValidator,
];
exports.deleteSubCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Delete CreateSubCategory Validator"),
  MiddlewareValidator,
];
exports.createSubCategoryValidator = [
  body("name").notEmpty().withMessage("is required"),
  body("name").isLength({ min: 2 }).withMessage("To Shoort Name To CreateSubCategory Validator"),
  body("name").isLength({ max: 32 }).withMessage("To Longer Name To CreateSubCategory Validator"),
  check("category").isMongoId().withMessage("To Mongo is required ID"),
  MiddlewareValidator,
];
