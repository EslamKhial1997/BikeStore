const { Router } = require("express");
const {
  createOrder,
  filterOrderForLoggedUser,
  getAllOrder,
  updateDeliverdStatus,
} = require("../Services/OrderService");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/:cartId").post(protect, createOrder);

Routes.route("/").get(
  protect,
  allowedTo("user", "admin", "manager"),
  filterOrderForLoggedUser,
  getAllOrder
);
Routes.route("/isdeliverd/:id").put(
  protect,
  allowedTo("user", "admin", "manager"),
  updateDeliverdStatus
);
module.exports = Routes;
