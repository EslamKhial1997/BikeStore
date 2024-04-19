const { Schema, model } = require("mongoose");

const createCouponSchema = new Schema(
  {
    name: {
      type: String,
      required:[true , "Coupon Name Is Required"],
      unique:[true , "Coupon Name Is must be unique"]
    },
    expires: Date,
    discount:{
      required: [true, "لو سمحت ادخل الخصم"],
    } String,
  },
  { timestamps: true }
);

const createCouponModel = model("Coupon", createCouponSchema);

module.exports = createCouponModel;
