const mongoose = require("mongoose");

const createBrandsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: [true, "product name Must be unique"],
      minlength: [3, "Name Too Short To Create"],
      maxlength: [32, "Name Too long To Create"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    image: { type: String },
  }, 
  { timestamps: true }
);
const ImageURL = (doc) => {
  if (doc.image) {
    const image = `${process.env.BASE_URL}/brands/${doc.image}`;
    doc.image = image;
  }
};

const createBrandsModel = mongoose.model("Chat", createBrandsSchema);
module.exports = createBrandsModel;
