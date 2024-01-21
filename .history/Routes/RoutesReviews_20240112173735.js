const { Router } = require("express");
const {
  createReviews,
  getReviews,
  getReviewById,
} = require("../Services/ReviewsService");
const { protect, allowedTo } = require("../Services/AuthService");
const { createReviewsValidator } = require("../Resuble/ReviewValidator");

const Routes = Router();

Routes.route("/")
  .post(protect, allowedTo("user"), createReviewsValidator, createReviews)
  .get(getReviews);
Routes.route("/:id").get(getReviewById);
Routes.route("/").put(updateReview);
module.exports = Routes;
