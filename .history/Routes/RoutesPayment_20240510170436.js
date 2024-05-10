const { Router } = require("express");
const { createPayment } = require("../Services/PaymentService");

const Routes = Router();
Routes.post("/create-checkout-session/:cartId",protect,
allowedTo("user", "admin", "manager"), createPayment);

module.exports = Routes;
