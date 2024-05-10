const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const ApiError = require("../Resuble/ApiErrors");
const createOrderModel = require("../modules/CreateOrder");
const createProductsModel = require("../modules/createProducts");

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

  //   await order.save();
  //   res.status(200).json({
  //     status: "success",

  //     data: order,
  //   });
  if (order) {
    const bulkOption = await cart.cartItems.map((item) =>() {
        const product = await createProductsModel.findById(item.product)
       console.log(item)
    //   updateOne: {
    //     filter: { _id: item.product },
    //     update: { $inc: { quantity: -item.quantity, sold: +item.quantity } },
    //   },
     });
    // await createProductsModel.bulkWrite(bulkOption, {});
  }
});
