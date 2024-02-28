const express = require("express");
const { protect } = require("../Services/AuthService");
const {
 
  getCart,
  getLoggedUserData,
  getCartByID,
  deleteCartByID,
} = require("../Services/CartService");
const {
  createCartValidator,
  getCartByIdValidator,
  deleteCartValidator,
} = require("../Resuble/CartValidator");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post( createCart)
  .get(getCart);
Routes.route("/:id").get(getCartByIdValidator, getCartByID);

Routes.route("/:id").delete(deleteCartValidator, deleteCartByID);

module.exports = Routes;
