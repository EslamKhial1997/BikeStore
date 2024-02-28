const express = require("express");
const { protect, allowedTo } = require("../Services/AuthService");
const {
  createCart,
  getCart,
  getLoggedUserData,
  getCartByID,
} = require("../Services/CartService");
const { createCartValidator } = require("../Resuble/CartValidator");

const Routes = express.Router();
Routes.use(protect, allowedTo("user"));
Routes.route("/")
  .post(getLoggedUserData, createCartValidator, createCart)
  .get(getCart)
  Routes.route("/:id").get(getReviewByIdValidator, getCartByID);
Routes.route("/:id").put(
  protect,
  allowedTo("user"),
  updateReviewValidator,
  update
);
Routes.route("/:id").delete(
  protect,
  allowedTo("user", "admin", "manger"),
  deleteReviewValidator,
  deleteReview
);

module.exports = Routes;
