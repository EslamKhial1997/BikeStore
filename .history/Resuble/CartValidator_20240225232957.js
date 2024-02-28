const { body } = require("express-validator");
const { default: slugify } = require("slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCartModel = require("../modules/createShopCart");

exports.createCartValidator = [

  body("name").custom((val , {req}) =>
    createCartModel.findOne({ product: req.body.id }).then((product) => {
      if (product) {
        return Promise.reject(new Error("Producet  Already in Added"));
      }
    })
  ),
  MiddlewareValidator,
];
