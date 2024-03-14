const express = require('express');
const { addAddress } = require('../Services/AddressService');





const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));

router.route('/').post(addAddress).get(getLog);

router.delete('/:addressId', removeAddress);

module.exports = router;