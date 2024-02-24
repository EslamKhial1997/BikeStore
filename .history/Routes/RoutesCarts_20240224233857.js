const express = require("express");
const { createCart, getCart } = require("../Services/CartService");

const Routes = express.Router();
Routes.route("/").post(createCart).get(getCart);
