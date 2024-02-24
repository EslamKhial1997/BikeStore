const { Router } = require("express");


const Routes = Router()
Routes.route("/")
  .post(
   
   createCart
  )
  .get(getCategories);