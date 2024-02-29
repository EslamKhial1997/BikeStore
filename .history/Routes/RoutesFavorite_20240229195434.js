const express = require("express");
const { protect } = require("../Services/AuthService");
const { createFavorite ,getFavorite} = require("../Services/FavoriteService");


const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post( createFavorite)
  .get(getFavorite).delete();


Routes.route("/:id").delete(deleteFavoriteValidator, deletFavoritetByID);

module.exports = Routes;
