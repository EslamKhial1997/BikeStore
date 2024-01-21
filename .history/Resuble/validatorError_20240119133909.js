const { body, check } = require("express-validator");
const { default: slugify } = require("slugify/slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCategoryModel = require("../modules/createModel");

exports.createCategoryValidator = [
  body("name").notEmpty().withMessage("is required"),
  body("name")
    .isLength({ min: 2 })
    .withMessage("To Shoort Name To CreateCategory Validator"),
  body("name")
    .isLength({ max: 32 })
    .withMessage("To Longer Name To CreateCategory Validator")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
    body("name").custom((val) =>
    createCategoryModel.findOne({ name: val }).then((Category) => {
        if (Category) {
          return Promise.reject(new Error('Name Category Already in Used'));
        }
      })),
  MiddlewareValidator,
];
exports.getCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
  MiddlewareValidator,
];
exports.updateCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
  body("name")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("image").optional(),
  MiddlewareValidator,
];
exports.deleteCategoryByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Delete"),
  MiddlewareValidator,
];
