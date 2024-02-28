const  mongoose  = require("mongoose");



const createFavoriteSchema = new mongoose.Schema({
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


createFavoriteSchema.pre(/^find/, function (next) {
    this.populate({
      path: "user",
      select: "name email"
    });
    this.populate({
      path: "product",
    });
    next();
  });
const createFavoriteModel = mongoose.model("Cart", createFavoriteSchema);
module.exports = createFavoriteModel;