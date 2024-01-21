const { Router } = require("express");
const { createReviews } = require("../Services/ReviewsService");
const { protect , allowedTo } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/").post(protect,allowedTo("user") createReviews);
module.exports = Routes;
