const express = require("express");
const { protect } = require("../Services/AuthService");
const {
  createCart,
  getCart,
  getLoggedUserData,
} = require("../Services/CartService");
const { createCartValidator } = require("../Resuble/CartValidator");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/").post(getLoggedUserData, createCart).get(getCart);

module.exports = Routes;
