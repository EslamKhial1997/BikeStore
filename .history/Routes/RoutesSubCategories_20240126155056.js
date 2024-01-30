const express = require("express");
const {
  createSubCategoryOnCategory,
  createFilterObject,
  createSubCategories,
  deleteSubCategoryByID,
  getSubCategoryByID,
  updateSubCategory,
  getSubCategories,
  uploadImage,
  resizeImage,
} = require("../Services/SubCategoryService");
const {
  getSubCategoryByIdValidator,
  updateSubCategoryByIdValidator,
  deleteSubCategoryByIdValidator,
  createSubCategoryValidator,
} = require("../Resuble/SubvalidatorError");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = express.Router({ mergeParams: true });
Routes.route("/")
  .post(
    protect,
    allowedTo("admin", "manager"),
    uploadImage,
    resizeImage,
    createSubCategoryOnCategory,
    createSubCategoryValidator,
    createSubCategories
  )
  .get(createFilterObject, getSubCategories);
Routes.route("/:id")
  .get(getSubCategoryByIdValidator, getSubCategoryByID)
  .put(
    protect,
    allowedTo("admin", "manger"),
    uploadImage,
    resizeImage,
    updateSubCategoryByIdValidator,
    updateSubCategory
  )
  .delete(
    protect,
    allowedTo("admin", "manger"),
    deleteSubCategoryByIdValidator,
    deleteSubCategoryByID
  );

module.exports = Routes;
