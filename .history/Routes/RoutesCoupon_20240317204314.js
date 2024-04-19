const { Router } = require("express");
const { createCoupon } = require("../Services/CouponService");


const Routes = Router();

Routes.route("/").post(createCoupon);

module.exports = Routes;