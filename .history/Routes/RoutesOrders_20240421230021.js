const { Router } = require("express");
const { createOrder, filterOrderForLoggedUser, getAllOrder } = require("../Services/OrderService");
const { protect } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/:cartId").post(protect, createOrder).get(filterOrderForLoggedUser,getAllOrder);
module.exports = Routes;