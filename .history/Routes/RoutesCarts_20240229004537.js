const express = require("express");
const { protect } = require("../Services/AuthService");
const { createCart, getCart } = require("../Services/CartService");

const Routes = express.Router();

Routes.route("/").post(protect, createCart).get(protect,getCart);
// Routes.route("/:id").get(getCartByIdValidator, getCartByID);

// Routes.route("/:id").delete(deleteCartValidator, deleteCartByID);

module.exports = Routes;
