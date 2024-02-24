const express = require("express");
const { createCart, getCart } = require("../Services/CartService");

const Routes = express.Router();
Routes.route("/").post(getLo,createCart).get(getCart);



module.exports = Routes;
