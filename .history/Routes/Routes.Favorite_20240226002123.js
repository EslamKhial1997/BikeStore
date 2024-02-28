const express = require("express");
const { protect } = require("../Services/AuthService");
const {
  createCart,
  getCart,
  getLoggedUserData,
  getCartByID,
  deleteCartByID,
} = require("../Services/CartService");
const {
  createCartValidator,
  getCartByIdValidator,
  deleteCartValidator,
} = require("../Resuble/CartValidator");
const { createFavoriteValidator } = require("../Resuble/FavoriteValidator");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(getLoggedUserData, createFavoriteValidator, create)
  .get(getCart);
Routes.route("/:id").get(getCartByIdValidator, getCartByID);

Routes.route("/:id").delete(deleteCartValidator, deleteCartByID);

module.exports = Routes;
