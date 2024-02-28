const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createShopCart");
const factory = require("./FactoryHandler");
const createUsersModel = require("../modules/createUsers");



exports.createCart =  expressAsyncHandler(async (req, res, next) => {
  const user = await create.findOne({user :req.user._id})
  console.log(user);
  next();
});
exports.getCart = factory.getAll(createCartModel);
exports.getCartByID = factory.getOne(createCartModel);
exports.deleteCartByID = factory.deleteOne(createCartModel);
exports.updateCart = factory.updateOne(createCartModel);
exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
    req.body.user = req.user._id;
    next();
  });