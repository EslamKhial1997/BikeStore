const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const factory = require("./FactoryHandler");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  const cart = await createCartModel.findOne({ user: req.user._id });
  const map = cart.cartItems.map((e) => e.product._id.toString());
if()
  if (map.includes(req.body.product.toString())) {
    console.log("Yes");
  }
  //Get cart For Looged User
  else {
    // const createDoc = await createCartModel.create({
    //   user: req.user._id,
    //   cartItems: [{ product: req.body.product }],
    // });
    // res.status(201).json({ data: createDoc });
    console.log(req.body.product.toString());
    console.log(map);
  }
});
exports.getCart = factory.getAll(createCartModel);
