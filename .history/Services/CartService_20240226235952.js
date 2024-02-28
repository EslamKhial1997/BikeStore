const expressAsyncHandler = require("express-async-handler");
const createCartModel = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
 
  const { productId, color } = req.body;
  const product  = await createProductsModel.findById(productId);
log
  // 1) Get createCartModel for logged user
  // let cart = await createCartModel.findOne({ user: req.user._id });

  // if (!cart) {
  //   // create cart fot logged user with product
  //   cart = await createCartModel.create({
  //     user: req.user._id,
  //     cartItems: [{ product:productId, color, price: product.price }],
  //   });
  // } else {
  //   // product exist in cart, update product quantity
  //   const productIndex = cart.cartItems.findIndex(
  //     (item) => item.product.toString() === productId && item.color === color
  //   );
  //   if (productIndex > -1) {
  //     const cartItem = cart.cartItems[productIndex];
  //     cartItem.quantity += 1;

  //     cart.cartItems[productIndex] = cartItem;
  //   } else {
  //     // product not exist in cart,  push product to cartItems array
  //     cart.cartItems.push({ product: productId, color, price: product.price });
  //   }
  // }

  // // Calculate total cart price
  
  //   await cart.save();

  //   res.status(200).json({
  //     status: 'success',
  //     message: 'Product added to cart successfully',
  //     numOfCartItems: cart.cartItems.length,
  //     data: cart,
  //   });
  });

