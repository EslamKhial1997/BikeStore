const mongoose = require("mongoose");

const createCartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Products",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        color: String,
        price: Number,
      },
    ],
    totalCartPrice: Number,
    totalPriceAfterDiscount: Number,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      require: [true, "User Id is Required"],
    },
  },
  { timestamps: true }
);

createCartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "cartItems",
  });
  next();
});
const createCartModel = mongoose.model("Cart", createCartSchema);
module.exports = createCartModel;