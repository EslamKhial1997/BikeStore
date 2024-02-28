const mongoose = require("mongoose");

const createCartSchema = new mongoose.Schema(
  {
   cartItems :[{
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      require: [true, "User Id is Required"],
    },
   },{

   }
   
  
   ]
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
