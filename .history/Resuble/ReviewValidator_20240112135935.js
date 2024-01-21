const { body, check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const { default: slugify } = require("slugify/slugify");
exports.createBrandValidator = [
  body("name").notEmpty().withMessage("name is required"),
  body("name")
    .isLength({ min: 2 })
    .withMessage("To Shoort Name To CreateBrands Validator"),
  body("name")
    .isLength({ max: 32 })
    .withMessage("To Longer Name To CreateBrands Validator")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  MiddlewareValidator,
];
exports.getBrandByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
  MiddlewareValidator,
];
exports.updateBrandValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
  body("name")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  MiddlewareValidator,
];
exports.deleteBrandByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To delete"),
  MiddlewareValidator,
];
