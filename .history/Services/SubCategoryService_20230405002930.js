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
exports.getSubCategoryByID = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const getCategory = await createSubCategoryModel.findById(id);

  if (!getCategory) {
    return next(new ApiE(`Sorry Can't Found Data From ID :${id}`, 404));
  }
  res.status(200).json({ data: getCategory });
});