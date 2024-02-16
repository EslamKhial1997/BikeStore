const createReviewsModel = require("../modules/createReviews");
const factory = require("./FactoryHandler");

exports.createReveiwOnProduct = (req, res, next) => {
    console.log(req);
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;
  next();
};
exports.createFilterObject = (req, res, next) => {
  let filterReviews = {};
  if (req.params.categoryId) filterReviews = { product: req.params.productId };
  req.filterObject = filterReviews;
  next();~
};
exports.createReviews = factory.createOne(createReviewsModel);
exports.getReviews = factory.getAll(createReviewsModel);
exports.getReviewById = factory.getOne(createReviewsModel);
exports.updateReview = factory.updateOne(createReviewsModel);
exports.deleteReview = factory.deleteOne(createReviewsModel);
