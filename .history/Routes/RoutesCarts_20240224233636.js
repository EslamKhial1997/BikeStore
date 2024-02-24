

const Routes = rout
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