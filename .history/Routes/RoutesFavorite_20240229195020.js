const express = require("express");


const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(getLoggedUserData, createFavoriteValidator, createFavorite)
  .get(getFavorite);
Routes.route("/:id").get(getFavoriteByIdValidator, getFavoriteByID);

Routes.route("/:id").delete(deleteFavoriteValidator, deletFavoritetByID);

module.exports = Routes;
