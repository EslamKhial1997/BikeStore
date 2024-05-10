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
    taxPrice:{
        type:Number,
        default:0
    },
    shappingPrice:{
        type:Number,
        default:0
    }
    shappingAddress:{
        type: Schema.ObjectId,
        ref: "Products",
    }
  },
  {
    timestamps: true,
  }
);
