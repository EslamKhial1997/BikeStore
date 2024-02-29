const express = require("express");
const { protect } = require("../Services/AuthService");

const { createCartValidator, } = require("../Resuble/CartValidator");
const { createFavorite, getFavorite, deleteFavorite, deleteSpecificFavoriteItem } = require("../Services/FavoriteService");
const { deleteFavoriteItemValidator } = require("../Resuble/FavoriteValidator");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(createCartValidator, createFavorite)
  .get(getFavorite)
  .delete(deleteFavorite);
Routes.route("/:id").delete(deleteFavoriteItemValidator,deleteSpecificFavoriteItem);

module.exports = Routes;
