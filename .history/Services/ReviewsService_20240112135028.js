
const createReviewsModel = require("../modules/createReviews");
const factory = require("./FactoryHandler");

exports.createReviews = factory.createOne(createReviewsModel);
exports.get = factory.createOne(createReviewsModel);
