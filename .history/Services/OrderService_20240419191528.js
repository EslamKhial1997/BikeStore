const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");

exports.createOrder = expressAsyncHandler(async (res, req, next) => {
    console.log(req.params);
//   const cart =await createCartModel.findById(req.params.cartId);
//   console.log(cart);
});
