const expressAsyncHandler = require("express-async-handler");

const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");
const createFavoriteModel = require("../modules/createFavorite");

exports.createFavorite = expressAsyncHandler(async (req, res, next) => {
  const productModel = await createProductsModel.findById(req.body.product);
  let favorite = await createFavoriteModel.findOne({ user: req.user._id });

  if (!productModel) next(new ApiError(`Product ID Not Found`, 404));

  if (!favorite) {
    favorite = await createFavoriteModel.create({
      user: req.user._id,
      favoriteItems: [{ product: req.body.product }],
    });
  } else {
    await favorite.faItems.push({ product: req.body.product });
  }
  await favorite.save();
  res.status(200).json({
    status: "success",

    data: favorite,
  });
});

exports.getCart = expressAsyncHandler(async (req, res, next) => {
  const favorite = await createFavoriteModel.findOne({ user: req.user._id });

  if (!favorite) {
    return next(
      new ApiError(`There is no cart for this user id : ${req.user._id}`, 404)
    );
  }

  res.status(200).json({
    results: favorite.cartItems.length,
    data: favorite,
  });
});

exports.deleteCart = expressAsyncHandler(async (req, res, next) => {
  await createFavoriteModel.findOneAndDelete({ user: req.user._id });
  res.status(204).json({
    status: "success",
  });
});
exports.deleteSpecificCartItem = expressAsyncHandler(async (req, res, next) => {
  const favorite = await createFavoriteModel.findOneAndUpdate(
    { user: req.user._id },
    {
      $pull: { cartItems: { _id: req.params.cartItemId } },
    },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: favorite,
  });
});
