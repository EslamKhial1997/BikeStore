const express = require("express");
const { protect } = require("../Services/AuthService");
const {AddProductToCart} = require("./")


const Routes = express.Router();
Routes.use(protect);
Routes.route("/").post(AddProductToCart);
// Routes.route("/:id").get(getCartByIdValidator, getCartByID);

// Routes.route("/:id").delete(deleteCartValidator, deleteCartByID);

module.exports = Routes;
