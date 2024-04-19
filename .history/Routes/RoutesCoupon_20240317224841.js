const { Router } = require("express");
const { createCoupon, getCoupons, getCoupon, updateCoupon } = require("../Services/CouponService");


const Routes = Router();

Routes.route("/").post(createCoupon).get(getCoupons);
Routes.route("/:id").get(getCoupon).put(updateCoupon).delete();

module.exports = Routes;