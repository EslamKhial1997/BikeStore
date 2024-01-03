const { check, body, param } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");

// exports.getCategoryByIdValidator = [
//   param("id").isMongoId().withMessage("Sorry ID Not Available To get"),
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
  body("name").isLength({ min: 3 }).withMessage("To Shoort Name"),
  body("name").isLength({ max: 32 }).withMessage("To Longer Name"),
  MiddlewareValidator,
];
