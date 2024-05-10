const { Router } = require("express");
const { createPayment } = require("../Services/PaymentService");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = Router();
Routes.post("/create-checkout-session/:cartId",protect,
allowedTo("user"), createPayment);

module.exports = Routes;
