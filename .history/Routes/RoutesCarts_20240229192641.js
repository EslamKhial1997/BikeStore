const express = require("express");
const { protect } = require("../Services/AuthService");
const { createCart, getCart } = require("../Services/CartService");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/").post(createCart).get(getCart);
// Routes.route("/:id").get(getCartByIdValidator, getCartByID);

 Routes.route("/:id").delete(dele, deleteCartByID);

module.exports = Routes;
