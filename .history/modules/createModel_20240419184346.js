const { Schema, model } = require("mongoose");


const createSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "require Category"],
      unique: [true, "product name Must be unique"],
      minlength: [3, "Name Too Short To Create"],
      maxlength: [32, "Name Too long To Create"],
    },
    image: {
      type: String,
    },
    slug: {
      type: String,
      lowercase: true,
    },
  }, 
  { timestamps: true }
);
const ImageURL = (doc) => {
  if (doc.image) {
    const image = `${process.env.BASE_URL}/categories/${doc.image}`;
    doc.image = image;
  }
};
createSchema.post("init", (doc) => {
  ImageURL(doc);
});
createSchema.post("save", (doc) => {
  ImageURL(doc);
});
const createCategoryModel =model("Category", createSchema);

module.exports = createCategoryModel;
