const express = require("express");
const {
  createCart,
  getCart,
  getLoggedUserData,
} = require("../Services/CartService");
Routes.use(protect);
const Routes = express.Router();
Routes.route("/").post(getLoggedUserData, createCart).get(getCart);

module.exports = Routes;
