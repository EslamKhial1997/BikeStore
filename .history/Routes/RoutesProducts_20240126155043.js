const { Router } = require("express");
const {
  createProductonCategory,
  createProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  resizeImageProducts,
  UploadImageService,
} = require("../Services/ProductsService");
const {
  createProductsValidator,
  updateProductValidator,
  deleteProductByIdValidator,
} = require("../Resuble/ProductsvalidatorError");
const { protect, allowedTo } = require("../Services/AuthService");

const Routes = Router({ mergeParams: true });

Routes.route("/")
  .get(getProducts)
  .post(
    protect,
    allowedTo("admin", "manger"),
    UploadImageService,
    resizeImageProducts,
    createProductonCategory,
    createProductsValidator,
    createProducts
  );

Routes.route("/:id")
  .get(getProduct)
  .put(
    protect,
    allowedTo("admin", "manger"),
    UploadImageService,
    resizeImageProducts,
    updateProductValidator,
    updateProduct
  )
  .delete(
    protect,
    allowedTo("admin", "manager"),
    deleteProductByIdValidator,
    deleteProduct
  );
module.exports = Routes;
