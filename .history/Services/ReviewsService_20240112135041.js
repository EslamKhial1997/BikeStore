
const createReviewsModel = require("../modules/createReviews");
const factory = require("./FactoryHandler");

exports.createReviews = factory.createOne(createReviewsModel);
exports.getAllReviews = factory.getAll(createReviewsModel);
