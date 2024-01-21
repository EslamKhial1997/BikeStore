const { Router } = require("express");
const { createReviews,getAllReviews } = require("../Services/ReviewsService");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/").post(protect, allowedTo("user"), createReviews).get(getReviews);
module.exports = Routes;
