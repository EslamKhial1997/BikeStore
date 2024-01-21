const { body, check } = require("express-validator");
const { default: slugify } = require("slugify/slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createReviewsModel = require("../modules/createReviews");

exports.createReviewsValidator = [
  body("title").optional(),
  body("rating")
    .notEmpty()
    .withMessage("Reviews is required").isFloat({ min: 1, max: 5 })
    .withMessage('Ratings value must be between 1 to 5'),
    body("user").isMongoId().withMessage("Invalid Review id format"),
    body("product").isMongoId().withMessage('Invalid Review id format')
    .custom((val, { req }) => {
      const product = createReviewsModel.findOne({product:req.product , user:req.user.Id})
      console.log(product);
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
