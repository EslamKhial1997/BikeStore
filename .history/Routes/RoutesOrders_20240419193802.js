const { Router } = require("express");
const { createOrder } = require("../Services/OrderService");

const Routes = Router();

Routes.route("/:cartId").post(prote createOrder);
module.exports = Routes;