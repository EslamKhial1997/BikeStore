const mongoose = require("mongoose");

const createCartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Products",
        },
        quantity:Number,
        color:String,
        price:Number
      },
    ],
    total
  },
  { timestamps: true }
);

createCartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name email",
  });
  this.populate({
    path: "product",
  });
  next();
});
const createCartModel = mongoose.model("Cart", createCartSchema);
module.exports = createCartModel;
