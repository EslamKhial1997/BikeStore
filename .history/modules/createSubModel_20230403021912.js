const mongoose = require("mongoose");

const createSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "require Category"],
      unique: [true, "product name Must be unique"],
      minlength: [3, "Name Too Short"],
      maxlength: [32, "Name Too long"],
    },

    slug: {
      type: String,
      lowercase: true,
    },
    category: { type: mongoose.Schema.ObjectId , ref:"Product" },
  },
  { timestamps: true }
);
const createSubCategoryModel = mongoose.model("Products", createSchema);

module.exports = createSubCategoryModel;
