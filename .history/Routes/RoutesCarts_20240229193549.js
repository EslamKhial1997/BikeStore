const express = require("express");
const { protect } = require("../Services/AuthService");
const { createCart, getCart, deleteCart } = require("../Services/CartService");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/").post(createCart).get(getCart).delete(deleteCart);
// Routes.route("/:id").get(getCartByIdValidator, getCartByID);

Routes.route("/:cartItemId").delete(, deleteCartByID);

module.exports = Routes;
