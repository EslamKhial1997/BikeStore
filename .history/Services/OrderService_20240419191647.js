const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const ApiError = require("../Resuble/ApiErrors");

exports.createOrder = expressAsyncHandler(async (req, res, next) => {
  const cart = await createCartModel.findById(req.params.cartId);
  if (!cart) ApiError
  console.log(cart);
});
