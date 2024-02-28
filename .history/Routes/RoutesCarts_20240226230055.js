const express = require("express");
const { protect } = require("../Services/AuthService");
const {
  createCart,
  getCart,
  getLoggedUserData,
  getLoggedUserDataa,
  getCartByID,
  deleteCartByID,
  AddProductToCart,
} = require("../Services/CartService");
const {
  createCartValidator,
  getCartValidator,
  getCartByIdValidator, 
  deleteCartValidator,
} = require("../Resuble/CartValidator");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post( AddProductToCart)
Routes.route("/:id").get(getCartByIdValidator, getCartByID);

Routes.route("/:id").delete(deleteCartValidator, deleteCartByID);

module.exports = Routes;
