const factory = require("./FactoryHandler");

const createProductsModel = require("../modules/createProducts");
const expressAsyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const { UploadMultiImage } = require("../Middleware/UploadImageMiddleware");

exports.resizeImageProducts = expressAsyncHandler(async (req, res, next) => {
console.log(req.files.images)
  if (req.files.imageCover) {
    const coverProduct = `coverProduct-${uuidv4()}-${Date.now()}-cover.jpeg`;
    await sharp(req.files.imageCover[0].buffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/products/${coverProduct}`);
    req.body.imageCover = coverProduct;
  }

  if (req.files.images) {
    req.body.images = [];
    await Promise.all(
      req.files.images.map(async (ele, inx) => {
        const imageProduct = `imageProduct-${uuidv4()}-${Date.now()}-${
          inx + 1
        }.jpeg`;

        await sharp(ele.buffer)
          .resize(2000, 1333)
          .toFormat("jpeg")
          .jpeg({ quality: 95 })
          .toFile(`uploads/products/${imageProduct}`);
        req.body.images.push(imageProduct);
      })
    );

    next();
  }
});
exports.UploadImageService = UploadMultiImage([
  { name: "imageCover", maxCount: 1 },
  [name: "images", maxCount: 8 ],
]);
exports.createProductonCategory = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};
exports.createProducts = factory.createOne(createProductsModel);

exports.getProducts = factory.getAll(createProductsModel, "Products");

exports.getProduct = factory.getOne(createProductsModel);

exports.updateProduct = factory.updateOne(createProductsModel);

exports.deleteProduct = factory.deleteOne(createProductsModel);
