const createCartModel = require("../modules/createShopCart");




exports.createCart = factory.createOne(createCartModel);
exports.getCart = factory.getAll(createCartModel);
exports.getCartByID = factory.getOne(createCartModel);
exports.deleteCartByID = factory.deleteOne(createModel);
exports.updateCart = factory.updateOne(createModel);