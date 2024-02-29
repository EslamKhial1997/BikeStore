const express = require("express");
const { protect } = require("../Services/AuthService");

const { createCartValidator, deleteCartItemValidator } = require("../Resuble/CartValidator");

const Routes = express.Router();
Routes.use(protect);
Routes.route("/")
  .post(createCartValidator, createF)
  .get(getCart)
  .delete(deleteCart);
Routes.route("/:id").delete(deleteCartItemValidator,deleteSpecificCartItem);

module.exports = Routes;
