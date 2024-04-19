const { Schema, model } = require("mongoose");

const createCouponSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Coupon Name Is Required"],
      unique: [true, "Coupon Name Is must be unique"],
    },
    expires: {
      type: Date,
      validate: {
        validator: function (val) {
          return val > Date.now();
        },
      },
    },
    discount: {
      type: String,
      required: [true, "لو سمحت ادخل الخصم"],
    },
  },
  { timestamps: true }
);

const createCouponModel = model("Coupon", createCouponSchema);

module.exports = createCouponModel;