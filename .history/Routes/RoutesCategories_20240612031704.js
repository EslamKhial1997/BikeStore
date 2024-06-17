const express = require("express");
const {
  getCategoryByIdValidator,
  updateCategoryByIdValidator,
  deleteCategoryByIdValidator,
  createCategoryValidator,
} = require("../Resuble/validatorError");
const {
  createCategories,
  getCategories,
  getCategoryByID,
  updateCategory,
  deleteCategoryByID,
  uploadImage,
  resizeImage,
  uploadToCloudinary,
} = require("../Services/CategoryService");
const RoutesSubCategories = require("./RoutesSubCategories");
const { allowedTo, protect } = require("../Services/AuthService");


const Routes = express.Router();
Routes.use("/:categoryId/Subcategories", RoutesSubCategories);
Routes.route("/")
  .post(
    protect,
    allowedTo("admin", "manger"),
    uploadImage,
    resizeImage,
    (req, res) => {
      const filePath = req.file.path;
      log
      res.send(`File uploaded successfully. Path: ${filePath}`);
    },
    createCategoryValidator,
    createCategories
  )
  .get(getCategories);
Routes.route("/:id")
  .get(getCategoryByIdValidator, getCategoryByID)
  .put(
    protect,
    allowedTo("admin", "manger"),
    uploadImage,
    resizeImage,

    updateCategoryByIdValidator,
    updateCategory
  )
  .delete(
    protect,
    allowedTo("admin", "manger"),
    deleteCategoryByIdValidator,
    deleteCategoryByID
  );

module.exports = Routes;
