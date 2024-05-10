const expressAsyncHandler = require("express-async-handler");
const stripe = require("stripe")("sk_test_51PEe152KGkCg4TkVHgE9Ed2Fn70GpAhEloT20OIMV9N03x9Msda4frZxpVlSfMgec1QxbTSW2SoqvTWeGTIGn4L100KEVeOXN9");

const YOUR_DOMAIN = "http://localhost:8008";
exports.createPayment = expressAsyncHandler(async (req, res, next) => {
  
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: {  "id": "price_1MoBy5LkdIwHu7ixZhnattbh",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1679431181,
        "currency":"egp"
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "prod_NZKdYqrwEYx6iK",
        "recurring": {
          "aggregate_usage": null,
          "interval": "month",
          "interval_count": 1,
          "trial_period_days": null,
          "usage_type": "licensed"
        },
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "recurring",
        "unit_amount": 1000,
        "unit_amount_decimal": "1000"},
        quantity: 1,
       
      },
    ],
    mode: "payment",
    success_url: `${req.protocol}://${req.get('host')}/orders`,
    cancel_url: `${req.protocol}://${req.get('host')}/cart`,
  });
res.status(200).json({status:"success" , session});
  // res.redirect(303, session.url);
});


