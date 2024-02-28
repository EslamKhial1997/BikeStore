const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const factory = require("./FactoryHandler");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  let cart = await createCartModel.findOne({ user: req.user._id });

  if (cart) {
    const map = await cart.cartItems.map((e) => e.product._id.toString());
    if (map.includes(req.body.product.toString())) {
      next(new ApiError(`Product Added In Cart`, 404));
    }
  }

  if (!productModel) next(new ApiError(`Product ID Not Found`, 404));

  if (!cart) {
    // create cart fot logged user with product
    console.log("IF cart created");
    cart = await createCartModel.create({
      user: req.user._id,
      cartItems: [{ product: req.body.product }],
    });
  } else {
  await cart.cartItems.push({ product: req.body.product });
    console.log("Else cart created");
  }
  await cart.save();
  res.status(201).json({ data: cart });
});
exports.getCart = factory.getAll(createCartModel);
