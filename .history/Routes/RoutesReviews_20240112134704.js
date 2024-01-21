const { Router } = require("express");
const { createReviews } = require("../Services/ReviewsService");
const { protect ,  } = require("../Services/AuthService");

const Routes = Router();

Routes.route("/").post(protect, createReviews);
module.exports = Routes;
