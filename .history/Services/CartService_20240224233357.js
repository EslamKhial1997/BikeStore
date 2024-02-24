const createCartModel = require("../modules/createShopCart");




exports.createCart = factory.createOne(createCartModel);
exports.getCart = factory.getAll(createModel);
exports.getCartByID = factory.getOne(createModel);
exports.deleteCartByID = factory.deleteOne(createModel);
exports.updateCart = factory.updateOne(createModel);