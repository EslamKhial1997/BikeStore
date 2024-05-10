const { Router } = require("express");
const { createPayment } = require("../Services/PaymentService");

const Routes = Router();
Routes.get("/create-checkout-session", createPayment);

module.exports = Routes;
