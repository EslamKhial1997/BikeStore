const expressAsyncHandler = require("express-async-handler");
const { default: slugify } = require("slugify/slugify");
const createBrandsModel = require("../modules/createBrandsModel");
const ApiError = require("../Resuble/ApiErrors");

exports.createBrands = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;
  const createBrand = await createBrandsModel.create({
    name,
    slug: slugify(name),
  });
  res.status(201).json({ data: createBrand });
});
exports.getBrands = expressAsyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 3;
  const skip = (page - 1) * limit;
  const getBrand = await createBrandsModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: getBrand.length, page, data: getBrand });
});

exports.getBrandsById = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const getBrandById = await createBrandsModel.findById(id);
  if (!getBrandById)
    next(new ApiError(`Sorry Can't get This ID From ID :${id}`, 404));
  res.status(200).json({ data: getBrandById });
});
exports.updateBrandsById = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const updateBrandById = await createBrandsModel.findOneAndUpdate(
    {
      _id: id,
    },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!updateBrandById)
    next(new ApiError(`Sorry Can't Update This ID From ID :${id}`, 404));
  res.status(200).json({ data: updateBrandById });
});
exports.deleteBrandsById = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deleteBrandsById = await createBrandsModel.findById(id);
    if (!deleteBrandsById)
      next(new ApiError(`Sorry Can't Delete This ID From ID :${id}`, 404));
    res.status(200).json({ data: deleteBrandsById });
  });
