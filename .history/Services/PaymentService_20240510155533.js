const expressAsyncHandler = require("express-async-handler");
const stripe = require("stripe")("sk_test_51PEe152KGkCg4TkVHgE9Ed2Fn70GpAhEloT20OIMV9N03x9Msda4frZxpVlSfMgec1QxbTSW2SoqvTWeGTIGn4L100KEVeOXN9");

const YOUR_DOMAIN = "http://localhost:8008";
exports.createPayment = expressAsyncHandler(async (req, res, next) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "1200",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});


