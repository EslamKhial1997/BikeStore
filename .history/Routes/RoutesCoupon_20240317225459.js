const { Router } = require("express");
const { createCoupon, getCoupons, getCoupon, updateCoupon, deleteCoupon } = require("../Services/CouponService");


const Routes = Router();
Routes.use
Routes.route("/").post(createCoupon).get(getCoupons);
Routes.route("/:id").get(getCoupon).put(updateCoupon).delete(deleteCoupon);

module.exports = Routes;