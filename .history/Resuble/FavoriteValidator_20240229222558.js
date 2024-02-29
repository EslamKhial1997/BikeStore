const { body, check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCartModel = require("../modules/createCart");

exports.createFavoriteValidator = [
  body("product").custom((val, { req }) =>
    create
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
    createCartModel
      .findOne({ favoriteItems: { $elemMatch: { _id: req.params.id } } })
      .then((product) => {
        if (!product) {
          throw new Error("Sorry ID Not Available To Delete");
        }
      })
      ),
  MiddlewareValidator,
];
