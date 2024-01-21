
const { v4: uuidv4 } = require("uuid");
const factory = require("./FactoryHandler");
const createSubCategoryModel = require("../modules/createSubModel");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");
const sharp = require("sharp");
const expressAsyncHandler = require("express-async-handler");
exports.resizeImage = expressAsyncHandler(async (req, res, next) => {
  const filename = `subCategories-${uuidv4()}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
  .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 95 })
    .toFile(`uploads/subCategories/${filename}`);
  req.body.image = filename;
  next();
});

exports.uploadImage = UploadSingleImage("image");
exports.createSubCategoryOnCategory = (req , res , next)=>{
if(!req.body.category) req.body.category = req.params.categoryId;
next()
}
exports.createSubCategories = factory.createOne(createSubCategoryModel)
exports.createFilterObject = (req , res , next)=>{
  let filterSubCategory = {};
  if (req.params.categoryId)
    filterSubCategory = { category: req.params.categoryId };
    req.filterObject = filterSubCategory;
    next()
}
exports.getSubCategories =factory.getAll(createSubCategoryModel)
exports.getSubCategoryByID = factory.getOne(createSubCategoryModel)
exports.deleteSubCategoryByID = factory.deleteOne(createSubCategoryModel)
exports.updateSubCategory = factory.updateOne(createSubCategoryModel)