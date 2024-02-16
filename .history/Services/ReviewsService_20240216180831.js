const createReviewsModel = require("../modules/createReviews");
const factory = require("./FactoryHandler");


exports.createReveiwOnProduct = (req, res, next) => {
    if (!req.body.product) req.body.product = req.params.productId;
    next();
  };
  exports.createFilterObject = (req, res, next) => {
    let filterR = {}
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
