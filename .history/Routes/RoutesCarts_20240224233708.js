const { Router } = require("express");
const { createCart, getCart } = require("../Services/CartService");

const Routes = Router();
Routes.route("/").post(createCart).get(getCart);
