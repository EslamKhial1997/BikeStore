const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createShopCart");
const factory = require("./FactoryHandler")



exports.createCart = factory.createOne(createCartModel);
exports.getCart = factory.getAll(createCartModel);
exports.getCartByID = factory.getOne(createCartModel);
exports.deleteCartByID = factory.deleteOne(createCartModel);
exports.updateCart = factory.updateOne(createCartModel);
exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
    req.params.id = req.user._id;
    
    next();
  });