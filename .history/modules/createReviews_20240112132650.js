const mongoose = require("mongoose");

const createReviewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    rating: {
      type: Number,
      require: [true, "Review Ratings Is Required"],
    },
    user: {
      type: Mongoose.ObjectId,
      ref: "Users",
      require: [true, "User Id is Required"],
    },
    product: {
      type: Mongoose.ObjectId,
      ref: "Products",
      require: [true, "Products Id is Required"],
    },
    minlength: [1, "Review Ratings Must Be between 1 to 5"],
    maxlength: [1, "Review Ratings Must Be between 1 to 5"],
  },
  { timestamps: true }
);
const createReviewsModel = Mongoose.model("Reviews", createReviewsSchema);
module.exports = createReviewsModel;
