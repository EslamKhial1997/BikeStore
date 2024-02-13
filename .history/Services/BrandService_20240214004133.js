const expressAsyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const createBrandsModel = require("../modules/createBrandsModel");
const factory = require("./FactoryHandler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");


exports.uploadImageBrand = UploadSingleImage("image");
exports.resizeImageBrand = expressAsyncHandler(async (req, res, next) => {
  const filename = `brand-${uuidv4()}-${Date.now()}.jpeg`;
 
  next();
});

exports.createBrands = factory.createOne(createBrandsModel);
exports.getBrands = factory.getAll(createBrandsModel);
exports.getBrandsById = factory.getOne(createBrandsModel);
exports.updateBrandsById = factory.updateOne(createBrandsModel);
exports.deleteBrandsById = factory.deleteOne(createBrandsModel);
