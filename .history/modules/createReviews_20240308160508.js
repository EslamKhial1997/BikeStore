const mongoose = require("mongoose");
const createProductsModel = require("./createProducts");

const createReviewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    rating: {
      type: Number,
      require: [true, "Review Ratings Is Required"],
      min: [1, "Min ratings value is 1.0"],
      max: [5, "Max ratings value is 5.0"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      require: [true, "User Id is Required"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Products",
    },
  },
  { timestamps: true }
);
createReviewsSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name",
  });
  next();
});
createReviewsSchema.statics.countReviews = async function (productId) {
  const result = await this.aggregate([
    {
      $match: { product: productId },
    },
    {
      $group: {
        _id: "product",
        avgRating: { $avg: "$rating" },
        ratingQuantity: { $sum: 1 },
      },
    },
  ]);
if(result > 0 ){
  await createProductsModel.findByIdAndUpdate(productId , {
    
  })
}
};
createReviewsSchema.post("save", async function () {
  await this.constructor.countReviews(this.product);
});
const createReviewsModel = mongoose.model("Reviews", createReviewsSchema);
module.exports = createReviewsModel;
