const asyncHandler = require("express-async-handler");
const { default: slugify } = require("slugify/slugify");
const createBrandsModel = require("../modules/createBrandsModel");

exports.createBrands = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const createBrand = await createBrandsModel.create({
    name,
    slug: slugify(name),
  });
  res.status(201).json({ data: createBrand });
});
exports.getBrands = expressAsyncHandler(async (res, req) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 3;
  const skip = (page - 1) * limit;
  const getBrand = await createBrandsModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: getBrand.length, page, data: getBrand });
});
