const expressAsyncHandler = require("express-async-handler");
const factory = require("./FactoryHandler");
const createFavoriteModel = require("../modules/createFavorite");

exports.createFavorite = factory.createOne(createFavoriteModel);
exports.getFavorite = factory.getAll(createFavoriteModel);
exports.getFavoriteByID = factory.getOne(createFavoriteModel);
exports.deletFavoritetByID = factory.deleteOne(createFavoriteModel);
exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;
  next();
});
