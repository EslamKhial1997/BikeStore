const { Schema, model } = require("mongoose");

const createCouponSchema = new Schema(
  {
    name: {
      ty
    },
    expires: Date,
    discount: String,
  },
  { timestamps: true }
);

const createCouponModel = model("Coupon", createCouponSchema);

module.exports = createCouponModel;
