const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createShopCart");
const factory = require("./FactoryHandler");

exports.createCart = factory.createOne(createCartModel);
exports.getCart = factory.getAll(createCartModel);
exports.getCartByID = factory.getOne(createCartModel);
exports.deleteCartByID = factory.deleteOne(createCartModel);
exports.updateCart = factory.updateOne(createCartModel);
exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;
  next();
});
exports.getLoggedUserDataa = expressAsyncHandler(async (req, res, next) => {
  const cart = await createCartModel.findOne({user: req.user._id})
if (!cart) {
     // if (product) {
      //   return Promise.reject(new Error("Producet  Already in Added To Cart"));
      // }
}
  next();
});
