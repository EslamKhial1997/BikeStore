const createBrandsModel = require("../modules/createBrandsModel");
const createReviewsModel = require("../modules/createReviews");
const factory = require("./FactoryHandler");

exports.createReviews = factory.createOne(createReviewsModel);
