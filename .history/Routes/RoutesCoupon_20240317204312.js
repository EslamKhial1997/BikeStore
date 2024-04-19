const { Router } = require("express");
c

const Routes = Router();

Routes.route("/").post(createCoupon);

module.exports = Routes;