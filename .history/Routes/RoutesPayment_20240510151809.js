const { Router } = require('express');
const { createPayment } = require('../Services/PaymentService');

// This is your test secret API key.



// app.use(express.static('public'));


const Routes = Router();
Routes.post('/create-checkout-session' , createPayment);

