const express = require("express");
const {
  createCart,
  getCart,
  getLoggedUserData,
} = require("../Services/CartService");
const Routes = express.Router();
Routes.use(prote);
Routes.route("/").post(getLoggedUserData, createCart).get(getCart);

module.exports = Routes;
