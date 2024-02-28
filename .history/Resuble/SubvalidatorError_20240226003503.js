const { body, check } = require("express-validator");
const { default: slugify } = require("slugify/slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");

exports.createSubCategoryValidator = [
  body("name")
    .notEmpty()
    .withMessage("is required")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  body("name")
    .isLength({ min: 2 })
    .withMessage("To Shoort Name To CreateSubCategory Validator"),
  body("name")
    .isLength({ max: 32 })
    .withMessage("To Longer Name To CreateSubCategory Validator"),
  check("category")
    .isMongoId()
    .notEmpty()
    .withMessage("required ID Category"),

  MiddlewareValidator,
];
exports.getSubCategoryByIdValidator = [
  check("id")
    .isMongoId()
    .withMessage("Sorry ID Not Available To get CreateSubCategory Validator"),
  MiddlewareValidator,
];
exports.updateSubCategoryByIdValidator = [
  check("id")
    .isMongoId()
    .withMessage(
      "Sorry ID Not Available To Update CreateSubCategory Validator"
    ),
  body("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  MiddlewareValidator,
];
exports.deleteSubCategoryByIdValidator = [
  check("id")
    .isMongoId()
    .withMessage(
      "Sorry ID Not Available To Delete CreateSubCategory Validator"
    ),
  MiddlewareValidator,
];
