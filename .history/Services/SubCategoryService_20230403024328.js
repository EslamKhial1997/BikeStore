const { default: slugify } = require("slugify/slugify");
const asyncHandler = require("express-async-handler");

const createSubCategoryModel = require("../modules/createSubModel");

exports.createSubCategories = asyncHandler(async (req, res) => {
  const { name, category } = req.body;
  const createSubCategory = await createSubCategoryModel.create({
    name,
    slug: slugify(name),
    category,
  });
  res.status(201).json({ data: createSubCategory });
});
