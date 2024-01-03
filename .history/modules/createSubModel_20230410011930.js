const { Schema } = require("mongoose");


const createSchema = new m.Schema(
  {
    name: {
      type: String,
      required: [true, "require Category"],
      unique: [true, "product name Must be unique"],
      minlength: [2, "Name Too Short"],
      maxlength: [32, "Name Too long"],
    },

    slug: {
      type: String,
      lowercase: true,
    },
    category: { type: Schema.ObjectId, ref: "category" , required: [true, 'Cart must belong to a product']},
  },
  { timestamps: true }
);
const createSubCategoryModel = mongoose.model("Subcategory", createSchema);

module.exports = createSubCategoryModel;
