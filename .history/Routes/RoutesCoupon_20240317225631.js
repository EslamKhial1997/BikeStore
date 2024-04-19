const { Router } = require("express");
const { createCoupon, getCoupons, getCoupon, updateCoupon, deleteCoupon } = require("../Services/CouponService");
const { protect, allowedTo } = require("../Services/AuthService");


const Routes = Router();
R
Routes.route("/").post(createCoupon).get(getCoupons);
Routes.route("/:id").get(getCoupon).put(updateCoupon).delete(deleteCoupon);

module.exports = Routes;