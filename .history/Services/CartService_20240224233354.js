



exports.createCart = factory.createOne(createCart);
exports.getCart = factory.getAll(createModel);
exports.getCartByID = factory.getOne(createModel);
exports.deleteCartByID = factory.deleteOne(createModel);
exports.updateCart = factory.updateOne(createModel);