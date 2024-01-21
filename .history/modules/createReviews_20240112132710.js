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
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      require: [true, "User Id is Required"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Products",
      require: [true, "Products Id is Required"],
    },
    minlength: [1, "Review Ratings Must Be between 1 to 5"],
    maxlength: [1, "Review Ratings Must Be between 1 to 5"],
  },
  { timestamps: true }
);
const createReviewsModel = mongoose.Schema.model("Reviews", createReviewsSchema);
module.exports = createReviewsModel;
