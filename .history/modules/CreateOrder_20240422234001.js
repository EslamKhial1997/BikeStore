const { Schema, model } = require("mongoose");

const createOrderSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: "Users",
      required: [true, "User must belong "],
    },
    cartItems: [
      {
        product: {
          type: Schema.ObjectId,
          ref: "Products",
        },
        price: String,
        color: String,
        quantity: String,
      },
    ],
    taxPrice: {
      type: Number,
      default: 0,
    },
    shippingPrice: {
      type: Number,
      default: 0,
    },
    shippingAddress: {
      type: Schema.ObjectId,
      ref: "Users.addresses",
    },
    totalPrice: Number,
    paymentMethod: { type: String, enum: ["card", "cash"], default: "cash" },
    paidAt: Date,
    isPaid: { type: Boolean, default: false },
    isDeliverd: { type: Boolean, default: false },
    deliverd: Date,
  },
  {
    timestamps: true,
  }
);
createOrderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user.",
    select:"alias"
  });
  next();
});
const createOrderModel = model("Orders", createOrderSchema);
module.exports = createOrderModel;
