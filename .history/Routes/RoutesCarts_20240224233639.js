const { Router } = require("express");


const Routes = Router
Routes.route("/")
  .post(
    protect,
    allowedTo("admin", "manger"),
    uploadImage,
    resizeImage,
    createCategoryValidator,
    createCategories
  )
  .get(getCategories);