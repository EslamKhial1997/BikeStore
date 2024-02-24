const { Router } = require("express");


const Routes = Router()
Routes.route("/")
  .post(
   
    uploadImage,
    resizeImage,
    createCategoryValidator,
    createCategories
  )
  .get(getCategories);