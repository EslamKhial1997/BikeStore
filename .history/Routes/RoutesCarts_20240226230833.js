const express = require("express");
const { protect } = require("../Services/AuthService");



const Routes = express.Router();
Routes.use(protect);
Routes.route("/").post(AddProduct);
// Routes.route("/:id").get(getCartByIdValidator, getCartByID);

// Routes.route("/:id").delete(deleteCartValidator, deleteCartByID);

module.exports = Routes;
