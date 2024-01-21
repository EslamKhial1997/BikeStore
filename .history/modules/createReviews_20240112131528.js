const { Mongoose } = require("mongoose");

const createReviewsSchema = new Mongoose(
  {
    title: {
      type: String,
    },
    rating: {
      type: Number,
      require: [true, "Review Ratings Is Required"],
    },
    user:{
type:Mongoose
    },
    minlength: [1, "Review Ratings Must Be between 1 to 5"],
    maxlength: [1, "Review Ratings Must Be between 1 to 5"],
  },
  { timestamps: true }
);
const createReviewsModel = Mongoose.model("Brands", createReviewsSchema);
module.exports = createReviewsModel;
