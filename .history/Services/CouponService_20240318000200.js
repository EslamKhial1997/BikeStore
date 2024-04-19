const expressAsyncHandler = require("express-async-handler");
const createCouponModel = require("../modules/createCoupon");
const factory = require("./FactoryHandler");
const ApiError = require("../Resuble/ApiErrors");

exports.createCoupon = factory.createOne(createCouponModel);
exports.getCoupons = factory.getAll(createCouponModel);
exports.getCoupon = factory.getOne(createCouponModel);
exports.updateCoupon = factory.updateOne(createCouponModel);
exports.deleteCoupon = factory.deleteOne(createCouponModel);

exports.checkCoupon = expressAsyncHandler(async (req, res, next) => {
  const coupon = await createCouponModel.findOne({ name: req.query.name });
  if (!coupon) {
    return next(new ApiError(`Coupon not exist `, 404));
  }
  const expires = await createCouponModel.findOne({
    expires: { $gt: Date.now() },
  });
  if (!expires) {
    return next(new ApiError(`Coupon is Expires `, 404));
  }
  if (expires.expires < Date.now()) {
    return next(new ApiError(`Coupon is Expires `, 404));
  }
  // console.log(coupon.expires);
  res.status(200).json({
    data: coupon,
  });
  console.log(expires.expires);
 
  console.log(expires.expires.getTimezoneOffset());
});
