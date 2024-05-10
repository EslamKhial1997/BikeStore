const expressAsyncHandler = require("express-async-handler");
const stripe = require("stripe")(
  "sk_test_51PEe152KGkCg4TkVHgE9Ed2Fn70GpAhEloT20OIMV9N03x9Msda4frZxpVlSfMgec1QxbTSW2SoqvTWeGTIGn4L100KEVeOXN9"
);


exports.createPayment = expressAsyncHandler(async (req, res, next) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
        quantity: 2,
      },
    ],
    mode: "payment",
    success_url: `${req.protocol}://${req.get("host")}/orders`,
  
  });
  res.status(200).json({ status: "success", session });
  // res.redirect(303, session.url);
});
