const { Schema, model } = require("mongoose");

const createCouponSchema = new Schema(
  {
    name: String,
    expires: Date,
    discount: String,
  },
  { timestamps: true }
);

const createCoupon = model("Coupon", )