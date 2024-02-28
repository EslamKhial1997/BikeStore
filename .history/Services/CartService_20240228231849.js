const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const factory = require("./FactoryHandler");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  let cart = await Cart.findOne({ user: req.user._id });
  if (!productModel) {
    next(new ApiError(`This Product Not Found`, 404));
  }
  //Get cart For Looged User
  else {
    const productIndex = createCartModel.cartItems.findIndex(
      (item) => item.product.toString() === req.body.product
    );
    console.log(productIndex);
    // const createDoc = await createCartModel.create({
    //   user: req.user._id,
    //   cartItems: [{ product: req.body.product }],
    // });
    // res.status(201).json({ data: createDoc });
  }
});
exports.getCart = factory.getAll(createCartModel);
