const { check, body, param } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");

// exports.getSubCategoryByIdValidator = [
//   param("id").isMongoId().withMessage("Sorry ID Not Available To get"),
//   MiddlewareValidator,
// ];
// exports.updateSubCategoryByIdValidator = [
//   check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
//   MiddlewareValidator,
// ];
// exports.deleteSubCategoryByIdValidator = [
//   check("id").isMongoId().withMessage("Sorry ID Not Available To Delete"),
//   MiddlewareValidator,
// ];
exports.createSubCategoryValidator = [
  body("name").notEmpty().withMessage("is required"),
  body("name").isLength({ min: 3 }).withMessage("To Shoort Name"),
  body("name").isLength({ max: 32 }).withMessage("To Longer Name"),
  check("products").isMongoId()
  MiddlewareValidator,
];
