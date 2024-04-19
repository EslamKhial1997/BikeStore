const createCouponModel = require("../modules/createCoupon");
const factory = require("./FactoryHandler")

exports.createCoupon = factory.createOne(createCouponModel);
exports.createCoupon = factory.getAll(createCouponModel);
exports.createCoupon = factory.get(createCouponModel);
exports.createCoupon = factory.createOne(createCouponModel);