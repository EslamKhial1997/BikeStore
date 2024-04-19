const { Router } = require("express");
const { createCoupon } = require("../Services/CouponService");
c

const Routes = Router();

Routes.route("/").post(createCoupon);

module.exports = Routes;