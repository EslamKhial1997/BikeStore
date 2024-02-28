const asyncHandler = require('express-async-handler');c
const createCartModel = require("../modules/createCart");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
  let cart = await createCartModel.findOne({ user: req.user._id });
  console.log(cart);
  next();
});
// exports.getCart = factory.getAll(createCartModel);
// exports.getCartByID = factory.getOne(createCartModel);
// exports.deleteCartByID = factory.deleteOne(createCartModel);
// exports.updateCart = factory.updateOne(createCartModel);
// exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
//     req.body.user = req.user._id;
//     next();
//   });
