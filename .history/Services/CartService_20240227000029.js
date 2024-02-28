const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
 
  const { productId, color } = req.body;
  const product  = await createProductsModel.findById(productId);
console.log(product); 

  });

