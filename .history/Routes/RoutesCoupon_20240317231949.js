const { Router } = require("express");
const {
  createCoupon,
  getCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
  checkCoupon,
} = require("../Services/CouponService");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = Router();
Routes.route("/checkCoupon").get(checkCoupon);
Routes.route("/")
  .post(protect, allowedTo("admin", "manager"), createCoupon)
  .get(getCoupons);
Routes.route("/:id").get(getCoupon).put(updateCoupon).delete(deleteCoupon);

module.exports = Routes;
