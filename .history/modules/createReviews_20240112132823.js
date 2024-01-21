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
    
  },
  { timestamps: true }
);
const createReviewsModel = mongoose.model("Reviews", createReviewsSchema);
module.exports = createReviewsModel;
