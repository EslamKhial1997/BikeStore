const { body, check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createFavoriteModel = require("../modules/createFavorite");

exports.createFavoriteValidator = [
  body("product").custom((val, { req }) =>
    createFavoriteModel
      .findOne({ favoriteItems: { $elemMatch: { product: req.body.product } } })
      .then((product) => {
        if (product) {
          return Promise.reject(
            new Error("Producet  Already in Added To Cart")
          );
        }
      })
  ),
  MiddlewareValidator,
];
exports.deleteFavoriteItemValidator = [
  check("id").custom(async (val, { req }) =>
  createFavoriteModel
      .findOne({ favoriteItems: { $elemMatch: { _id: req.params.id } } })
      .then((product) => {
        if (!product) {
          throw new Error("Sorry ID Not Available To Delete");
        }
      })
      ),
  MiddlewareValidator,
];
