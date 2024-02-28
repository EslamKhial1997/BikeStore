const { body, check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCartModel = require("../modules/createShopCart");
const createFavoriteModel = require("../modules/createFavorite");

exports.createFavoriteValidator = [
  body("product").custom((val, { req }) =>
    createFavoriteModel.findOne({ product: req.body.product , user:req.user._id }).then((product) => {
      if (product) {
        return Promise.reject(new Error("Producet  Already in Added"));
      }
    })
  ),
  MiddlewareValidator,
];


exports.getFavoriteByIdValidator = [
    check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
    MiddlewareValidator,
  ];
exports.deleteFavoriteValidator = [
    check("id")
      .isMongoId()
      .withMessage("Invalid Product id format")
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
      
        return true
       
      }),
    MiddlewareValidator,
  ];
