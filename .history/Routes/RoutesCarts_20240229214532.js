const express = require("express");
const { protect } = require("../Services/AuthService");
const {
  createCart,
  getCart,
  deleteCart,
  deleteSpecificCartItem,
} = require("../Services/CartService");
const { createCartValidator, deleteCartItemValidator } = require("../Resuble/CartValidator");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(createCartValidator, createCart)
  .get(getCart)
  .delete(deleteCart);
Routes.route("/:cartItemId").delete(deleteCartItemValidator,deleteSpecificCartItem);

module.exports = Routes;
