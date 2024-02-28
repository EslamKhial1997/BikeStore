const express = require("express");
const { protect } = require("../Services/AuthService");
const {
 
  getLoggedUserData,
 
} = require("../Services/CartService");

const { createFavoriteValidator, getFavoriteByIdValidator, deleteFavoriteValidator } = require("../Resuble/FavoriteValidator");
const { createFavorite, getFavoriteByID, deletFavoritetByID } = require("../Services/FavoriteService");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(getLoggedUserData, createFavoriteValidator, createFavorite)
  .get(getCart);
Routes.route("/:id").get(getFavoriteByIdValidator, getFavoriteByID);

Routes.route("/:id").delete(deleteFavoriteValidator, deletFavoritetByID);

module.exports = Routes;
