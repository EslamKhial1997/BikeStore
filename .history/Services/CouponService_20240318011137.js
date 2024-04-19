const expressAsyncHandler = require("express-async-handler");
const createCouponModel = require("../modules/createCoupon");
const factory = require("./FactoryHandler");
const ApiError = require("../Resuble/ApiErrors");
const createCartModel = require("../modules/createCart");
const createUsersModel = require("../modules/createUsers");

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
   let user = await createUsersModel.findById(req.user.id);
  
   console.log(user);
   if (user) {
    if (user.coupons>0) {
      user = await createCartModel.create({
        user: req.user._id,
        coupons: [{ coupon:{coupon} }],
      });
    } else {
      else {
        const productExists = cart.cartItems.findIndex(
          (item) =>
            item.product._id.toString() === product.toString() &&
            item.color === color
        );
        if (productExists > -1) {
          const cartItem = cart.cartItems[productExists];
          cartItem.quantity += 1;
          cart.cartItems = cartItem;
        } else {
          await cart.cartItems.push({ product, color, price: productModel.price });
        }
      }
    }
   
  }
  //  console.log(cart.totalCartPrice -= cart.totalCartPrice * coupon.discount / 100 );
   cart.totalCartPrice -= cart.totalCartPrice * coupon.discount / 100
   await cart.save();
  res.status(200).json({
    data: coupon,
  });
});
