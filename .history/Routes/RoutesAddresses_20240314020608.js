const express = require('express');
const { addAddress, getLoggedUserAddresses, removeAddress } = require('../Services/AddressService');





const router = express.Router();

router.use(protect, authService.allowedTo('user'));

router.route('/').post(addAddress).get(getLoggedUserAddresses);

router.delete('/:addressId', removeAddress);

module.exports = router;