const { Router } = require("express");
const {
  createReviews,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview
} = require("../Services/ReviewsService");
const { protect, allowedTo } = require("../Services/AuthService");
const {
  createReviewsValidator,
  getReviewByIdValidator,
  updateReviewValidator,
  deleteReviewValidator
} = require("../Resuble/ReviewValidator");

const Routes = Router();

Routes.route("/")
  .post(protect, allowedTo("user"), createReviewsValidator, createReviews)
  .get(getReviews);
Routes.route("/:id").get(getReviewByIdValidator, getReviewById);
Routes.route("/:id").put(protect ,allowedTo("user"), updateReviewValidator, updateReview);
Routes.route("/:id").delete(protect ,allowedTo("user" , "admin" , "manger"), deleteReviewValidator, deleteReview);
module.exports = Routes;
