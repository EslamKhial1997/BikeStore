const express = require("express");
const { protect, allowedTo } = require("../Services/AuthService");
const {
  createCart,
  getCart,
  getLoggedUserData,
  getCartByID,
  updateCart,
  deleteCartByID,
} = require("../Services/CartService");
const { createCartValidator } = require("../Resuble/CartValidator");

const Routes = express.Router();
Routes.use(protect, allowedTo("user"));
Routes.route("/")
  .post(getLoggedUserData, createCartValidator, createCart)
  .get(getCart)
  Routes.route("/:id").get(getCart, getCartByID);
Routes.route("/:id").put(
  protect,
  allowedTo("user"),
  updateReviewValidator,
  updateCart
);
Routes.route("/:id").delete(
  protect,
  allowedTo("user", "admin", "manger"),
  deleteReviewValidator,
  deleteCartByID
);

module.exports = Routes;
