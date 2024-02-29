const { body, check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCartModel = require("../modules/createCart");

exports.createCartValidator = [
  body("product").custom((val, { req }) =>
    createCartModel
      .findOne({ product: req.body.product, user: req.user._id })
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

exports.getCartByIdValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
  MiddlewareValidator,
];
exports.deleteCartValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Cart id format")
    .custom(async (val, { req }) => {
      const product = await createCartModel.findById(val);
      if (req.user.role === "user") {
        if (!product) {
          return Promise.reject(new Error(`There is no review with id ${val}`));
        }
        if (product.user._id.toString() !== req.user._id.toString()) {
          return Promise.reject(
            new Error(`Your are not allowed to perform this action`)
          );
        }
      }

      return true;
    }),
  MiddlewareValidator,
];
