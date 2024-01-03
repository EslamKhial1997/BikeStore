const mongoose = require("mongoose");

const createSubCategories = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
      minlength: [2, "Name Too Short Name ,mongoose.Schema"],
      maxlength: [32, "Name Too long Name ,mongoose.Schema"],
      trim: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },

    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Products",
      required: [true, "Product is already required ,mongoose.Schema"],
    },
  },
  { timeStemps: true }
);
exports.model = mongoose.model("SubCategory", createSubCategories);
