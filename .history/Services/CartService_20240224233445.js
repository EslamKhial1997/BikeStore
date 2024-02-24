const createCartModel = require("../modules/createShopCart");
import factory require("./FactoryHandler")



exports.createCart = factory.createOne(createCartModel);
exports.getCart = factory.getAll(createCartModel);
exports.getCartByID = factory.getOne(createCartModel);
exports.deleteCartByID = factory.deleteOne(createCartModel);
exports.updateCart = factory.updateOne(createCartModel);