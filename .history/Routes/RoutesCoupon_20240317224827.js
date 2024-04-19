const { Router } = require("express");
const { createCoupon, getCoupons, getCoupon } = require("../Services/CouponService");


const Routes = Router();

Routes.route("/").post(createCoupon).get(getCoupons);
Routes.route("/:id").get(getCoupon).put(update);

module.exports = Routes;