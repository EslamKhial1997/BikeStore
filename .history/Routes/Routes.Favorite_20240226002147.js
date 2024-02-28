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
const { createFavoriteValidator, getFavoriteByIdValidator } = require("../Resuble/FavoriteValidator");
const { createFavorite } = require("../Services/FavoriteService");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(getLoggedUserData, createFavoriteValidator, createFavorite)
  .get(getCart);
Routes.route("/:id").get(getFavoriteByIdValidator, getFa);

Routes.route("/:id").delete(deleteCartValidator, deleteCartByID);

module.exports = Routes;
