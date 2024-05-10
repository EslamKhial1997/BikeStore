const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");

exports.createOrder = expressAsyncHandler(async (req, res, next) => {
  const cart = await createCartModel.findById(req.params.cartId);
  if (condition) {
    
  }
  console.log(cart);
});
