const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);


  //Get cart For Looged User


  const createDoc = await createCartModel.create({
    user: req.user._id,
    productModel.cartItems:productModel
  });
  res.status(201).json({ data: createDoc });
}); 
