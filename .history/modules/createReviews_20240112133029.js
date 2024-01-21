const mongoose = require("mongoose");

const createReviewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    rating: {
      type: Number,
      require: [true, "Review Ratings Is Required"],
      minLength: [1, "Review Ratings Must Be between 1 to 5"],
      maxLength: [5, "Review Ratings Must Be between 1 to 5"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      require: [true, "User Id is Required"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Products",
      require: [true, "Products Id is Required"],
    },
  },
  { timestamps: true }
);
const createReviewsModel = mongoose.model("Reviews", createReviewsSchema);
module.exports = createReviewsModel;
