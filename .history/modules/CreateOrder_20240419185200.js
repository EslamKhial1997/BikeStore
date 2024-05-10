const { Schema } = require("mongoose");

const createOrderSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: "Users",
      required: [true, "User must belong "],
    },
    cartItems:[
        
    ]
  },
  {
    timestamps: true,
  }
);
