const express = require("express");
const {
  createBrands,
  getBrands,
  getBrandsById,
  updateBrandsById,
  deleteBrandsById,

  resizeImageBrand,
  uploadImageBrand,
} = require("../Services/BrandService");
const {
  createBrandValidator,
  getBrandByIdValidator,
  updateBrandValidator,
  deleteBrandByIdValidator,
} = require("../Resuble/BrandValidator");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = express.Router();
Routes.route("/")
  .post(protect, allowedTo("admin", "manager"),uploadImageBrand, resizeImageBrand, createBrandValidator, createBrands)
  .get(getBrands);
Routes.route("/:id")
  .get(getBrandByIdValidator, getBrandsById)
  .put(
    protect, allowedTo("admin", "manger"),
    uploadImageBrand,
    resizeImageBrand,
    updateBrandValidator,
    updateBrandsById
  )
  .delete(protect, allowedTo("admin", "manager"),deleteBrandByIdValidator, deleteBrandsById);
module.exports = Routes;
