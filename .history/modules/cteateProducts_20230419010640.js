const mongoose = require("mongoose");

const createSchema = new mongoose.Schema(
  
    {
      title: {
        type: String,
        require: [true, "Product tittle is Required"],
        minLength: [3, "Product tittle is Too Short"],
        maxLength: [32, "Product tittle is Too Long"],
      },
      slug: {
        type: String,
        lowercase: true,
        require: true,
      },
      description: {
        type: String,
        require: [true, "Product description is Required"],
        minLength: [20, "Product tittle is Too Short"],
      },
      sold: {
        type: Number,
        default: 0,
      },
      quantity: {
        type: Number,
        require: [true, "Product quantity is Required"],
      },
      price: {
        type: Number,
        require: [true, "Product Price is Required"],
        trim: true,
        max: [200000, "Product Price is Too Long"],
      },
      priceAfterDiscount: {
        type: Number,
        trim: true,
      },
      colors: [String],
      imageCover: {
        type: String,
        require: [true, "Product ImageCover is Required"],
      },
      images: {
        type: [String],
      },
      ratings: {
        type: Number,
        minLength: [1, "Rating must be Above Or Equals 1.0"],
        maxLength: [5, "Rating must be Below Or Equals 5.0"],
      },
      ratingQuantity: {
        type: Number,
        default: 0,
      },
      category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        require: [true, "Product Must Be belong To Category"],
      },
      subCategory: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "Subcategory",
        },
      ],
      brand: {
        type: mongoose.Schema.ObjectId,
        ref: "Brands",
      },
  },
  { timestamps: true }
);
const createProductsModel = mongoose.model("Category", createSchema);

module.exports = createProductsModel;
