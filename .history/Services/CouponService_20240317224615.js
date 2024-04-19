const createCouponModel = require("../modules/createCoupon");
const factory = require("./FactoryHandler")

exports.createCoupon = factory.createOne(createCouponModel);
exports.Coupon = factory.getAll(createCouponModel);
exports.createCoupon = factory.getOne(createCouponModel);
exports.createCoupon = factory.updateOne(createCouponModel);
exports.createCoupon = factory.deleteOne(createCouponModel);