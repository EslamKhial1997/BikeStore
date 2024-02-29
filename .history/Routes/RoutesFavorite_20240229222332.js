const express = require("express");
const { protect } = require("../Services/AuthService");


const { createFavorite, getFavorite, deleteFavorite, deleteSpecificFavoriteItem } = require("../Services/FavoriteService");
const { deleteFavoriteItemValidator, createFavoriteValidator } = require("../Resuble/FavoriteValidator");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(createFavoriteValidator, createFavorite)
  .get(getFavorite)
  .delete(deleteFavorite);
Routes.route("/:id").delete(deleteFavoriteItemValidator,deleteSpecificFavoriteItem);

module.exports = Routes;
