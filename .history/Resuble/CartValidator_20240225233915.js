const { body } = require("express-validator");
const { default: slugify } = require("slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCartModel = require("../modules/createShopCart");

exports.createCartValidator = [
  body("product").custom((val, { req }) =>
    createCartModel.findOne({ product: req.body.product , user:req.user._id }).then((product) => {
      if (product) {
        return Promise.reject(new Error("Producet  Already in Added"));
      }
    })
  ),
  MiddlewareValidator,
];



exports.deleteReviewValidator = [
    check("id")
      .isMongoId()
      .withMessage("Invalid Review id format")
      .custom(async (val, { req }) => {
        const review = await createReviewsModel.findById(val);
        if (req.user.role === "user") {
          if (!review) {
            return Promise.reject(new Error(`There is no review with id ${val}`));
          }
          if (review.user._id.toString() !== req.user._id.toString()) {
            return Promise.reject(
              new Error(`Your are not allowed to perform this action`)
            );
          } 
        }
      
        return true
       
      }),
    MiddlewareValidator,
  ];
