const mongoose = require("mongoose");

const createSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "require Category"],
      unique: true,
      minlength: [3, "Name Too Short"],
      maxlength: [32, "Name Too long"],
    },

    slug: {
      type: String,
      lowercase: true,
    },
  },
  { timeStemps: true }
);
const createCategoryModel =  mongoose.model("Products", createSchema);

module.exports = createCategoryModel;
