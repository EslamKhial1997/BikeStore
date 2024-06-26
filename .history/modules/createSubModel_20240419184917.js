const { Schema } = require("mongoose");


const createSchema = new Schema(
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
    image: String,
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "SubCategory must belong to a Category"],
    },
  },
  { timestamps: true }
);
const ImageURL = (doc) => {
  if (doc.image) {
    const image = `${process.env.BASE_URL}/subCategories/${doc.image}`;
    doc.image = image;
  }
};
createSchema.post("init", (doc) => {
  ImageURL(doc);
});
createSchema.post("save", (doc) => {
  ImageURL(doc);
});
createSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
    select: "name",
  });
  next();
});
const createSubCategoryModel = model("Subcategory", createSchema);

module.exports = createSubCategoryModel;
