const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const factory = require("./FactoryHandler");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);

  if (productModel) {
    next(new ApiError(`This Product Added Before in Cart`, 404));
  }
  //Get cart For Looged User

else
  res.status(201).json({ data: createDoc });
});
exports.getCart = factory.getAll(createCartModel);
