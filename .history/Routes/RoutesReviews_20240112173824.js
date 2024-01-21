const { Router } = require("express");
const {
  createReviews,
  getReviews,
  getReviewById,
  updateReview
} = require("../Services/ReviewsService");
const { protect, allowedTo } = require("../Services/AuthService");
const { createReviewsValidator ,getReviewByIdValidator} = require("../Resuble/ReviewValidator");

const Routes = Router();

Routes.route("/")
  .post(protect, allowedTo("user"), createReviewsValidator, createReviews)
  .get(getReviews);
Routes.route("/:id").get(getReviewByIdValidator,getReviewById);
Routes.route("/").put(updateReview);
module.exports = Routes;
