const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const ApiError = require("../Resuble/ApiErrors");
const createOrderModel = require("../modules/CreateOrder");
const createProductsModel = require("../modules/createProducts");
const factory = require("./FactoryHandler");


exports.createOrder = expressAsyncHandler(async (req, res, next) => {
  const cart = await createCartModel.findById(req.params.cartId);
  if (!cart) {
    return next(
      new ApiError(`There is no cart for this id : ${req.params.cartId}`, 404)
    );
  }
  const taxPrice = 0;
  const shippingPrice = 0;

  const orderPrice = cart.totalPriceAfterDiscount
    ? cart.totalPriceAfterDiscount
    : cart.totalCartPrice;
  const totalOrderPrice = orderPrice + taxPrice + shippingPrice;
  const order = await createOrderModel.create({
    user: req.user._id,
    cartItems: cart.cartItems,
    shippingAddress: req.body.shippingAddress,
    totalPrice: totalOrderPrice,
  });

  if (order) {
    const bulkOption = await cart.cartItems.map((item) => (
     log
    ));
    await createProductsModel.bulkWrite(bulkOption, {});
    await createCartModel.findByIdAndDelete(req.params.cartId);
  }

  await order.save();
  res.status(200).json({
    status: "success",

    data: order,
  });
});
exports.filterOrderForLoggedUser = expressAsyncHandler(
  async (req, res, next) => {
    if (req.user.role === "user") req.filterObject = { user: req.user._id };
    next();
  }
);







exports.getAllOrder = factory.getAll(createOrderModel);
