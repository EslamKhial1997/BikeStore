const { body, check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCartModel = require("../modules/createCart");

exports.createCartValidator = [
  body("product").custom((val, { req }) =>
    createCartModel
      .findOne({ cartItems: { $elemMatch: { product: req.body.product } } })
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

