const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
 
  const { product, color } = req.body;
  const findProduct = await createProductsModel.findById(product);

  // 1) Get Cart for logged user
  let cart = await createCartModel.findOne({ user: req.user._id });

  if (!cart) {
    // create cart fot logged user with product
    cart = await createCartModel.create({
      user: req.user._id,
      cartItems: [{ product, color, price: findProduct.price }],
    });
  } else {
    // product exist in cart, update product quantity
    const productIndex = createCartModel.cartItems.findIndex(
      (item) => item.product.toString() === product && item.color === color
    );
    console.log(productIndex);
}})
// exports.getCart = factory.getAll(createCartModel);
// exports.getCartByID = factory.getOne(createCartModel);
// exports.deleteCartByID = factory.deleteOne(createCartModel);
// exports.updateCart = factory.updateOne(createCartModel);
// exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
//     req.body.user = req.user._id;
//     next();
//   });
