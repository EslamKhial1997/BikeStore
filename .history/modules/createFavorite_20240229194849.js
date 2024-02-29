const  mongoose  = require("mongoose");



const createFavoriteSchema = new mongoose.Schema({
  
    cartItems: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Products",
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      require: [true, "User Id is Required"],
    },
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
const createFavoriteModel = mongoose.model("Favorite", createFavoriteSchema);
module.exports = createFavoriteModel;