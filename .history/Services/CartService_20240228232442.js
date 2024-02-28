const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const factory = require("./FactoryHandler");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  let cart = await createCartModel.findOne({ user: req.user._id });
console.log(cart.cartItems);
  const productIndex = cart.cartItems.product.includes(req.body.product})
  console.log(productIndex);
  if (!productModel) {
    next(new ApiError(`This Product Not Found`, 404));
  }
  //Get cart For Looged User
  else {
  
    // const createDoc = await createCartModel.create({
    //   user: req.user._id,
    //   cartItems: [{ product: req.body.product }],
    // });
    // res.status(201).json({ data: createDoc });
  }
});
exports.getCart = factory.getAll(createCartModel);
