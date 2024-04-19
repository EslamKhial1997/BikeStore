const createCouponModel = require("../modules/createCoupon");
const factory = require("./FactoryHandler")

exports.createCoupon = factory.createOne(createCouponModel);