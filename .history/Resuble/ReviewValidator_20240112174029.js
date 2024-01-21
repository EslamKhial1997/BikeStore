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
    .withMessage("Reviews is required")
    .isFloat({ min: 1, max: 5 })
    .withMessage("Ratings value must be between 1 to 5"),
  body("user").isMongoId().withMessage("Invalid Review id format"),
  body("product")
    .isMongoId()
    .withMessage("Invalid Review id format")
    .custom(async (val, { req }) => {
      const product = await createReviewsModel.findOne({
        product: req.body.product,
        user: req.user._id,
      });
      if (product) {
        return Promise.reject(new Error("You already created a review before"));
      }
    }),
  MiddlewareValidator,
];
exports.getReviewByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
  MiddlewareValidator,
];
exports.updateReviewValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
  body("name")
    .optional()
    .custom((val, { req }) => {
      const Review = createReviewsModel.findById(val)
      req.body.slug = slugify(val);
      return true;
    }),
  MiddlewareValidator,
];
exports.deleteBrandByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To delete"),
  MiddlewareValidator,
];
