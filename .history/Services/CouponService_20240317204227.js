const createCoupon = require("../modules/createCoupon");
const factory = require("./FactoryHandler")

exports.createReviews = factory.createOne(createCoupon);