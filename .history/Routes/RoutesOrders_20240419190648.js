const { Router } = require("express");
const { createOrder } = require("../Services/OrderService");



const Routes = Router()

Routes.route("/").post(createOrder)