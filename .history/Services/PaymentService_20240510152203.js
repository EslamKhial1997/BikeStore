const expressAsyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.PAYMENT_SECRET);

const YOUR_DOMAIN = "http://localhost:5173/";
exports.createPayment = expressAsyncHandler(async (req, res, next) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 1200,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});


