const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const factory = require("./FactoryHandler");
const createProductsModel = require("../modules/createProducts");
const ApiError = require("../Resuble/ApiErrors");
const FeatureApi = require("../Utils/Feature");

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
    cart = await createCartModel.create({
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
factory.getAll(createReviewsModel)
// exports.getCart = expressAsyncHandler(async (req, res, next) => {
  
  // const cart = await createCartModel.findOne({ user: req.user._id });
//   const countDocs = await createCartModel.countDocuments();
//   const cart = new FeatureApi(createCartModel.find({ user: req.user._id }), req.query).Paginate(countDocs)
//   if (!cart) {
//     return next(
//       new ApiError(`There is no cart for this user id : ${req.user._id}`, 404)
//     );
//   }
// console.log(cart);

//   const { MongooseQueryApi, PaginateResult } = cart;
//   const getDoc = await MongooseQueryApi;
//   res
//     .status(201)
//     .json({ results: getDoc.length, PaginateResult, data: getDoc });
// });
  // res.status(200).json({
  //   results: cart.cartItems.length,
  //   data: cart,
  // });
// });
