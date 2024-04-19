const { Router } = require("express");
const createCoupon = require("../modules/createCoupon");

const Routes = Router();

Routes.route("/").post(createCoupon);

