const expressAsyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const createBrandsModel = require("../modules/createBrandsModel");
const factory = require("./FactoryHandler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");


exports.uploadImageBrand = UploadSingleImage("image");
exports.resizeImageBrand = expressAsyncHandler(async (req, res, next) => {
  const filename = `brand-${uuidv4()}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
  .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 95 })
    .toFile(`uploads/brands/${filename}`);
  req.body.image = filename;
  next();
});

exports.createBrands = factory.createOne(createBrandsModel);
exports.getBrands = factory.getAll(createBrandsModel);
exports.getBrandsById = factory.getOne(createBrandsModel);
exports.updateBrandsById = factory.updateOne(createBrandsModel);
exports.deleteBrandsById = factory.deleteOne(createBrandsModel);
