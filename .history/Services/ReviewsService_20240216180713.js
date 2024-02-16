const createReviewsModel = require("../modules/createReviews");
const factory = require("./FactoryHandler");


exports.createReveiwOnCategory = (req, res, next) => {
    if (!req.body.category) req.body.category = req.params.categoryId;
    next();
  };
  exports.createSubCategories = factory.createOne(createSubCategoryModel);
  exports.createFilterObject = (req, res, next) => {
    let filterSubCategory = {};
    if (req.params.categoryId)
      filterSubCategory = { category: req.params.categoryId };
    req.filterObject = filterSubCategory;
    next();
  };
exports.createReviews = factory.createOne(createReviewsModel);
exports.getReviews = factory.getAll(createReviewsModel);
exports.getReviewById = factory.getOne(createReviewsModel);
exports.updateReview = factory.updateOne(createReviewsModel);
exports.deleteReview = factory.deleteOne(createReviewsModel);
