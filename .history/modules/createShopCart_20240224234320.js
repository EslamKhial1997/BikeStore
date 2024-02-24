const  mongoose  = require("mongoose");



const createCartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "Users",
        require: [true, "User Id is Required"],
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Products",
    
      },
},{timestamps:true})


paymentRequestSchema.pre(/^find/, function (next) {
    this.populate({
      path: "user",
    });
    this.populate({
      path: "promoCode",
    });
    next();
  });
const createCartModel = mongoose.model("Cart", createCartSchema);
module.exports = createCartModel;