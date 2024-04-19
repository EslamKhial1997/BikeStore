const { Schema } = require("mongoose");

const createCouponSchema = new Schema(
  {
    name: String,
    expires: Date,
    discount: String,
  },
  { timestamps: true }
);

const createCoupon = 