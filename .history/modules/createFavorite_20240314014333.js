const mongoose = require("mongoose");

const createFavoriteSchema = new mongoose.Schema(
  {
    favoriteItems: [
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
  { timestamps: true }
);

createFavoriteSchema.pre(/^find/, function (next) {
  this.populate({
    path: "favoriteItems.product",
  });
  next();
});
const createFavoriteModel = mongoose.model("Favorite", createFavoriteSchema);
module.exports = createFavoriteModel;
