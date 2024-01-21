const { Router } = require("express");
const { createReviews } = require("../Services/ReviewsService");

const Routes = Router();

Routes.route("/").post(prote, createReviews);
module.exports = Routes;
