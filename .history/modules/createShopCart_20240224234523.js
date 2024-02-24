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


createCartSchema.pre(/^find/, function (next) {
    this.populate({
      path: "user",
      select: "name",
    });
    this.populate({
      path: "product",
    });
    next();
  });
const createCartModel = mongoose.model("Cart", createCartSchema);
module.exports = createCartModel;