



exports.createCategories = factory.createOne(createModel);
exports.getCategories = factory.getAll(createModel);
exports.getCategoryByID = factory.getOne(createModel);
exports.deleteCategoryByID = factory.deleteOne(createModel);
exports.updateCategory = factory.updateOne(createModel);