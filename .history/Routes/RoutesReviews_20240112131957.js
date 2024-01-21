const { Router } = require("express");
const { createReviews } = require("../Services/ReviewsService");

const Routes = Router();

Routes.route("/").post(pro createReviews);
module.exports = Routes;
