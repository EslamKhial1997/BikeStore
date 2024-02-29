const expressAsyncHandler = require("express-async-handler");

const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");
const createFavoriteModel = require("../modules/createFavorite");

exports.createFavorite = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  let cart = await createFavoriteModel.findOne({ user: req.user._id });

  if (cart) {
    const map = await cart.cartItems.map((e) => e.product._id.toString());
    if (map.includes(req.body.product.toString())) {
      next(new ApiError(`Product Added In Cart`, 404));
    }
  }

  if (!productModel) next(new ApiError(`Product ID Not Found`, 404));

  if (!cart) {
    cart = await createFavoriteModel.create({
      user: req.user._id,
      cartItems: [{ product: req.body.product }],
    });
  } else {
    await cart.cartItems.push({ product: req.body.product });
  }
  await cart.save();
  res.status(200).json({
    status: "success",

    data: cart,
  });
});

exports.getFavorite = expressAsyncHandler(async (req, res, next) => {
  const cart = await createFavoriteModel.findOne({ user: req.user._id });

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

exports.deleteFavorite = expressAsyncHandler(async (req, res, next) => {
  await createFavoriteModel.findOneAndDelete({ user: req.user._id });
  res.status(204).json({
    status: "success",
  });
});
exports.deleteSpecificFavoriteItem = expressAsyncHandler(async (req, res, next) => {
  const cart = await createFavoriteModel.findOneAndUpdate(
    { user: req.user._id },
    {
      $pull: { favoriteItems: { _id: req.params.favoriteItemId } },
    },
    { new: true }
  );


  res.status(200).json({
    status: "success",
    data: cart,
  });
});
