const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const factory = require("./FactoryHandler");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  let cart = await createCartModel.findOne({ user: req.user._id });

  const map = cart.cartItems.map((e) => e.product._id.toString())

 if (!productModel) next(new ApiError(`Product ID Not Found`, 404));


  if (map.includes(req.body.product.toString())) {
    next(new ApiError(`Product Added In Cart`, 404));
  }
  
  if (!cart) {
    // create cart fot logged user with product
    cart = await createCartModel.create({
      user: req.user._id,
      cartItems: [{ product: req.body.product }],
    })
  
  }
  else {
    cart.cartItems.push({ product:req.body.product});
    console.log("Else cart created");
  }
  res.status(201).json({ data: cart });
});
exports.getCart = factory.getAll(createCartModel);
