const { Router } = require('express');
const { createPayment } = require('../Services/PaymentService');

// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PEe152KGkCg4TkVHgE9Ed2Fn70GpAhEloT20OIMV9N03x9Msda4frZxpVlSfMgec1QxbTSW2SoqvTWeGTIGn4L100KEVeOXN9');


// app.use(express.static('public'));


const Routes = Router();
Routes.post('/create-checkout-session' , createPayment);

app.listen(4242, () => console.log('Running on port 4242'));