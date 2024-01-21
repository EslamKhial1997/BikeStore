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
Routes.use();
Routes.route("/")
  .post(
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
    uploadImage,
    resizeImage,
    updateSubCategoryByIdValidator,
    updateSubCategory
  )
  .delete(deleteSubCategoryByIdValidator, deleteSubCategoryByID);

module.exports = Routes;
