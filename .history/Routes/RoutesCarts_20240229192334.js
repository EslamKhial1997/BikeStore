const express = require("express");
const { protect } = require("../Services/AuthService");
const { createCart, getCart, deleteCart,getLoggedUserData } = require("../Services/CartService");


const Routes = express.Router();
Routes.use(protect);
Routes.route("/").post(createCart).get(getCart).delete(getLoggedUserData, deleteCart);
// Routes.route("/:id").get(getCartByIdValidator, getCartByID);


module.exports = Routes;
