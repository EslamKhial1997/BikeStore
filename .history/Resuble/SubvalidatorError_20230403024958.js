const { body, check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");

// exports.getCategoryByIdValidator = [
//   check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
//   MiddlewareValidator,
// ];
// exports.updateCategoryByIdValidator = [
//   check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
//   MiddlewareValidator,
// ];
// exports.deleteCategoryByIdValidator = [
//   check("id").isMongoId().withMessage("Sorry ID Not Available To Delete"),
//   MiddlewareValidator,
// ];
exports.createSubCategoryValidator = [
  body("name").notEmpty().withMessage("is required"),
  body("name").isLength({ min: 2 }).withMessage("To Shoort Name To CreateSub"),
  body("name").isLength({ max: 32 }).withMessage("To Longer Name"),
  check("category").isMongoId().withMessage("To Mongo is required ID"),
  MiddlewareValidator,
];
