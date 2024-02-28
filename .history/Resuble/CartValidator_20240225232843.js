const { body } = require("express-validator");
const { default: slugify } = require("slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCartModel = require("../modules/createShopCart");

exports.createCartValidator = [
  body("name").notEmpty().withMessage("is required"),
  body("name")
    .isLength({ min: 2 })
    .withMessage("To Shoort Name To CreateCategory Validator"),
  body("name")
    .isLength({ max: 32 })
    .withMessage("To Longer Name To CreateCategory Validator")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  body("name").custom((val) =>
    createCartModel.findOne({ product: req. }).then((Category) => {
      if (Category) {
        return Promise.reject(new Error("Name Category Already in Used"));
      }
    })
  ),
  MiddlewareValidator,
];
