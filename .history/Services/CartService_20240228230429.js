const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");
const factory = require("./FactoryHandler");
exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);


  //Get cart For Looged User


  const createDoc = await createCartModel.create({
    user: req.user._id,
    cartItems:[{product: req.body.product}]
  });
  res.status(201).json({ data: createDoc });
}); 
exports.getCart = factory.getAll(createReviewsModel);