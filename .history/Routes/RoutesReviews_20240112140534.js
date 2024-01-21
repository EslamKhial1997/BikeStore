const { Router } = require("express");
const { createReviews,getReviews } = require("../Services/ReviewsService");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/").post(protect, allowedTo("user"),createRevi, createReviews).get(getReviews);
module.exports = Routes;
