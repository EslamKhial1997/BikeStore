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
  check("id")
    .isMongoId()
    .withMessage("Sorry ID Not Available To Update")
    .custom(async (val, { req }) => {
      const review = await createReviewsModel.findById(val);
      if (!review) {
        return Promise.reject(new Error(`There is no review with id ${val}`));
      }
      if (review.user._id.toString() !== req.user._id.toString()) {
        return Promise.reject(
          new Error(`Your are not allowed to perform this action`)
        );
      }
    }),
  MiddlewareValidator,
];
exports.deleteReviewValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Review id format")
    .custom(async (val, { req }) => {
      const review = await createReviewsModel.findById(val);
      if (req.user.role === "user") {
        if (!review) {
          return Promise.reject(new Error(`There is no review with id ${val}`));
        }
        if (review.user._id.toString() !== req.user._id.toString()) {
          return Promise.reject(
            new Error(`Your are not allowed to perform this action`)
          );
        }
        65a1696154b090674a5df354
      }
     
    }),
  MiddlewareValidator,
];
