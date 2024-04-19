const expressAsyncHandler = require("express-async-handler");
const createCouponModel = require("../modules/createCoupon");
const factory = require("./FactoryHandler");
const ApiError = require("../Resuble/ApiErrors");
const createCartModel = require("../modules/createCart");

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
  if (!expires || Date.now() > Date.parse(expires.expires)) {
    return next(new ApiError(`Coupon is Expires `, 404));
  }
   const cart = await createCartModel.findOne({ user: req.user.id });
  // console.log(cart.totalCartPrice -=coupon.discount );
  res.status(200).json({
    data: coupon,
  });
});
