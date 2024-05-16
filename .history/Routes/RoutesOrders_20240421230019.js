const { Router } = require("express");
const { createOrder, filterOrderForLoggedUser } = require("../Services/OrderService");
const { protect } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/:cartId").post(protect, createOrder).get(filterOrderForLoggedUser,getAllOrd);
module.exports = Routes;