const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createShopCart");
const factory = require("./FactoryHandler");

exports.createFavorite = factory.createOne(createFav);
exports.getFavorite = factory.getAll(createCartModel);
exports.getFavoriteByID = factory.getOne(createCartModel);
exports.deletFavoritetByID = factory.deleteOne(createCartModel);
exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;
  next();
});
