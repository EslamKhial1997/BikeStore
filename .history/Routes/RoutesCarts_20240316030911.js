const express = require("express");
const { protect, allowedTo } = require("../Services/AuthService");
const {
  createCart,
  getCart,
  deleteCart,
  deleteSpecificCartItem,
  updateSpecificCartItemQuantity,
} = require("../Services/CartService");


const Routes = express.Router();
Routes.use(protect ,allowedTo);
Routes.route("/")
  .post( createCart)
  .get(getCart)
  .delete(deleteCart);
Routes.route("/:id").delete(deleteSpecificCartItem).put(updateSpecificCartItemQuantity);

module.exports = Routes;