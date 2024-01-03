const { default: slugify } = require("slugify/slugify");
const asyncHandler = require("express-async-handler");

const createSubCategoryModel = require("../modules/createSubModel");
const ApiError = require("../Resuble/ApiErrors");

exports.createSubCategories = asyncHandler(async (req, res) => {
  const { name, category } = req.body;
  const createSubCategory = await createSubCategoryModel.create({
    name,
    slug: slugify(name),
    category,
  });
  res.status(201).json({ data: createSubCategory });
});
exports.getSubCategories = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 3;
  const skip = (page - 1) * limit;
  const getCategories = await createSubCategoryModel.find({}).skip(skip).limit(limit).;
  res
    .status(200)
    .json({ results: getCategories.length, page, data: getCategories });
});
exports.getSubCategoryByID = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const getCategory = await createSubCategoryModel.findById(id);

  if (!getCategory) {
    return next(new ApiError(`Sorry Can't Found Data From ID :${id}`, 404));
  }
  res.status(200).json({ data: getCategory });
});
exports.deleteSubCategoryByID = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const getCategory = await createSubCategoryModel.findByIdAndDelete(id);

  if (!getCategory) {
    return next(new ApiError(`Sorry Can't Delete This ID From ID :${id}`, 404));
  }
  res.status(200).send();
});
exports.updateSubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const getCategory = await createSubCategoryModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );

  if (!getCategory) {
    return next(new ApiError(`Sorry Can't Update Data From ID :${id}`, 404));
  }
  res.status(200).json({ data: getCategory });
});