const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
 
  const { product, color } = req.body;
  const productModel  = await createProductsModel.findById(product);


  //Get cart For Looged User 
  let cart = await createCartModel.findOne({ user: req.user._id });
console.log(cart); 

  });

