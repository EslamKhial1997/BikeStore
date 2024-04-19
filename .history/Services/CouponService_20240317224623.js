const createCouponModel = require("../modules/createCoupon");
const factory = require("./FactoryHandler")

exports.createCoupon = factory.createOne(createCouponModel);
exports.getCoupon = factory.getAll(createCouponModel);
exports.getCoupon = factory.getOne(createCouponModel);
exports.createCoupon = factory.updateOne(createCouponModel);
exports.createCoupon = factory.deleteOne(createCouponModel);