const express = require("express");
const { protect, allowedTo } = require("../Services/AuthService");
const {
  createCart,
  getCart,
  getLoggedUserData,
} = require("../Services/CartService");
const { createCartValidator } = require("../Resuble/CartValidator");

const Routes = express.Router();
Routes.use(protect, allowedTo("user"));
Routes.route("/").post(getLoggedUserData,createCartValidator, createCart).get(getCart);

module.exports = Routes;
