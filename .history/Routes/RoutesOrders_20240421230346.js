const { Router } = require("express");
const {
  createOrder,
  filterOrderForLoggedUser,
  getAllOrder,
} = require("../Services/OrderService");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/:cartId").post(protect, createOrder)
Routes.route("/").get(protect,allowedTo('user', 'admin', 'manager'),filterOrderForLoggedUser, getAllOrder);
module.exports = Routes;
