const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");

exports.createOrder = expressAsyncHandler(async (res, req, next) => {
  const cart =aw createCartModel.findById(req.params.cartId);
  console.log(cart);
});
