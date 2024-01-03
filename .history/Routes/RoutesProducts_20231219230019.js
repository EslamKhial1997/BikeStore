const { Router } = require("express");
const {createProductonCategory, createProducts, getProducts,getProduct,updateProduct,deleteProduct, resizeImageProducts, UploadImageService } = require("../Services/ProductsService");
const {
  createProductsValidator,updateProductValidator,deleteProductByIdValidator
} = require("../Resuble/ProductsvalidatorError");

const { protect, allowedTo } = require("../Services/AuthService");

const Routes = express.Router({ mergeParams: true });
Routes.use(protect, allowedTo("admin", "manager"));

Routes.route("/")
  .post(UploadImageService,resizeImageProducts,createProductsValidator,createProductonCategory, createProducts).get(getProducts)

  Routes.route("/:id")
  .get(getProduct).put(UploadImageService,resizeImageProducts,updateProductValidator,updateProduct).delete(deleteProductByIdValidator,deleteProduct);
module.exports = Routes;
