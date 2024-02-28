const expressAsyncHandler = require("express-async-handler");
const Cart = require("../modules/createCart");
const createProductsModel = require("../modules/createProducts");

exports.createCart = expressAsyncHandler(async (req, res, next) => {
 
  const { productId, color } = req.body;
  const product  = await createProductsModel.findById(productId);

  // 1) Get Cart for logged user
  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    // create cart fot logged user with product
    cart = await Cart.create({
      user: req.user._id,
      cartItems: [{ product, color, price: findProduct.price }],
    });
  } else {
    // product exist in cart, update product quantity
    const productIndex = Cart.cartItems.findIndex(
      (item) => item.product.toString() === product && item.color === color
      
    );
    if (productIndex > -1) {
      const cartItem = cCartart.cartItems[productIndex];
      cartItem.quantity += 1;

      Cart.cartItems[productIndex] = cartItem;
    } else {
      // product not exist in cart,  push product to cartItems array
      Cart.cartItems.push({ product, color, price: product.price });
    }
  }

  // Calculate total cart price
  calcTotalCartPrice(cart);
    await Cart.save();

    res.status(200).json({
      status: 'success',
      message: 'Product added to cart successfully',
      numOfCartItems: cart.cartItems.length,
      data: cart,
    });
}})
// exports.getCart = factory.getAll(createCartModel);
// exports.getCartByID = factory.getOne(createCartModel);
// exports.deleteCartByID = factory.deleteOne(createCartModel);
// exports.updateCart = factory.updateOne(createCartModel);
// exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
//     req.body.user = req.user._id;
//     next();
//   });
