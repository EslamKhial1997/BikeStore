const { Router } = require("express");
const { createOrder } = require("../Services/OrderService");
const { protect } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/:cartId").post(protect, createOrder).get;
module.exports = Routes;