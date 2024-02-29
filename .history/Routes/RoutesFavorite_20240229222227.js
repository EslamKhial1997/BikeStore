const express = require("express");
const { protect } = require("../Services/AuthService");

const { createCartValidator, deleteCartItemValidator } = require("../Resuble/CartValidator");
const { createFavorite, getFavorite, deleteFavorite } = require("../Services/FavoriteService");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(createCartValidator, createFavorite)
  .get(getFavorite)
  .delete(deleteFavorite);
Routes.route("/:id").delete(deleteCartItemValidator,deleteS);

module.exports = Routes;
