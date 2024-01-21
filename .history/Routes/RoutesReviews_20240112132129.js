const { Router } = require("express");
const { createReviews } = require("../Services/ReviewsService");

const Routes = Router();

Routes.route("/").post(protec, createReviews);
module.exports = Routes;
