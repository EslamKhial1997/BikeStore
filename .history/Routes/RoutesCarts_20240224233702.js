const { Router } = require("express");
const { createCart } = require("../Services/CartService");


const Routes = Router()
Routes.route("/")
  .post(
   
   createCart
  )
  .get(getCart);