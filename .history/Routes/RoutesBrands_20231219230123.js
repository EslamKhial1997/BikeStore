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

Routes.use(protect, allowedTo("admin", "manager"));
Routes.route("/")
  .post(uploadImageBrand, resizeImageBrand, createBrandValidator, createBrands)
  .get(getBrands);
Routes.route("/:id")
  .get(getBrandByIdValidator, getBrandsById)
  .put(uploadImageBrand, resizeImageBrand, updateBrandValidator, updateBrandsById)
  .delete(deleteBrandByIdValidator, deleteBrandsById);
module.exports = Routes;
