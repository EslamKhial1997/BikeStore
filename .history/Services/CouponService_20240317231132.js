const expressAsyncHandler = require("express-async-handler");
const createCouponModel = require("../modules/createCoupon");
const factory = require("./FactoryHandler");

exports.createCoupon = factory.createOne(createCouponModel);
exports.getCoupons = factory.getAll(createCouponModel);
exports.getCoupon = factory.getOne(createCouponModel);
exports.updateCoupon = factory.updateOne(createCouponModel);
exports.deleteCoupon = factory.deleteOne(createCouponModel);


exports.checkCoupon = expressAsyncHandler(async(res , req , next)=>{

    const coupon = await createCouponModel.findOne({ name:req.params.name})
    console.log();
})