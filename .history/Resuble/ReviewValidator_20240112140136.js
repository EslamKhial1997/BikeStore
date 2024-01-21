const { body, check } = require("express-validator");
const { default: slugify } = require("slugify/slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");

exports.createReviewsValidator = [
  body("title").optional(),
  body("rating").notEmpty()
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
