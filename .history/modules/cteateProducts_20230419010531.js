const mongoose = require("mongoose");

const createSchema =new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "require Category"],
      unique: [true , "product name Must be unique"],
      minlength: [3, "Name Too Short To Create"],
      maxlength: [32, "Name Too long To Create"],
    },

    slug: {
      type: String,
      lowercase: true,
    },
  },
  { timestamps: true }
);
const createProductsModel =  mongoose.model("Category", createSchema);

module.exports = createCategoryModel;
