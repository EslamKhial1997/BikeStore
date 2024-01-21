const mongoose = require("mongoose");

const createReviewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    rating: {
      type: Number,
      require: [true, "Review Ratings Is Required"],
      min: [1, 'Min ratings value is 1.0'],
      max: [5, 'Max ratings value is 5.0'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      require: [true, "User Id is Required"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Products",
     this.getReviewByIdValidator
    },
  },
  { timestamps: true }
);
const createReviewsModel = mongoose.model("Reviews", createReviewsSchema);
module.exports = createReviewsModel;
