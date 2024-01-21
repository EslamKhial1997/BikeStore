const { Router } = require("express");
const { createReviews } = require("../Services/ReviewsService");
const { protect } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/").post( createReviews);
module.exports = Routes;
