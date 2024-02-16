const { Router } = require("express");
const {
  createReviews,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
  createReveiwOnProduct,
} = require("../Services/ReviewsService");
const { protect, allowedTo } = require("../Services/AuthService");
const {
  createReviewsValidator,
  getReviewByIdValidator,
  updateReviewValidator,
  deleteReviewValidator,
} = require("../Resuble/ReviewValidator");

const Routes = Router({ mergeParams: true });

Routes.route("/")
  .post(
    protect,
    allowedTo("user"),
    createReveiwOnProduct,
    createReviewsValidator,
    createReviews
  )
  .get(createFilterObject,getReviews);
Routes.route("/:id").get(getReviewByIdValidator, getReviewById);
Routes.route("/:id").put(
  protect,
  allowedTo("user"),
  updateReviewValidator,
  updateReview
);
Routes.route("/:id").delete(
  protect,
  allowedTo("user", "admin", "manger"),
  deleteReviewValidator,
  deleteReview
);
module.exports = Routes;
