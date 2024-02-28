const express = require("express");
const { protect } = require("../Services/AuthService");
const {createCart} req

const Routes = express.Router();

Routes.route("/")
  .post(protect, createCart)
  // .get(getCart);
// Routes.route("/:id").get(getCartByIdValidator, getCartByID);

// Routes.route("/:id").delete(deleteCartValidator, deleteCartByID);

module.exports = Routes;
