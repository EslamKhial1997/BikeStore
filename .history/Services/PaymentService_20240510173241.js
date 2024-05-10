const expressAsyncHandler = require("express-async-handler");
const ApiError = require("../Resuble/ApiErrors");
const createCartModel = require("../modules/createCart");
const stripe = require("stripe")(
  "sk_test_51PEe152KGkCg4TkVHgE9Ed2Fn70GpAhEloT20OIMV9N03x9Msda4frZxpVlSfMgec1QxbTSW2SoqvTWeGTIGn4L100KEVeOXN9"
);


exports.createPayment = expressAsyncHandler(async (req, res, next) => {
  // app settings
  const taxPrice = 0;
  const shippingPrice = 0;

  // 1) Get cart depend on cartId
  const cart = await createCartModel.findById(req.params.cartId);
  if (!cart) {
    return next(
      new ApiError(`There is no such cart with id ${req.params.cartId}`, 404)
    );
  }

  // 2) Get order price depend on cart price "Check if coupon apply"
  const cartPrice = cart.totalPriceAfterDiscount
    ? cart.totalPriceAfterDiscount
    : cart.totalCartPrice;

  const totalOrderPrice = cartPrice + taxPrice + shippingPrice;
console.log(totalOrderPrice );
  // 3) Create stripe checkout session
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "egp",
          amount: 500,
         
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: 'https://example.com/success',
  
  });
  res.status(200).json({ status: "success", session });
  res.redirect(303, session.url);
});
