const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const factory = require("./FactoryHandler");
const createUsersModel = require("../modules/createUsers");

exports.createCart = factory.createOne(createCartModel);
exports.getCart = factory.getAll(createCartModel);
exports.getCartByID = factory.getOne(createCartModel);
exports.deleteCartByID = factory.deleteOne(createCartModel);
exports.updateCart = factory.updateOne(createCartModel);
exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;
  next();
});
exports.AddProductToCart = expressAsyncHandler(async (req, res, next) => {
const user = await createUsersModel.findOne({user: req.user._id});
 
console.log(user);

})
exports.getLoggedUserDataa = expressAsyncHandler(async (req, res, next) => {
  const cart = await createCartModel.findOne({user: req.user._id})
if (!cart) {
     if (cart) {
        return Promise.reject(new Error("Producet  Already in Added To Cart"));
      }
}
res.status(200).json({data:cart})
  next();
});
