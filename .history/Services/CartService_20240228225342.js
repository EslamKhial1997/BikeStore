const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  if (!productModel)
    next(
      new ApiError(`Sorry Can't Update Password From ID :${req.params.id}`, 404)
    );

  //Get cart For Looged User
  const cart = await createCartModel.findOne({ user: req.user._id });

  const createDoc = await createCartModel.create({
    user: req.user._id,
  });
  res.status(201).json({ data: createDoc });
}); 
