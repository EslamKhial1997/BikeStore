const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  let cart = await createCartModel.findOne({ user: req.user._id });

  if (!productModel) next(new ApiError(`Product ID Not Found`, 404));

  const { product, color } = req.body;
  if (!cart) {
    cart = await createCartModel.create({
      user: req.user._id,
      cartItems: [{ product, color, price: productModel.price }],
    });
  } else {
    const productExists = cart.cartItems.findIndex(
      (item) =>
        item.product._id.toString() === product.toString() &&
        item.color === color
    );
    if (productExists > -1) {
      const cartItem = cart.cartItems[productExists];
      cartItem.quantity += 1;
      cart.cartItems = cartItem;
    } else {
      await cart.cartItems.push({ product, color, price: productModel.price });
    }
    // const totalCartPrice = await cart.cartItems[productExists];
    // cart.totalCartPrice =
    //   totalCartPrice.product.price * totalCartPrice.quantity;
  }

  let totalCartPrice = 0

  cart.cartItems.forEach((items)=>{
console.log(items.quantity)
  })


  
  await cart.save();
  res.status(200).json({
    status: "success",

    data: cart,
  });
});

exports.getCart = expressAsyncHandler(async (req, res, next) => {
  const cart = await createCartModel.findOne({ user: req.user._id });

  if (!cart) {
    return next(
      new ApiError(`There is no cart for this user id : ${req.user._id}`, 404)
    );
  }

  res.status(200).json({
    results: cart.cartItems.length,
    data: cart,
  });
});

exports.deleteCart = expressAsyncHandler(async (req, res, next) => {
  await createCartModel.findOneAndDelete({ user: req.user._id });
  res.status(204).json({
    status: "success",
  });
});
exports.deleteSpecificCartItem = expressAsyncHandler(async (req, res, next) => {
  const cart = await createCartModel.findOneAndUpdate(
    { user: req.user._id },
    {
      $pull: { cartItems: { _id: req.params.id } },
    },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: cart,
  });
});
