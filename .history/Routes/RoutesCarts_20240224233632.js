

const Routes = 
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