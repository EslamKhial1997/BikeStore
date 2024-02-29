const express = require("express");
const { protect } = require("../Services/AuthService");
const { createFavorite ,getFavorite, deleteFavorite} = require("../Services/FavoriteService");


const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post( createFavorite)
  .get(getFavorite).delete(deleteFavorite);


  Routes.route("/:favoriteItemId").delete( delete);

module.exports = Routes;
