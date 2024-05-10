const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const ApiError = require("../Resuble/ApiErrors");
const createOrderModel = require("../modules/CreateOrder");
const createProductsModel = require("../modules/createProducts");
const factory = require("./FactoryHandler");
const stripe = require("stripe")("sk_test_51PEe152KGkCg4TkVHgE9Ed2Fn70GpAhEloT20OIMV9N03x9Msda4frZxpVlSfMgec1QxbTSW2SoqvTWeGTIGn4L100KEVeOXN9");


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
    const bulkOption = await cart.cartItems.map((item) => ({
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { quantity: -item.quantity, sold: +item.quantity } },
      },
    }));
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

const YOUR_DOMAIN = "http://localhost:8008";
exports.createPayment = expressAsyncHandler(async (req, res, next) => {
  
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        amount: 1500 * 100,
        quantity: 1,
        currency:"egp"
      },
    ],
    mode: "payment",
    success_url: `${req.protocol}://${req.get('host')}/orders`,
    cancel_url: `${req.protocol}://${req.get('host')}/cart`,
  });
res.status(200).json({status:"success" , session});
  // res.redirect(303, session.url);
});





exports.getAllOrder = factory.getAll(createOrderModel);
