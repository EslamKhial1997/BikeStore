const express = require('express');





const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));

router.route('/').post(A).get(getLoggedUserAddresses);

router.delete('/:addressId', removeAddress);

module.exports = router;