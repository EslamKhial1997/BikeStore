const { Router } = require("express");
const {
  createOrder,
  filterOrderForLoggedUser,
  getAllOrder,
} = require("../Services/OrderService");
const { protect } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/:cartId").post(protect, createOrder)
Routes.route("/").get(protect,,filterOrderForLoggedUser, getAllOrder);
module.exports = Routes;
