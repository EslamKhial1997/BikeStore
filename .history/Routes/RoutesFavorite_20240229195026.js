const express = require("express");
const { protect } = require("../Services/AuthService");


const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(getLoggedUserData, createFavoriteValidator, createFavorite)
  .get(getFavorite);
Routes.route("/:id").get(getFavoriteByIdValidator, getFavoriteByID);

Routes.route("/:id").delete(deleteFavoriteValidator, deletFavoritetByID);

module.exports = Routes;
