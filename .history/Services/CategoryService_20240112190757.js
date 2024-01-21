const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const expressAsyncHandler = require("express-async-handler");
const createModel = require("../modules/createModel");
const factory = require("./FactoryHandler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");

exports.resizeImage = expressAsyncHandler(async (req, res, next) => {
  if (req.file) {
    const filename = `category-${uuidv4()}-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/categories/${filename}`);
    req.body.image = filename;
   
  }
  next();
});

exports.uploadImage = UploadSingleImage("image");
exports.createCategories = factory.createOne(createModel);
exports.getCategories = factory.getAll(createModel);
exports.getCategoryByID = factory.getOne(createModel);
exports.deleteCategoryByID = factory.deleteOne(createModel);
exports.updateCategory = factory.updateOne(createModel);
