const { Router } = require("express");
const { createReviews } = require("../Services/ReviewsService");
const { protect , allowedTo } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/").post(protect,allowedTo() createReviews);
module.exports = Routes;
