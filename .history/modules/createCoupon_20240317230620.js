const { Schema, model } = require("mongoose");

const createCouponSchema = new Schema(
  {
    name: {
      type: String,
      required:[true , "Coupon Name Is "]
    },
    expires: Date,
    discount: String,
  },
  { timestamps: true }
);

const createCouponModel = model("Coupon", createCouponSchema);

module.exports = createCouponModel;
