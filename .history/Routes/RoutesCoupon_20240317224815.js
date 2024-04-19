const { Router } = require("express");
const { createCoupon, getCoupons } = require("../Services/CouponService");


const Routes = Router();

Routes.route("/").post(createCoupon).get(getCoupons);
Routes.route("/:id").post(getCoupon).get(getCoupons);

module.exports = Routes;