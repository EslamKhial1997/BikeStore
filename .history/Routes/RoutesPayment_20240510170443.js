const { Router } = require("express");
const { createPayment } = require("../Services/PaymentService");
const { protect } = require("../Services/AuthService");

const Routes = Router();
Routes.post("/create-checkout-session/:cartId",protect,
allowedTo("user", "admin", "manager"), createPayment);

module.exports = Routes;
