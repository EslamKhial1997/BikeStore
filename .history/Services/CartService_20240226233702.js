const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
console.log("yes");
});
// exports.getCart = factory.getAll(createCartModel);
// exports.getCartByID = factory.getOne(createCartModel);
// exports.deleteCartByID = factory.deleteOne(createCartModel);
// exports.updateCart = factory.updateOne(createCartModel);
// exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
//     req.body.user = req.user._id;
//     next();
//   });
