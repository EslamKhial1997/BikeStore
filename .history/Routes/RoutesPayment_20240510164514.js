const { Router } = require("express");
const { createPayment } = require("../Services/PaymentService");

const Routes = Router();
Routes.post("/create-checkout-session", createPayment);

module.exports = Routes;
