const createModel = require("../modules/createModel");
const factory = require("./FactoryHandler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const expressAsyncHandler = require("express-async-handler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");
exports.resizeImage = expressAsyncHandler(async (req, res, next) => {
  if (req.file) {}

});

exports.uploadImage = UploadSingleImage("image");
exports.createCategories = factory.createOne(createModel);
exports.getCategories = factory.getAll(createModel);
exports.getCategoryByID = factory.getOne(createModel);
exports.deleteCategoryByID = factory.deleteOne(createModel);
exports.updateCategory = factory.updateOne(createModel);
