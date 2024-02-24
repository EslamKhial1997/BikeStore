const express = require("express");
const {
  createCart,
  getCart,
  getLoggedUserData,
} = require("../Services/CartService");
const { protect } = require("../Services/AuthService");
const Routes = express.Router();
Routes.use(protect);
Routes.route("/").post(getLoggedUserData, createCart).get(getCart);

module.exports = Routes;
