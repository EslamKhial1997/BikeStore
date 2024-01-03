const { check } = require("express-validator");
const { default: slugify } = require("slugify/slugify");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const createCategoryModel = require("../modules/createModel");
const createSubCategoryModel = require("../modules/createSubModel");

exports.createProductsValidator = [
  check("title").notEmpty().withMessage(" title is required"),
  check("title").isLength({ min: 3 }).withMessage("To Shoort Name"),
  check("title")
    .isLength({ max: 32 })
    .withMessage("To Longer Name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("description").notEmpty().withMessage(" description is required"),
  check("description")
    .isLength({ max: 1000 })
    .withMessage(" description To Shoort Name"),

  check("price").notEmpty().withMessage(" price is required"),
  check("price").isNumeric().withMessage(" price is Must be a number"),
  check("price").isLength({ max: 10 }).withMessage(" price is Much "),

  check("priceAfterDiscount")
    .optional()
    .isNumeric()
    .withMessage(" price is Must be a number")
    .isFloat()
    .custom((value, { req }) => {
      if (req.body.price <= value) {
        throw new Error("price after discount Must be less than discount");
      }
      return true;
    }),

  check("colors")
    .optional()
    .isArray()
    .withMessage(" colors Should Be In Array"),
  check("quantity").notEmpty().withMessage(" quantity is required"),
  check("quantity").isNumeric().withMessage(" quantity is Must Be a number"),

  check("sold")
    .optional()
    .isNumeric()
    .withMessage(" quantity is Must Be a number"),

  // check("imageCover").notEmpty().withMessage("Cover Is Required"),
  check("images")
    .optional()
    .isArray()
    .withMessage(" Images Should Be In Array"),
  check("category").notEmpty().withMessage("category To Mongo is required ID"),
  check("category")
    .isMongoId()
    .withMessage("category To Mongo is not Invalid ID")
    .custom((categoryId) =>
      createCategoryModel.findById(categoryId).then((category) => {
        if (!category) {
          return Promise.reject(
            new Error(`Can't find This categoryId ${categoryId}`)
          );
        }
      })
    ),
  check("brand")
    .optional()
    .isMongoId()
    .withMessage("brand To Mongo is not Invalid ID"),
  check("subCategory")
    .optional()
    .isMongoId()
    .withMessage("subCategory To Mongo is not Invalid ID")
    .custom((subCategoryId) =>
      createSubCategoryModel
        .find({
          _id: { $exists: true, $in: subCategoryId },
        })
        .then((results) => {
          if (results.length < 1 || results.length === subCategoryId.length) {
            return Promise.reject(
              new Error(`Can't find This ID ${subCategoryId} in SubCategories `)
            );
          }
        })
    )
    // .custom((val, { req }) =>
    //   createSubCategoryModel
    //     .find({ category: req.body.category })
    //     .then((subCategories) => {
    //       const SubCategoriesIDInDB = [];
    //       subCategories.forEach((subCategoryID) =>
    //         SubCategoriesIDInDB.push(subCategoryID._id.toString())
    //       );
    //       const checker = (target, arr) => target.every((v) => arr.includes(v));
    //       if (!checker(val, SubCategoriesIDInDB)) {
    //         return Promise.reject(
    //           new Error(`Check Your SubCategory Id's belong This Category`)
    //         );
    //       }
    //     })
    // ),
  check("ratings")
    .optional()
    .isNumeric()
    .withMessage("Rating is Must Be Number"),
  check("ratings")
    .optional()
    .isLength({ min: 1 })
    .withMessage("Rating is Must Be more than 1.0"),
  check("ratings")
    .optional()
    .isLength({ max: 5.0 })
    .withMessage("Rating is Must Be less than 5.0"),
  check("ratingQuantity")
    .optional()
    .isNumeric()
    .withMessage("RatingQuantity is Must Be Number"),

  MiddlewareValidator,
];
exports.getProductByIdValidator = [
  check("id").isMongoId().withMessage("Id Not Vaild To get product"),
  MiddlewareValidator,
];
exports.deleteProductByIdValidator = [
  check("id").isMongoId().withMessage("Id Not Vaild To Delete product"),
  MiddlewareValidator,
];
exports.updateProductValidator = [
  check("id").isMongoId().withMessage("Id Not Vaild To Update"),
  check("title")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  MiddlewareValidator,
];
