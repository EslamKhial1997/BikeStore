const { Schema } = require("mongoose");

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
    tax
  },
  {
    timestamps: true,
  }
);
