const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
if(!productModel)


  //Get cart For Looged User
  const cart = await createCartModel.findOne({ user: req.user._id });
  console.log(cart);
});
