const express = require("express");
const { protect } = require("../Services/AuthService");

const { createCartValidator, deleteCartItemValidator } = require("../Resuble/CartValidator");
const { createFavorite } = require("../Services/FavoriteService");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(createCartValidator, createFavorite)
  .get(getCart)
  .delete(deleteCart);
Routes.route("/:id").delete(deleteCartItemValidator,deleteSpecificCartItem);

module.exports = Routes;
